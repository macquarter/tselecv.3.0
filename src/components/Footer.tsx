import { Link } from 'react-router-dom';
import Logo from './Logo';
import EditableText from './admin/EditableText';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link 
              to="/" 
              className="mb-6 hover:opacity-80 transition-opacity inline-flex"
              onClick={() => {
                if (window.location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <Logo />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              <EditableText 
                id="footer-description" 
                defaultText="1989년 설립 이래 마이크로컨트롤러 설계·제조 전문 기업으로 가전, 의료, 태양광 분야의 신뢰할 수 있는 전자부품 파트너입니다." 
                multiline 
              />
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6">
              <EditableText id="footer-col-1-title" defaultText="회사소개" />
            </h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors"><EditableText id="footer-col-1-item-1" defaultText="인사말" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors"><EditableText id="footer-col-1-item-2" defaultText="회사연혁" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors"><EditableText id="footer-col-1-item-3" defaultText="인증현황" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors"><EditableText id="footer-col-1-item-4" defaultText="오시는 길" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6">
              <EditableText id="footer-col-2-title" defaultText="제품소개" />
            </h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors"><EditableText id="footer-col-2-item-1" defaultText="메인 컨트롤러" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors"><EditableText id="footer-col-2-item-2" defaultText="디스플레이" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors"><EditableText id="footer-col-2-item-3" defaultText="기타" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors"><EditableText id="footer-col-2-item-4" defaultText="공정도" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6">
              <EditableText id="footer-col-3-title" defaultText="고객지원" />
            </h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors"><EditableText id="footer-col-3-item-1" defaultText="자주 묻는 질문" /></a></li>
              <li><a href="#contact" className="hover:text-white transition-colors"><EditableText id="footer-col-3-item-2" defaultText="문의하기" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors"><EditableText id="footer-col-3-item-3" defaultText="뉴스" /></a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-gray-600">
          <div><EditableText id="footer-copyright" defaultText="&copy; 2026 태승전자(주) TSELEC Co., Ltd. All rights reserved." /></div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="px-3 py-1 rounded-full border border-white/10 text-gray-400"><EditableText id="footer-badge-1" defaultText="ISO 9001" /></span>
            <span className="px-3 py-1 rounded-full border border-white/10 text-gray-400"><EditableText id="footer-badge-2" defaultText="CE" /></span>
            <span className="px-3 py-1 rounded-full border border-white/10 text-gray-400"><EditableText id="footer-badge-3" defaultText="KC" /></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
