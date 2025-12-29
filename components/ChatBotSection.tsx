import React from 'react';
import { Bot, ExternalLink } from 'lucide-react';

const ChatBotSection: React.FC = () => {
  const CHATBOT_URL = "https://new-chat-bot-two.vercel.app/";

  return (
    <section className="container mx-auto px-4 py-8 flex flex-col items-center h-[calc(100vh-80px)]">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
          <Bot size={28} className="text-blue-600" /> Trợ Lý Ảo Toán Học
        </h2>
        <p className="text-gray-600 text-sm">
          Trò chuyện trực tiếp với trợ lý ảo. Nếu không tải được, 
          <a href={CHATBOT_URL} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline ml-1 font-medium inline-flex items-center gap-1">
            nhấn vào đây <ExternalLink size={12}/>
          </a>
        </p>
      </div>

      <div className="w-full h-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden relative">
        <iframe 
          src={CHATBOT_URL} 
          title="Toán Thầy Hà Chatbot"
          className="w-full h-full border-0"
          allow="microphone;"
        ></iframe>
      </div>
    </section>
  );
};

export default ChatBotSection;