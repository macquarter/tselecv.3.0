import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Main Text animations
  const text1Scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.05]);
  const text1Opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.8], [0, -50]);

  // Image animations
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.6, 0.2, 0]);

  // Scroll Indicator
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section ref={containerRef} className="h-[150vh] relative bg-black">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        
        {/* Background Elements - Sensuous Tech Vibe */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
        </div>

        <motion.div 
          className="absolute inset-0 z-0 origin-center mix-blend-luminosity"
          style={{ scale: imageScale, opacity: imageOpacity }}
        >
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2500&q=80" 
            alt="Circuit Board" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black"></div>
        </motion.div>

        {/* Main Hero Text */}
        <motion.div 
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 w-full"
          style={{ scale: text1Scale, opacity: text1Opacity, y: text1Y }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs font-semibold tracking-[0.2em] text-gray-300 uppercase shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            Since 1989
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1] text-white text-center"
          >
            정밀한 제어, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-[0_0_25px_rgba(129,140,248,0.4)]">
              무한한 가능성
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl text-center leading-relaxed"
          >
            마이크로컨트롤러 설계부터 제조까지, <br className="hidden md:block" />
            태승일렉이 혁신적인 자동화 솔루션의 기준을 제시합니다.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30"
          style={{ opacity: scrollOpacity }}
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">Scroll to explore</span>
          <motion.div 
            animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"
          ></motion.div>
        </motion.div>

      </div>
    </section>
  );
}
