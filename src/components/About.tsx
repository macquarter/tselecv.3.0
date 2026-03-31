import { motion } from 'motion/react';
import EditableText from './admin/EditableText';
import EditableVideo from './admin/EditableVideo';

export default function About() {
  return (
    <section id="about" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight text-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <EditableText id="about-title-1" defaultText="기술로 신뢰를 쌓아온" /> <br />
              <span className="text-gray-500">
                <EditableText id="about-title-2" defaultText="35년의 역사." />
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-400 leading-relaxed font-light mb-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <EditableText 
                id="about-description" 
                defaultText="태승전자(주)는 1989년 설립 이래, 마이크로컨트롤러 기반 제어기판 설계 및 제조 분야에서 일관된 품질과 기술력으로 고객의 신뢰를 쌓아왔습니다. 인천광역시 서구 로봇랜드에 위치한 생산시설에서 국내외 다양한 산업에 핵심 전자부품을 공급하고 있습니다." 
                multiline 
              />
            </motion.p>

            <div className="grid grid-cols-2 gap-8">
              {[
                { id: 'stat-1', label: '업력', value: '35+' },
                { id: 'stat-2', label: '제품 모델', value: '100+' },
                { id: 'stat-3', label: '주요 산업분야', value: '3' },
                { id: 'stat-4', label: '품질인증', value: 'ISO' },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <EditableText id={`${stat.id}-value`} defaultText={stat.value} />
                  </div>
                  <div className="text-sm text-gray-500 font-medium tracking-wide">
                    <EditableText id={`${stat.id}-label`} defaultText={stat.label} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="order-1 lg:order-2 relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full h-full relative">
              <EditableVideo 
                id="about-video"
                defaultSrc="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 z-10">
              <div className="text-gray-400 text-sm font-semibold tracking-widest uppercase mb-2">
                <EditableText id="about-video-label" defaultText="Smart Factory" />
              </div>
              <div className="text-2xl font-bold text-white">
                <EditableText id="about-video-title" defaultText="인천 로봇랜드 첨단 생산시설" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
