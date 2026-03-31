import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Board from '../components/Board';

export default function NewsPage() {
  const initialPosts = [
    {
      id: '1',
      category: '공지사항',
      title: '2026년 상반기 신제품 라인업 출시 안내',
      content: '2026년 상반기 신제품 라인업 출시 안내입니다.\n\n새로운 기능과 디자인이 적용된 신제품을 만나보세요.',
      date: '2026.03.15',
      author: '관리자',
      views: 152
    },
    {
      id: '2',
      category: '보도자료',
      title: '태승전자, 스마트팩토리 고도화 프로젝트 성공적 완료',
      content: '태승전자가 스마트팩토리 고도화 프로젝트를 성공적으로 완료했습니다.\n\n이를 통해 생산 효율성을 30% 이상 향상시켰습니다.',
      date: '2026.02.28',
      author: '관리자',
      views: 89
    },
    {
      id: '3',
      category: '공지사항',
      title: 'ISO 14001 환경경영시스템 인증 갱신',
      content: 'ISO 14001 환경경영시스템 인증을 성공적으로 갱신했습니다.\n\n앞으로도 친환경 경영을 위해 노력하겠습니다.',
      date: '2026.01.10',
      author: '관리자',
      views: 210
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white/30 selection:text-white">
      <Navbar />
      <Board 
        boardId="news"
        title="뉴스 & 공지사항"
        description="태승전자의 최신 소식을 전해드립니다."
        categories={['공지사항', '보도자료', '채용안내']}
        initialPosts={initialPosts}
      />
      <Footer />
    </div>
  );
}
