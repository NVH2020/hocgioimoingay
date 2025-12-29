import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Calendar, FileText, MessageCircle, Phone, Home, LogIn, LogOut, User, UserPlus } from 'lucide-react';
import { ViewState } from '../types';
import { useApp } from '../contexts/AppContext';
import AdminLogin from './AdminLogin';

interface HeaderProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const { isAdmin, logout } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: ViewState; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Trang chủ', icon: <Home size={18} /> },
    { id: 'classes', label: 'Lớp học', icon: <BookOpen size={18} /> },
    { id: 'schedule', label: 'Lịch học', icon: <Calendar size={18} /> },
    { id: 'documents', label: 'Tài liệu', icon: <FileText size={18} /> },
    { id: 'chatbot', label: 'ChatBot', icon: <MessageCircle size={18} /> },
    { id: 'contact', label: 'Liên hệ', icon: <Phone size={18} /> },
  ];

  const handleNavClick = (view: ViewState) => {
    setView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-xl">TH</div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-800 text-lg leading-tight">Toán Thầy Hà</span>
              <span className="text-xs text-blue-600 font-medium tracking-wider">BẮC NINH</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <nav className="flex items-center gap-1 mr-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors text-sm font-medium ${
                    currentView === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </nav>
            
            <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-bold transition-colors"
              >
                <UserPlus size={16} /> Đăng ký
              </a>
              
              {isAdmin ? (
                <button 
                  onClick={logout}
                  className="flex items-center gap-2 text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <LogOut size={16} /> Admin
                </button>
              ) : (
                <button 
                  onClick={() => setIsLoginOpen(true)}
                  className="flex items-center gap-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <User size={16} /> Admin
                </button>
              )}
            </div>
          </div>

          <button
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-base font-medium ${
                    currentView === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.icon} {item.label}
                </button>
              ))}
              <div className="border-t border-gray-100 my-2 pt-2 space-y-2">
                <a 
                  href="https://forms.gle/6dN9BjhVepc8K2VTA" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-blue-600 hover:bg-blue-50 w-full text-left font-bold"
                >
                  <UserPlus size={18} /> Đăng ký tài khoản
                </a>
                {isAdmin ? (
                  <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 w-full text-left">
                    <LogOut size={18} /> Đăng xuất Admin
                  </button>
                ) : (
                  <button onClick={() => { setIsLoginOpen(true); setIsMobileMenuOpen(false); }} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 w-full text-left">
                    <LogIn size={18} /> Đăng nhập Admin
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
      <AdminLogin isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Header;
