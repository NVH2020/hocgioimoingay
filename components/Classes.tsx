import React, { useState } from 'react';
import { ArrowLeft, Book, ChevronRight, Video, Link as LinkIcon, Plus, Trash2, Edit, Send } from 'lucide-react';
import { ClassInfo } from '../types';
import { useApp } from '../contexts/AppContext';

const Classes: React.FC = () => {
  const { classesData, addClass, updateClass, deleteClass, isAdmin } = useApp();
  const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);
  const [isEditingClass, setIsEditingClass] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<ClassInfo>>({});

  const handleAddNew = () => {
    const newClass: ClassInfo = {
      id: Date.now().toString(),
      grade: 10,
      title: 'Lớp Học Mới',
      description: 'Mô tả lớp học...',
      schedule: 'Chưa cập nhật',
      link: ''
    };
    addClass(newClass);
    setIsEditingClass(newClass.id);
    setEditForm(newClass);
  };

  const startEdit = (e: React.MouseEvent, cls: ClassInfo) => {
    e.stopPropagation();
    setIsEditingClass(cls.id);
    setEditForm(cls);
  };

  const saveEdit = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isEditingClass && editForm.id) {
      updateClass(isEditingClass, editForm as ClassInfo);
      setIsEditingClass(null);
    }
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (confirm("Bạn có chắc chắn muốn xóa lớp học này?")) {
      deleteClass(id);
      if (selectedClass?.id === id) setSelectedClass(null);
    }
  };

  if (selectedClass) {
    const isEditingThis = isEditingClass === selectedClass.id;
    
    return (
      <div className="container mx-auto px-4 py-24 min-h-screen">
        <button 
          onClick={() => { setSelectedClass(null); setIsEditingClass(null); }}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-6 transition-colors"
        >
          <ArrowLeft size={20} /> Quay lại danh sách lớp
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative">
          {isAdmin && !isEditingThis && (
            <button 
              onClick={(e) => startEdit(e, selectedClass)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm z-10"
            >
              <Edit size={20} />
            </button>
          )}

          {isEditingThis ? (
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-bold">Chỉnh sửa nội dung chi tiết</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Tên Lớp</label>
                    <input className="w-full border p-2 rounded" value={editForm.title} onChange={e => setEditForm({...editForm, title: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Lịch học</label>
                    <input className="w-full border p-2 rounded" value={editForm.schedule} onChange={e => setEditForm({...editForm, schedule: e.target.value})} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Mô tả chi tiết</label>
                    <textarea rows={5} className="w-full border p-2 rounded" value={editForm.description} onChange={e => setEditForm({...editForm, description: e.target.value})} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Link Tham Gia (Zalo/FB Group)</label>
                    <input className="w-full border p-2 rounded" value={editForm.link || ''} onChange={e => setEditForm({...editForm, link: e.target.value})} placeholder="https://..." />
                  </div>
               </div>
               <div className="flex gap-2 justify-end">
                 <button onClick={() => setIsEditingClass(null)} className="px-4 py-2 border rounded">Hủy</button>
                 <button onClick={() => { saveEdit(); setSelectedClass(editForm as ClassInfo); }} className="px-4 py-2 bg-blue-600 text-white rounded">Lưu</button>
               </div>
            </div>
          ) : (
            <>
              <div className="bg-blue-600 p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">{selectedClass.title}</h2>
                <p className="opacity-90 text-lg">{selectedClass.schedule}</p>
              </div>
              
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Book className="text-blue-600" /> Nội dung khóa học
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    {selectedClass.description}
                  </p>
                  
                  <a 
                    href={selectedClass.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/30 group"
                  >
                    <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                    {selectedClass.grade === 8 ? 'Tham gia Fanpage Facebook' : 'Tham gia nhóm Zalo Tuyển sinh'}
                  </a>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Video className="text-red-500" /> Tài nguyên học tập
                  </h3>
                  <div className="w-full bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 p-8 flex flex-col items-center justify-center text-center h-48 lg:h-64">
                    <LinkIcon size={48} className="text-gray-400 mb-4" />
                    <p className="text-gray-500 font-medium">Nội dung dành cho học viên</p>
                    <p className="text-gray-400 text-sm mt-2">Vui lòng đăng nhập hoặc tham gia nhóm để xem tài liệu chi tiết.</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16 relative">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Các Lớp Học Đang Tuyển Sinh</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Chọn lớp học phù hợp để xem lịch trình chi tiết và tham gia nhóm học tập.
        </p>
        {isAdmin && (
          <button 
            onClick={handleAddNew}
            className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 shadow-lg transition-transform hover:scale-105 font-bold"
          >
            <Plus size={20} /> Thêm Lớp Học Mới
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {classesData.map((cls) => (
          <div 
            key={cls.id}
            onClick={() => setSelectedClass(cls)}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer flex flex-col relative"
          >
            {isAdmin && (
              <div className="absolute top-2 right-2 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button onClick={(e) => startEdit(e, cls)} className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200"><Edit size={16} /></button>
                 <button onClick={(e) => handleDelete(e, cls.id)} className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200"><Trash2 size={16} /></button>
              </div>
            )}

            {isEditingClass === cls.id ? (
               <div className="p-6 flex-1 flex flex-col gap-3" onClick={e => e.stopPropagation()}>
                 <input className="border p-1 rounded text-sm w-full" value={editForm.grade} onChange={e => setEditForm({...editForm, grade: Number(e.target.value)})} />
                 <input className="border p-1 rounded font-bold w-full" value={editForm.title} onChange={e => setEditForm({...editForm, title: e.target.value})} />
                 <textarea className="border p-1 rounded text-sm w-full flex-1" value={editForm.description} onChange={e => setEditForm({...editForm, description: e.target.value})} />
                 <div className="flex gap-2 mt-2">
                   <button onClick={saveEdit} className="bg-blue-600 text-white px-3 py-1 rounded text-sm w-full">Lưu</button>
                   <button onClick={(e) => { e.stopPropagation(); setIsEditingClass(null); }} className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm w-full">Hủy</button>
                 </div>
               </div>
            ) : (
              <>
                <div className="h-2 bg-blue-500 w-0 group-hover:w-full transition-all duration-500"></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide">Lớp {cls.grade}</span>
                    <ChevronRight className="text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{cls.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-1">{cls.description}</p>
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <p className="text-xs text-gray-500 font-medium">Lịch học:</p>
                    <p className="text-sm text-gray-800 font-semibold">{cls.schedule}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;