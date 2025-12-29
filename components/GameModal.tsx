import React, { useState, useEffect, useRef } from 'react';
import { X, Gamepad2, Trophy, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, Loader2, Check, CircleX } from 'lucide-react';
import { PlayerInfo, GamePhase } from '../types';
import { QUESTION_BANK, Question } from '../cauhoi';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ isOpen, onClose }) => {
  const [phase, setPhase] = useState<GamePhase>('form');
  const [player, setPlayer] = useState<PlayerInfo>({ name: '', className: '', school: '' });
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userSelectedIndices, setUserSelectedIndices] = useState<(number | null)[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // App Script URL (Placeholder)
  const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwyU9D7y4vC5I5qWp8f8x3_kE8wGk0QY3w-z0h2S_x_Z2hG_x/exec';

  // Render MathJax whenever the question changes
  useEffect(() => {
    if (phase === 'playing' || phase === 'result') {
      if ((window as any).MathJax && (window as any).MathJax.typesetPromise) {
        (window as any).MathJax.typesetPromise();
      }
    }
  }, [phase, currentIdx]);

  if (!isOpen) return null;

  const startGame = (numQuestions: number) => {
    const shuffled = [...QUESTION_BANK].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, numQuestions);
    setCurrentQuestions(selected);
    setCurrentIdx(0);
    setUserSelectedIndices(new Array(numQuestions).fill(null));
    setPhase('playing');
  };

  const selectOption = (optionIdx: number) => {
    const newIndices = [...userSelectedIndices];
    newIndices[currentIdx] = optionIdx;
    setUserSelectedIndices(newIndices);
  };

  const handleNext = () => {
    if (currentIdx + 1 < currentQuestions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      if (confirm("Bạn có chắc chắn muốn hoàn thành bài thi?")) {
        finishGame();
      }
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    userSelectedIndices.forEach((selectedIdx, i) => {
      if (selectedIdx === currentQuestions[i].answer) {
        correctCount++;
      }
    });
    return (correctCount / currentQuestions.length) * 10;
  };

  const finishGame = async () => {
    setPhase('result');
    setIsSubmitting(true);
    const finalScore = calculateScore();

    const xepLoai = (s: number) => {
      if (s < 5) return 'Yêu';
      if (s < 7) return 'Trung bình';
      if (s < 8) return 'Khá';
      if (s < 9) return 'Giỏi';
      return 'Xuất sắc';
    };

    const payload = {
      time: new Date().toLocaleString('vi-VN'),
      name: player.name,
      className: player.className,
      school: player.school,
      answers: userSelectedIndices.map((idx, i) => idx === currentQuestions[i].answer ? 1 : 0),
      total: finalScore.toFixed(2),
      rank: xepLoai(finalScore)
    };

    try {
      await fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (e) {
      console.error("Lỗi lưu Sheet:", e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const score = calculateScore();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative my-8 animate-fade-in overflow-hidden">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-10 transition-colors">
          <X size={24} />
        </button>

        <div className="p-8 max-h-[85vh] overflow-y-auto" ref={contentRef}>
          {phase === 'form' && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gamepad2 size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Thử Thách Nhà Thông Thái</h2>
                <p className="text-gray-500">Nhập thông tin để bắt đầu trò chơi</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                  <input 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                    placeholder="Gợi ý: Nguyễn Văn Hà"
                    value={player.name}
                    onChange={e => setPlayer({...player, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lớp</label>
                    <input 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                      placeholder="Gợi ý: 12A1"
                      value={player.className}
                      onChange={e => setPlayer({...player, className: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Trường</label>
                    <input 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                      placeholder="Gợi ý: THPT YD2"
                      value={player.school}
                      onChange={e => setPlayer({...player, school: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <p className="text-sm font-bold text-gray-400 uppercase text-center">Chọn bộ câu hỏi</p>
                <div className="grid grid-cols-3 gap-3">
                  {[5, 10, 15].map(n => (
                    <button 
                      key={n}
                      disabled={!player.name || !player.className}
                      onClick={() => startGame(n)}
                      className="py-3 bg-blue-50 text-blue-600 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {n} Câu
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {phase === 'playing' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                  CÂU {currentIdx + 1} / {currentQuestions.length}
                </span>
                <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-300" 
                    style={{ width: `${((currentIdx + 1) / currentQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="min-h-[100px] flex items-center justify-center text-center">
                <h3 className="text-xl font-bold text-gray-800 leading-relaxed">
                  {currentQuestions[currentIdx].content}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {currentQuestions[currentIdx].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => selectOption(i)}
                    className={`group flex items-center justify-between p-4 border-2 rounded-2xl transition-all text-left ${
                      userSelectedIndices[currentIdx] === i 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-100 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className={`font-medium ${userSelectedIndices[currentIdx] === i ? 'text-blue-700' : 'text-gray-700'}`}>{opt}</span>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${userSelectedIndices[currentIdx] === i ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
                      {userSelectedIndices[currentIdx] === i && <Check size={14} className="text-white" />}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <button 
                  onClick={handlePrev}
                  disabled={currentIdx === 0}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft size={20} /> Quay lại
                </button>
                <button 
                  onClick={handleNext}
                  className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white transition-all shadow-lg ${
                    currentIdx + 1 === currentQuestions.length ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {currentIdx + 1 === currentQuestions.length ? 'Hoàn thành' : 'Tiếp theo'} <ArrowRight size={20} />
                </button>
              </div>
            </div>
          )}

          {phase === 'result' && (
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
                  <Trophy size={40} />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-1 tracking-tight">KẾT QUẢ</h2>
                <p className="text-gray-500 text-sm">Chúc mừng <strong>{player.name}</strong> đã hoàn thành!</p>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                <div className="text-center border-r border-blue-100">
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Điểm số</p>
                  <p className="text-4xl font-black text-blue-600">{score.toFixed(1)}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Xếp loại</p>
                  <p className={`text-2xl font-bold ${
                    score >= 9 ? 'text-purple-600' : score >= 8 ? 'text-green-600' : score >= 7 ? 'text-blue-600' : score >= 5 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {score < 5 ? 'Yếu' : score < 7 ? 'Trung bình' : score < 8 ? 'Khá' : score < 9 ? 'Giỏi' : 'Xuất sắc'}
                  </p>
                </div>
              </div>

              <div className="text-left space-y-3">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Chi tiết đáp án</p>
                <div className="grid grid-cols-5 sm:grid-cols-5 gap-2">
                  {currentQuestions.map((q, i) => {
                    const isCorrect = userSelectedIndices[i] === q.answer;
                    return (
                      <div 
                        key={i} 
                        className={`p-2 rounded-lg text-center flex flex-col items-center justify-center gap-1 border ${
                          isCorrect ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'
                        }`}
                      >
                        <span className="text-[10px] font-bold">Câu {i + 1}</span>
                        {isCorrect ? <CheckCircle2 size={16} /> : <CircleX size={16} />}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2 text-gray-400 italic text-sm">
                    <Loader2 className="animate-spin" size={16} /> Đang lưu kết quả lên Google Sheet...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-green-600 font-medium text-sm">
                    <CheckCircle2 size={16} /> Dữ liệu đã được lưu thành công!
                  </div>
                )}
                <button 
                  onClick={onClose}
                  className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-xl active:scale-95"
                >
                  Quay lại trang chính
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameModal;