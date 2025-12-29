import React, { useState, useEffect } from 'react';
import { Calendar, Edit2, Save, XCircle } from 'lucide-react';
import { ScheduleGrid } from '../types';
import { useApp } from '../contexts/AppContext';

const Schedule: React.FC = () => {
  const { scheduleData, setScheduleData, isAdmin } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [editGrid, setEditGrid] = useState<ScheduleGrid>(scheduleData);

  // Sync state when data changes externally (or on mount)
  useEffect(() => {
    setEditGrid(scheduleData);
  }, [scheduleData]);

  const handleEdit = () => {
    setEditGrid(JSON.parse(JSON.stringify(scheduleData))); // Deep copy
    setIsEditing(true);
  };

  const handleSave = () => {
    setScheduleData(editGrid);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditGrid(scheduleData);
  };

  const handleCellChange = (rowIndex: number, colIndex: number, value: string) => {
    const key = `${rowIndex}-${colIndex}`;
    setEditGrid(prev => ({
      ...prev,
      cells: {
        ...prev.cells,
        [key]: value
      }
    }));
  };

  const handleClassHeaderChange = (index: number, value: string) => {
    const newClassNames = [...editGrid.classNames];
    newClassNames[index] = value;
    setEditGrid(prev => ({ ...prev, classNames: newClassNames }));
  };

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
           <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Calendar className="text-blue-600" /> Lịch Học (Thời khóa biểu)
          </h2>
          <p className="text-gray-500 mt-2">Lịch học các khối lớp trong tuần.</p>
        </div>
       
        {isAdmin && (
          <div className="flex gap-2">
            {!isEditing ? (
              <button 
                onClick={handleEdit}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
              >
                <Edit2 size={16} /> Sửa thời khóa biểu
              </button>
            ) : (
              <div className="flex gap-2">
                <button 
                  onClick={handleSave}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  <Save size={16} /> Lưu
                </button>
                <button 
                  onClick={handleCancel}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
                >
                  <XCircle size={16} /> Hủy
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-x-auto border border-gray-200">
        <table className="w-full text-center border-collapse table-fixed min-w-[1000px]">
          <thead>
            <tr>
              {/* Top-Left Corner Cell: (0,0) */}
              <th className="w-32 p-3 border border-gray-200 bg-blue-100 text-blue-900 font-bold uppercase text-sm">
                Thứ / Lớp
              </th>
              {/* Header Row: Classes */}
              {(isEditing ? editGrid.classNames : scheduleData.classNames).map((cls, colIndex) => (
                <th key={`head-${colIndex}`} className="p-3 border border-gray-200 bg-blue-50 text-blue-800 font-bold">
                  {isEditing ? (
                    <input 
                      className="w-full bg-white border border-blue-200 rounded px-2 py-1 text-center focus:ring-2 focus:ring-blue-500 outline-none"
                      value={cls}
                      onChange={(e) => handleClassHeaderChange(colIndex, e.target.value)}
                    />
                  ) : cls}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Rows: Days */}
            {(isEditing ? editGrid.days : scheduleData.days).map((day, rowIndex) => (
              <tr key={`row-${rowIndex}`} className="hover:bg-gray-50">
                {/* First Column: Day */}
                <td className="p-3 border border-gray-200 bg-gray-50 font-bold text-gray-700">
                  {day}
                </td>
                {/* Cells: Class Content */}
                {(isEditing ? editGrid.classNames : scheduleData.classNames).map((_, colIndex) => {
                  const key = `${rowIndex}-${colIndex}`;
                  const cellContent = (isEditing ? editGrid.cells[key] : scheduleData.cells[key]) || "";
                  
                  return (
                    <td key={key} className="p-2 border border-gray-200 h-16 relative align-middle">
                      {isEditing ? (
                        <textarea
                          className="w-full h-full min-h-[50px] bg-transparent border-none text-center text-sm resize-none focus:bg-yellow-50 focus:ring-1 focus:ring-yellow-400 outline-none rounded"
                          value={cellContent}
                          onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                          placeholder="..."
                        />
                      ) : (
                        cellContent && (
                          <div className="flex items-center justify-center h-full">
                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                              {cellContent}
                            </span>
                          </div>
                        )
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {isAdmin && isEditing && (
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg text-sm">
          <strong>Hướng dẫn:</strong> Nhập tên Lớp vào hàng tiêu đề. Nhập giờ học vào các ô tương ứng. Dữ liệu sẽ được lưu vào trình duyệt của bạn.
        </div>
      )}
    </section>
  );
};

export default Schedule;