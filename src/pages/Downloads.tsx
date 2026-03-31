import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Board from '../components/Board';

export default function Downloads() {
  const initialPosts = [
    {
      id: '1',
      category: '제품 카탈로그',
      title: '2026 태승일렉 종합 카탈로그 (KOR)',
      content: '2026년 태승일렉 종합 카탈로그 한국어 버전입니다.',
      date: '2026.03.15',
      author: '관리자',
      views: 342,
      files: [{ name: 'TSELEC_Catalog_2026_KOR.pdf', size: '15.2 MB', type: 'PDF' }]
    },
    {
      id: '2',
      category: '제품 카탈로그',
      title: '2026 TSELEC General Catalog (ENG)',
      content: '2026 TSELEC General Catalog English version.',
      date: '2026.03.15',
      author: '관리자',
      views: 128,
      files: [{ name: 'TSELEC_Catalog_2026_ENG.pdf', size: '14.8 MB', type: 'PDF' }]
    },
    {
      id: '3',
      category: '매뉴얼',
      title: 'TS-MC2000 메인 컨트롤러 사용자 매뉴얼',
      content: 'TS-MC2000 메인 컨트롤러의 설치 및 사용 매뉴얼입니다.',
      date: '2026.02.10',
      author: '관리자',
      views: 56,
      files: [{ name: 'TS_MC2000_Manual_v1.2.pdf', size: '5.4 MB', type: 'PDF' }]
    },
    {
      id: '4',
      category: '인증서',
      title: 'ISO 9001 품질경영시스템 인증서',
      content: 'ISO 9001 품질경영시스템 인증서 사본입니다.',
      date: '2026.01.05',
      author: '관리자',
      views: 89,
      files: [{ name: 'ISO_9001_Certificate.pdf', size: '1.2 MB', type: 'PDF' }]
    },
    {
      id: '5',
      category: '소프트웨어',
      title: 'TS-Display 펌웨어 업데이트 툴 v2.1',
      content: 'TS-Display 시리즈의 펌웨어를 업데이트하기 위한 툴입니다.\n\n[업데이트 내용]\n- 통신 안정성 개선\n- 신규 프로토콜 지원 추가',
      date: '2025.11.20',
      author: '관리자',
      views: 412,
      files: [{ name: 'TS_Display_Firmware_Tool_v2.1.zip', size: '45.8 MB', type: 'ZIP' }]
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white/30 selection:text-white">
      <Navbar />
      <Board 
        boardId="downloads"
        title="자료실"
        description="태승일렉의 제품 카탈로그, 매뉴얼, 인증서 등 다양한 자료를 다운로드하실 수 있습니다."
        categories={['제품 카탈로그', '매뉴얼', '인증서', '소프트웨어']}
        initialPosts={initialPosts}
        showFiles={true}
      />
      <Footer />
    </div>
  );
}

