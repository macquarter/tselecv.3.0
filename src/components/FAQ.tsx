import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "태승일렉(TSELEC)은 어떤 기업인가요?",
    answer: "1989년 설립된 태승일렉은 마이크로컨트롤러 설계 및 제조를 시작으로, 현재는 반도체, 디스플레이, 가전, 의료기기 등 다양한 산업 분야의 핵심 제어 시스템과 자동화 솔루션을 제공하는 전문 기업입니다."
  },
  {
    question: "주요 취급 제품 및 솔루션은 무엇인가요?",
    answer: "주요 제품으로는 장비의 두뇌 역할을 하는 Main Controller, 사용자 인터페이스를 담당하는 Display Panel, 그리고 각종 센서 및 구동부를 제어하는 특수 제어 보드(Others)가 있습니다. 또한 고객 맞춤형 제어 시스템 설계도 지원합니다."
  },
  {
    question: "맞춤형(Custom) 제어 시스템 개발 의뢰가 가능한가요?",
    answer: "네, 가능합니다. 태승일렉은 수십 년간 축적된 하드웨어 및 소프트웨어 설계 노하우를 바탕으로, 고객사의 특정 요구사항과 장비 특성에 완벽하게 부합하는 최적화된 맞춤형 제어 솔루션을 A부터 Z까지 턴키로 개발 및 생산해 드립니다."
  },
  {
    question: "제품 A/S 및 기술 지원 절차는 어떻게 되나요?",
    answer: "철저한 사후 관리를 원칙으로 합니다. 제품 문제 발생 시 홈페이지의 고객지원 메뉴를 통해 접수하시거나 대표번호(032-682-8811)로 연락 주시면, 전문 엔지니어가 신속하게 원인 분석 및 해결책을 제공해 드립니다."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-zinc-950 relative border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-900/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4"
          >
            자주 묻는 질문
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg font-light"
          >
            태승일렉의 기술력과 서비스에 대해 궁금하신 점을 확인해 보세요.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index} 
                className={`border-b border-white/10 overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-white/5 rounded-2xl border-transparent' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-6 px-4 md:px-8 text-left focus:outline-none group"
                >
                  <span className={`text-lg md:text-xl font-medium tracking-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                    {faq.question}
                  </span>
                  <div className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'border-blue-500 bg-blue-500/10 text-blue-400 rotate-180' : 'border-gray-700 text-gray-500 group-hover:border-gray-500'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <div className="px-4 md:px-8 pb-8 text-gray-400 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
