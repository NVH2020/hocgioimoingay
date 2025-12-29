import React, { useState } from 'react';
import { FileText, Download, Search, Filter, FileCode, PlayCircle, Plus, Trash2 } from 'lucide-react';
import { DocumentItem } from '../types';
import { useApp } from '../contexts/AppContext';

const Documents: React.FC = () => {
  const { documentsData, addDocument, deleteDocument, isAdmin } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'ALL' | 'PDF' | 'DOC' | 'VIDEO'>('ALL');
  
  // Add New Modal State
  const [isAdding, setIsAdding] = useState(false);
  const [newDoc, setNewDoc] = useState<Partial<DocumentItem>>({ type: 'PDF' });

  const filteredDocs = documentsData.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'ALL' || doc.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'PDF': return <FileText className="text-red-500" />;
      case 'DOC': return <FileCode className="text-blue-500" />;
      case 'VIDEO': return <PlayCircle className="text-purple-500" />;
      default: return <FileText className="text-gray-500" />;
    }
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDoc.title && newDoc.type) {
      addDocument({
        id: Date.now(),
        title: newDoc.title,
        type: newDoc.type as any,
        date: new Date().toLocaleDateString('vi-VN'),
        downloadUrl: newDoc.downloadUrl || '#'
      });
      setIsAdding(false);
      setNewDoc({ type: 'PDF' });
    }
  };

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-12 relative">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Kho Tài Liệu</h2>
        <p className="text-gray-600">Tổng hợp đề thi, bài tập và video bài giảng chất lượng cao.</p>
        
        {isAdmin && (
          <button 
            onClick={() => setIsAdding(true)}
            className="mt-4 inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-medium"
          >
            <Plus size={18} /> Thêm Tài Liệu
          </button>
        )}
      </div>

      {/* Add Document Modal */}
      {isAdding && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <form onSubmit={handleAddSubmit} className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl space-y-4">
            <h3 className="text-xl font-bold">Thêm tài liệu mới</h3>
            <div>
              <label className="block text-sm font-medium mb-1">Tiêu đề</label>
              <input 
                required
                className="w-full border p-2 rounded" 
                value={newDoc.title || ''} 
                onChange={e => setNewDoc({...newDoc, title: e.target.value})} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Loại</label>
              <select 
                className="w-full border p-2 rounded"
                value={newDoc.type}
                onChange={e => setNewDoc({...newDoc, type: e.target.value as any})}
              >
                <option value="PDF">PDF</option>
                <option value="DOC">Word (DOC)</option>
                <option value="VIDEO">Video</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Link Tải/Xem</label>
              <input 
                className="w-full border p-2 rounded" 
                value={newDoc.downloadUrl || ''} 
                onChange={e => setNewDoc({...newDoc, downloadUrl: e.target.value})} 
                placeholder="https://drive.google.com/..."
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button type="button" onClick={() => setIsAdding(false)} className="px-4 py-2 border rounded text-gray-600">Hủy</button>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Thêm</button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Tìm kiếm tài liệu..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {(['ALL', 'PDF', 'DOC', 'VIDEO'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap ${
                  filterType === type 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {type === 'ALL' ? 'Tất cả' : type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredDocs.map((doc) => (
            <div key={doc.id} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition-all duration-200 group relative">
              <div className="p-3 bg-white rounded-lg shadow-sm mr-4 group-hover:scale-110 transition-transform">
                {getIcon(doc.type)}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {doc.title}
                </h3>
                <div className="flex gap-3 text-xs text-gray-500 mt-1">
                  <span>{doc.date}</span>
                  <span>•</span>
                  <span>{doc.type}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <a href={doc.downloadUrl} target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                  <Download size={20} />
                </a>
                {isAdmin && (
                  <button 
                    onClick={() => { if(confirm('Xóa tài liệu này?')) deleteDocument(doc.id) }} 
                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                )}
              </div>
            </div>
          ))}

          {filteredDocs.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Không tìm thấy tài liệu phù hợp.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Documents;