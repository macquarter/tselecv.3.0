import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Download, FileText, Search } from 'lucide-react';

const downloads = [
  {
    id: 1,
    category: '제품 카탈로그',
    title: '2026 태승일렉 종합 카탈로그 (KOR)',
    date: '2026.03.15',
    size: '15.2 MB',
    type: 'PDF'
  },
  {
    id: 2,
    category: '제품 카탈로그',
    title: '2026 TSELEC General Catalog (ENG)',
    date: '2026.03.15',
    size: '14.8 MB',
    type: 'PDF'
  },
  {
    id: 3,
    category: '매뉴얼',
    title: 'TS-MC2000 메인 컨트롤러 사용자 매뉴얼',
    date: '2026.02.10',
    size: '5.4 MB',
    type: 'PDF'
  },
  {
    id: 4,
    category: '인증서',
    title: 'ISO 9001 품질경영시스템 인증서',
    date: '2026.01.05',
    size: '1.2 MB',
    type: 'PDF'
  },
  {
    id: 5,
    category: '소프트웨어',
    title: 'TS-Display 펌웨어 업데이트 툴 v2.1',
    date: '2025.11.20',
    size: '45.8 MB',
    type: 'ZIP'
  }
];

export default function Downloads() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-white/30 selection:text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6"
            >
              자료실
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg md:text-xl font-light max-w-2xl"
            >
              태승일렉의 제품 카탈로그, 매뉴얼, 인증서 등 다양한 자료를 다운로드하실 수 있습니다.
            </motion.p>
          </div>

          {/* Search and Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 mb-12"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="text" 
                placeholder="자료명 검색..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              {['전체', '제품 카탈로그', '매뉴얼', '인증서', '소프트웨어'].map((filter, i) => (
                <button 
                  key={i}
                  className={`px-6 py-4 rounded-xl whitespace-nowrap text-sm font-medium transition-colors ${
                    i === 0 ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Downloads List */}
          <div className="space-y-4">
            {downloads.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:bg-[#111] hover:border-white/10 transition-all duration-300 gap-6"
              >
                <div className="flex items-start md:items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 group-hover:text-blue-400 transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">{item.category}</span>
                      <span className="text-xs text-gray-500 font-mono">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
                
                <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto border-t border-white/5 md:border-t-0 pt-4 md:pt-0 mt-2 md:mt-0">
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-mono">
                    <span>{item.type}</span>
                    <span>{item.size}</span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors">
                    <Download className="w-4 h-4" />
                    다운로드
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
