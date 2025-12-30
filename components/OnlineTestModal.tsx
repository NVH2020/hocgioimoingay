import React, { useState } from 'react';
import { X, Check, ClipboardCheck } from 'lucide-react';

interface OnlineTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const subjects = ["Toán", "Lý", "Hóa", "Sinh", "Tin", "Anh", "Sử", "Địa", "KTPT", "CNCN", "CNNN", "Văn", "Tâm Lý", "Khoa học vũ trụ"];
const levels = ["THPT", "THCS", "Tiểu học", "Đại học", "Cao học", "Siêu học"];

const OnlineTestModal: React.FC<OnlineTestModalProps> = ({ isOpen, onClose }) => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleStart = () => {
    if (selectedSubject && selectedLevel) {
      let targetUrl = 'https://taodeonlinemontoanthpt.vercel.app/';

      if (selectedSubject === "Toán" && selectedLevel === "THPT") {
        targetUrl = 'https://taodeonlinemontoanthpt.vercel.app/';
      }

      // CÁCH 1: Chuyển hướng ngay tại tab cũ (An toàn nhất, không bị chặn)
      window.location.href = targetUrl;   

      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative overflow-hidden animate-fade-in">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-10">
          <X size={24} />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClipboardCheck size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Kiểm Tra Online</h2>
            <p className="text-gray-500">Vui lòng chọn Môn học và Cấp học của bạn</p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Cột Môn Học */}
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">Chọn Môn Học</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                {subjects.map(sub => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubject(sub)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all ${
                      selectedSubject === sub ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-50 hover:border-gray-200'
                    }`}
                  >
                    <span className="font-medium">{sub}</span>
                    {selectedSubject === sub && <Check size={18} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Cột Cấp Học */}
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">Chọn Cấp Học</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                {levels.map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all ${
                      selectedLevel === lvl ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-50 hover:border-gray-200'
                    }`}
                  >
                    <span className="font-medium">{lvl}</span>
                    {selectedLevel === lvl && <Check size={18} />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleStart}
            disabled={!selectedSubject || !selectedLevel}
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
          >
            Bắt đầu làm bài
          </button>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default OnlineTestModal;
