import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import { LayoutDashboard, FileText, MessageSquare, Download } from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { isAdmin } = useAdmin();

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    if (!adminStatus) {
      navigate('/login');
    }
  }, [navigate]);

  const adminStatus = localStorage.getItem('isAdmin') === 'true';
  if (!adminStatus && !isAdmin) return null;

  const adminMenus = [
    { title: '콘텐츠 관리', icon: <FileText size={24} />, path: '/dashboard/content', desc: '웹사이트의 모든 텍스트 및 이미지 데이터를 직접 수정합니다.' },
    { title: '공지사항 관리', icon: <MessageSquare size={24} />, path: '/dashboard/news', desc: '공지사항 게시판의 글을 작성하고 관리합니다.' },
    { title: '자료실 관리', icon: <Download size={24} />, path: '/dashboard/downloads', desc: '자료실 게시판의 파일과 글을 관리합니다.' },
  ];

  return (
    <div className="p-8 md:p-12 text-white">
      <header className="mb-12">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <LayoutDashboard className="text-blue-500" size={32} />
          대시보드 홈
        </h2>
        <p className="text-gray-400">TSelec 웹사이트의 모든 콘텐츠를 관리할 수 있습니다.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adminMenus.map((menu, idx) => (
          <Link 
            key={idx}
            to={menu.path}
            className="bg-[#111] border border-white/5 hover:border-white/20 p-6 rounded-2xl transition-all hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
              {menu.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{menu.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {menu.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
