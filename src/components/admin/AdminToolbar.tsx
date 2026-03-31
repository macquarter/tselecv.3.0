import React from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { Settings, LogOut, Edit3, Save, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminToolbar() {
  const { isAdmin, isEditMode, setIsEditMode, logout } = useAdmin();
  const navigate = useNavigate();

  if (!isAdmin) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#111] border border-white/10 rounded-full px-6 py-3 shadow-2xl z-[100] flex items-center gap-6 backdrop-blur-md">
      <div className="flex items-center gap-2 text-white font-medium">
        <Settings size={18} className="text-sky-400" />
        <span>관리자 모드</span>
      </div>
      
      <div className="w-px h-6 bg-white/10"></div>
      
      <button 
        onClick={() => setIsEditMode(!isEditMode)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors text-sm font-medium ${
          isEditMode 
            ? 'bg-sky-500 text-white' 
            : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
        }`}
      >
        {isEditMode ? (
          <>
            <Eye size={16} />
            <span>미리보기</span>
          </>
        ) : (
          <>
            <Edit3 size={16} />
            <span>페이지 편집</span>
          </>
        )}
      </button>

      <div className="w-px h-6 bg-white/10"></div>
      
      <button 
        onClick={() => {
          logout();
          navigate('/');
        }}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
      >
        <LogOut size={16} />
        <span>로그아웃</span>
      </button>
    </div>
  );
}
