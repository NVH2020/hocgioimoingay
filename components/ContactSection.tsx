import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Edit3, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const ContactSection: React.FC = () => {
  const { contactData, setContactData, isAdmin } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(contactData);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  // Submission Status State
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSave = () => {
    setContactData(editForm);
    setIsEditing(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/mwveprpv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          _subject: `[Web Admin Toán] Liên hệ từ ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const zaloGroups = [
    { label: 'Zalo 09', url: 'https://zalo.me/g/chbubv440' },
    { label: 'Zalo 10', url: 'https://zalo.me/g/rgpoan570' },
    { label: 'Zalo 11', url: 'https://zalo.me/g/ejgrul952' },
    { label: 'Zalo 12', url: 'https://zalo.me/g/dmjbwl420' },
  ];

  return (
    <section className="container mx-auto px-4 py-24 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Liên Hệ Với Thầy Hà</h2>
        <p className="text-gray-600">
          Giải đáp thắc mắc về khóa học và tư vấn lộ trình học tập.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info & Map Embed */}
        <div className="space-y-8 relative group">
          {isAdmin && !isEditing && (
            <button 
              onClick={() => { setIsEditing(true); setEditForm(contactData); }}
              className="absolute -top-4 -right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-700 transition-colors"
              title="Sửa thông tin liên hệ"
            >
              <Edit3 size={16} />
            </button>
          )}

          {isEditing ? (
             <div className="bg-white p-6 rounded-xl shadow border border-blue-200 space-y-4">
               <h3 className="font-bold text-blue-600">Chỉnh sửa thông tin liên hệ</h3>
               <div>
                 <label className="text-xs text-gray-500">Số điện thoại hiển thị</label>
                 <input className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" value={editForm.phone} onChange={e => setEditForm({...editForm, phone: e.target.value})} />
               </div>
               <div>
                 <label className="text-xs text-gray-500">Email nhận thông báo (Formspree)</label>
                 <input className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" value={editForm.email} onChange={e => setEditForm({...editForm, email: e.target.value})} />
               </div>
               <div>
                 <label className="text-xs text-gray-500">Địa chỉ</label>
                 <input className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" value={editForm.address} onChange={e => setEditForm({...editForm, address: e.target.value})} />
               </div>
               <div className="flex gap-2">
                 <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors">Lưu</button>
                 <button onClick={() => setIsEditing(false)} className="bg-gray-200 text-gray-700 px-4 py-2 rounded font-medium hover:bg-gray-300 transition-colors">Hủy</button>
               </div>
             </div>
          ) : (
            <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Thông Tin Liên Lạc</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="opacity-80 text-sm">Điện thoại / Zalo</p>
                    <p className="font-semibold text-lg">{contactData.phone}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="opacity-80 text-sm">Email nhận thư</p>
                    <p className="font-semibold text-lg">{contactData.email}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="opacity-80 text-sm">Địa chỉ</p>
                    <p className="font-semibold text-lg">{contactData.address}</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm opacity-80 mb-4 font-medium uppercase tracking-wider">Mạng xã hội & Nhóm học tập</p>
               {/* Facebook – 1 hàng riêng */}
<div className="flex mb-4">
  <a
    href="https://www.facebook.com/hoctoanthayha.bg"
    target="_blank"
    rel="noreferrer"
    className="bg-white text-blue-600 px-4 py-2 rounded-full
               hover:bg-gray-100 transition
               flex items-center gap-2 font-semibold shadow-sm"
  >
    <Facebook size={18} />
    Facebook
  </a>
</div>

{/* Zalo – 1 hàng riêng */}
<div className="flex flex-wrap gap-3">
  {zaloGroups.map((group, idx) => (
    <a
      key={idx}
      href={group.url}
      target="_blank"
      rel="noreferrer"
      className="bg-white text-blue-500
                 px-3 py-2 rounded-full
                 hover:bg-gray-100 transition
                 flex items-center gap-2
                 text-sm font-semibold shadow-sm"
    >
      <MessageCircle size={16} />
      {group.label}
    </a>
  ))}
</div>


              </div>
            </div>
          )}

          {/* Map Embed Placeholder */}
          <div className="bg-gray-200 h-64 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center relative group border border-gray-300">
            <img 
              src="https://picsum.photos/seed/map/600/400" 
              alt="Map Preview" 
              className="w-full h-full object-cover opacity-60" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/10 backdrop-blur-[2px]">
               <MapPin size={48} className="text-red-600 mb-2 drop-shadow-lg animate-bounce" />
               <span className="bg-white px-3 py-1 rounded shadow-lg text-sm font-bold text-gray-800">
                 {contactData.address}
               </span>
            </div>
          </div>
        </div>

        {/* Contact Form Integrated with Formspree */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Gửi Tin Nhắn Cho Thầy</h3>
          
          {status === 'success' ? (
            <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={40} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Cảm ơn bạn!</h4>
              <p className="text-gray-600 mb-6">Thông tin của bạn đã được gửi đến email của thầy thành công. Thầy sẽ phản hồi sớm nhất có thể.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-blue-600 font-semibold hover:underline"
              >
                Gửi thêm tin nhắn khác
              </button>
            </div>
          ) : null}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Họ và tên</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Số điện thoại</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="0912..."
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email của bạn</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Nội dung cần tư vấn</label>
              <textarea 
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Em muốn đăng ký học lớp 10..."
              ></textarea>
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-100 animate-shake">
                <AlertCircle size={18} />
                <span className="text-sm font-medium">Đã có lỗi xảy ra. Vui lòng thử lại sau.</span>
              </div>
            )}

            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 mt-4 disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> Đang gửi tin nhắn...
                </>
              ) : (
                <>
                  <Send size={18} /> Gửi Tin Nhắn
                </>
              )}
            </button>
            <p className="text-xs text-gray-400 text-center mt-2">
              Thông tin của bạn sẽ được gửi trực tiếp tới hòm thư của thầy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;