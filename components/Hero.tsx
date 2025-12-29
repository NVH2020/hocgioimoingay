import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Edit3, Gamepad2, FileText, ClipboardCheck } from 'lucide-react';
import { ViewState } from '../types';
import { useApp } from '../contexts/AppContext';
import GameModal from './GameModal';
import OnlineTestModal from './OnlineTestModal';

interface HeroProps {
  setView: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const { heroData, setHeroData, isAdmin } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(heroData);
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);

  const handleSave = () => {
    setHeroData(editForm);
    setIsEditing(false);
  };

  const buttonClass = "w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30";

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden group">
      {isAdmin && !isEditing && (
        <button onClick={() => setIsEditing(true)} className="absolute top-24 right-4 z-50 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-all"><Edit3 size={20} /></button>
      )}

      {isEditing && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
           <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-2xl">
             <h3 className="text-xl font-bold mb-4">Chỉnh sửa trang chủ</h3>
             <div className="space-y-4">
               <input className="w-full border p-2 rounded" placeholder="Badge" value={editForm.badge} onChange={e => setEditForm({...editForm, badge: e.target.value})} />
               <input className="w-full border p-2 rounded" placeholder="Dòng 1" value={editForm.titleLine1} onChange={e => setEditForm({...editForm, titleLine1: e.target.value})} />
               <input className="w-full border p-2 rounded" placeholder="Dòng 2" value={editForm.titleLine2} onChange={e => setEditForm({...editForm, titleLine2: e.target.value})} />
               <textarea className="w-full border p-2 rounded h-24" placeholder="Mô tả" value={editForm.description} onChange={e => setEditForm({...editForm, description: e.target.value})} />
               <div className="flex justify-end gap-2 mt-4">
                 <button onClick={() => setIsEditing(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Hủy</button>
                 <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Lưu</button>
               </div>
             </div>
           </div>
        </div>
      )}

      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop" alt="Universe Math Background" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">{heroData.badge}</div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">{heroData.titleLine1} <br/><span className="text-blue-600">{heroData.titleLine2}</span></h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 whitespace-pre-line">{heroData.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mx-auto lg:mx-0">
              <button onClick={() => setView('classes')} className={buttonClass}><CheckCircle size={20} /> <span>Đăng ký học Toán</span></button>
              <button onClick={() => setIsTestModalOpen(true)} className={buttonClass}><ClipboardCheck size={20} /> <span>Kiểm tra Online</span></button>
              <a href="https://forms .  gle/6dN9BjhVepc8K2VTA" target="_blank" rel="noreferrer" className={buttonClass}><Gamepad2 size={20} /> <span>Đăng ký sử dụng App</span></a>              
              <button onClick={() => setView('documents')} className={buttonClass}><FileText size={20} /> <span>Xem tài liệu</span></button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full max-w-lg lg:max-w-none">
            <div className="relative group/game">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl opacity-20 blur-2xl animate-pulse"></div>
              {/* Ảnh minh họa không gian/toán học chất lượng cao */} 
             
             <img src="https://raw.githubusercontent.com/NVH2020/Anhbaithi/main/background.png" alt="Mathematics Space Illustration" className="relative rounded-3xl shadow-2xl w-full object-cover h-[400px] lg:h-[500px]" />
              <button onClick={() => setIsGameOpen(true)} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white/95 backdrop-blur rounded-full shadow-2xl flex flex-col items-center justify-center gap-1 group/btn hover:bg-blue-600 hover:text-white transition-all duration-300 animate-pulse hover:animate-none group-hover/game:scale-110 z-20 border-4 border-white shadow-blue-500/20">
                <Gamepad2 size={40} className="text-blue-600 group-hover/btn:text-white transition-colors" /><span className="text-[11px] font-black uppercase tracking-widest text-blue-600 group-hover/btn:text-white">Mini Game</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <GameModal isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
      <OnlineTestModal isOpen={isTestModalOpen} onClose={() => setIsTestModalOpen(false)} />
    </section>
  );
};

export default Hero;
