import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import { LayoutDashboard, Settings, MessageSquare, Download, LogOut, FileText } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAdmin();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [
    { title: '대시보드 홈', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { title: '콘텐츠 관리', icon: <FileText size={20} />, path: '/dashboard/content' },
    { title: '공지사항 관리', icon: <MessageSquare size={20} />, path: '/dashboard/news' },
    { title: '자료실 관리', icon: <Download size={20} />, path: '/dashboard/downloads' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111] border-r border-white/10 hidden md:flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Settings className="text-blue-500" />
            TSelec Admin
          </h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            관리 메뉴
          </div>
          {menuItems.map((menu, idx) => {
            const isActive = location.pathname === menu.path;
            return (
              <Link 
                key={idx} 
                to={menu.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive 
                    ? 'bg-blue-500/10 text-blue-400' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {menu.icon}
                <span className="font-medium">{menu.title}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors text-red-400 hover:text-red-300"
          >
            <LogOut size={16} />
            로그아웃
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
