import fs from 'fs';

// 1. Greeting (인사말)
const greetingContent = `import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';

export default function Greeting() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[70vh]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">인사말</h1>
          <div className="w-12 h-1 bg-blue-500 mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] bg-zinc-900 rounded-3xl border border-white/10 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="CEO" className="object-cover w-full h-full opacity-80 grayscale hover:grayscale-0 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                <p className="text-xl font-bold">대표이사 김태승</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light mb-6 leading-tight">
                "끊임없는 혁신과 도전으로<br/>
                <strong className="font-bold">최고의 제어 솔루션</strong>을 제공합니다."
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  안녕하십니까, 태승전자 대표이사입니다.
                </p>
                <p>
                  1989년 창립 이래, 저희 태승전자는 마이크로컨트롤러 설계 및 제조 분야에서 오직 한 길만을 걸어왔습니다. 가전제품부터 정밀 의료기기, 친환경 태양광 설비에 이르기까지 고객의 제품에 생명을 불어넣는 핵심 두뇌를 개발해왔습니다.
                </p>
                <p>
                  급변하는 4차 산업혁명 시대에 발맞춰, 저희는 단순한 부품 공급을 넘어 고객의 비즈니스 가치를 극대화하는 혁신적인 파트너가 되고자 합니다. 압도적인 성능과 타협하지 않는 품질로 여러분의 성원에 보답하겠습니다.
                </p>
                <p>
                  앞으로도 태승전자의 힘찬 도약에 많은 관심과 성원 부탁드립니다. 감사합니다.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
`;

// 2. History (연혁)
const historyContent = `import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';

const historyData = [
  { year: '2023', events: ['스마트 팩토리 자동화 라인 구축', 'ISO 13485 의료기기 품질경영시스템 인증 획득'] },
  { year: '2018', events: ['태양광 인버터 제어 모듈 양산 개시', '제2공장 증축'] },
  { year: '2010', events: ['기업부설연구소 설립', '벤처기업 인증'] },
  { year: '2005', events: ['가전용 Main Controller 대량 생산 체제 구축', 'ISO 9001 품질경영시스템 인증'] },
  { year: '1989', events: ['태승전자 창립', '초기 산업용 제어 보드 개발'] },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-[70vh]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">연혁</h1>
          <div className="w-12 h-1 bg-blue-500 mb-16"></div>
          
          <div className="space-y-12">
            {historyData.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-12"
              >
                <div className="md:w-32 flex-shrink-0">
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600">{item.year}</h3>
                </div>
                <div className="flex-1 border-l border-white/10 pl-6 md:pl-8 pb-8">
                  <ul className="space-y-4">
                    {item.events.map((event, i) => (
                      <li key={i} className="text-gray-300 text-lg relative before:content-[''] before:absolute before:-left-[29px] md:before:-left-[37px] before:top-2.5 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
`;

// 3. Organization (조직도)
const organizationContent = `import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';

export default function Organization() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[70vh]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">조직도</h1>
          <div className="w-12 h-1 bg-blue-500 mb-12"></div>
          
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 md:p-16 text-center">
            <div className="inline-block border-2 border-blue-500 rounded-xl px-8 py-4 mb-12 bg-blue-500/10">
              <h2 className="text-2xl font-bold">대표이사</h2>
            </div>
            
            <div className="w-px h-8 bg-white/20 mx-auto mb-8"></div>
            <div className="w-3/4 h-px bg-white/20 mx-auto mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">연구개발본부</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>H/W 설계팀</li>
                  <li>S/W 개발팀</li>
                  <li>선행기술팀</li>
                </ul>
              </div>
              <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400">생산본부</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>생산관리팀</li>
                  <li>제조팀</li>
                  <li>자재팀</li>
                </ul>
              </div>
              <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">품질경영본부</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>품질보증팀</li>
                  <li>신뢰성검증팀</li>
                  <li>CS팀</li>
                </ul>
              </div>
              <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-orange-400">경영지원본부</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>기획/재무팀</li>
                  <li>인사/총무팀</li>
                  <li>영업/마케팅팀</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
`;

// 4. Directions (오시는 길)
const directionsContent = `import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Directions() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[70vh]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">오시는 길</h1>
          <div className="w-12 h-1 bg-blue-500 mb-12"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 h-[500px] bg-zinc-900 rounded-3xl border border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
                <p className="text-gray-500 flex flex-col items-center gap-4">
                  <MapPin className="w-12 h-12" />
                  <span>지도 API 연동 영역 (Kakao/Naver/Google)</span>
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#111111] border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <MapPin className="text-blue-500" /> 본사 및 제1공장
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  경기도 성남시 분당구 판교로 123<br/>
                  태승전자 빌딩 1~4층
                </p>
                <div className="space-y-3 text-sm text-gray-400">
                  <p className="flex items-center gap-3"><Phone className="w-4 h-4" /> 031-123-4567</p>
                  <p className="flex items-center gap-3"><Mail className="w-4 h-4" /> contact@tselec.com</p>
                  <p className="flex items-center gap-3"><Clock className="w-4 h-4" /> 평일 09:00 - 18:00</p>
                </div>
              </div>
              
              <div className="bg-[#111111] border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <MapPin className="text-green-500" /> 제2공장 (생산라인)
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  경기도 화성시 동탄산단 456<br/>
                  태승전자 제2공장
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
`;

// 5. Products (MainController, Display, Others)
const generateProductPage = (title: string, desc: string, items: any[]) => `import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const products = ${JSON.stringify(items, null, 2)};

export default function ${title.replace(/\\s+/g, '')}() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[70vh]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">${title}</h1>
          <div className="w-12 h-1 bg-blue-500 mb-6"></div>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl">${desc}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-[#111111] border border-white/5 rounded-3xl overflow-hidden group cursor-pointer"
              >
                <div className="h-48 bg-zinc-900 relative overflow-hidden">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-blue-400 mb-2">{product.category}</div>
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">{product.desc}</p>
                  <div className="flex items-center text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                    자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
`;

const mainControllerItems = [
  { name: 'TS-MC100', category: '가전용 MCU', desc: '고성능 세탁기 및 건조기를 위한 통합 제어 보드. 정밀 모터 제어 알고리즘 탑재.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80' },
  { name: 'TS-MC200 Pro', category: '산업용 MCU', desc: '극한 환경에서도 안정적으로 동작하는 산업용 장비 메인 컨트롤러. 방진/방수 코팅 적용.', img: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80' },
  { name: 'TS-MD50', category: '의료용 MCU', desc: '생명 유지 장치 및 정밀 진단 기기를 위한 초고신뢰성 듀얼 코어 컨트롤러.', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80' },
];

const displayItems = [
  { name: 'TS-DP70', category: 'TFT-LCD 모듈', desc: '7인치 고해상도 터치 디스플레이 모듈. 직관적인 GUI 구현 가능.', img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80' },
  { name: 'TS-OLED10', category: 'OLED 모듈', desc: '프리미엄 가전을 위한 고명암비 OLED 디스플레이 제어 보드.', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80' },
];

const othersItems = [
  { name: 'TS-BMS100', category: '전력 제어', desc: '태양광 인버터 및 ESS를 위한 고효율 배터리 관리 시스템(BMS).', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80' },
  { name: 'TS-IOT Hub', category: '통신 모듈', desc: 'Wi-Fi, Bluetooth, Zigbee를 지원하는 스마트홈 IoT 허브 모듈.', img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80' },
];

// 6. Generic Template for the rest
const generateGenericPage = (title: string, desc: string) => `import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';

export default function ${title.replace(/\\s+/g, '')}() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[70vh]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">${title}</h1>
          <div className="w-12 h-1 bg-blue-500 mb-12"></div>
          
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">${title} 안내</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              ${desc}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64 bg-zinc-900 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" alt="placeholder" className="w-full h-full object-cover opacity-50" />
              </div>
              <div className="h-64 bg-zinc-900 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80" alt="placeholder" className="w-full h-full object-cover opacity-50" />
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
`;

fs.writeFileSync('src/pages/Greeting.tsx', greetingContent);
fs.writeFileSync('src/pages/HistoryPage.tsx', historyContent);
fs.writeFileSync('src/pages/Organization.tsx', organizationContent);
fs.writeFileSync('src/pages/Directions.tsx', directionsContent);
fs.writeFileSync('src/pages/MainController.tsx', generateProductPage('Main Controller', '가전 및 산업용 장비의 핵심, 고성능 메인 컨트롤러 솔루션입니다.', mainControllerItems));
fs.writeFileSync('src/pages/Display.tsx', generateProductPage('Display', '직관적이고 선명한 사용자 경험을 제공하는 디스플레이 제어 모듈입니다.', displayItems));
fs.writeFileSync('src/pages/Others.tsx', generateProductPage('Others', '다양한 산업 분야에 적용 가능한 맞춤형 제어 솔루션입니다.', othersItems));
fs.writeFileSync('src/pages/Process.tsx', generateGenericPage('제조공정', '엄격한 품질 관리와 첨단 자동화 설비를 갖춘 태승전자의 제조 공정입니다. SMT부터 최종 검사까지 완벽을 기합니다.'));
fs.writeFileSync('src/pages/Facility.tsx', generateGenericPage('설비현황', '최상의 제품 생산을 위한 태승전자의 최신 제조 및 검사 설비 현황입니다. 최신 3D SPI, AOI 장비를 운용하고 있습니다.'));
fs.writeFileSync('src/pages/Certifications.tsx', generateGenericPage('인증서', '국제 표준을 준수하며 품질과 기술력을 인정받은 태승전자의 인증 내역입니다. ISO 9001, ISO 14001, IATF 16949 등을 보유하고 있습니다.'));
fs.writeFileSync('src/pages/ProductsPage.tsx', generateGenericPage('제품소개', '태승전자의 축적된 기술력이 담긴 다양한 제품군을 소개합니다.'));

console.log('Pages generated successfully.');
