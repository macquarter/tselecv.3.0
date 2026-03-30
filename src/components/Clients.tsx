import { motion } from 'motion/react';

const clients = [
  { name: 'SAMSUNG', logo: 'SAMSUNG' },
  { name: 'LG Electronics', logo: 'LG Electronics' },
  { name: 'SK Hynix', logo: 'SK hynix' },
  { name: 'Hyundai', logo: 'HYUNDAI' },
  { name: 'Hanwha', logo: 'Hanwha' },
  { name: 'LS Electric', logo: 'LS ELECTRIC' },
  { name: 'Posco', logo: 'POSCO' },
];

export default function Clients() {
  return (
    <section className="py-20 bg-black relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h3 className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase">Trusted by Innovative Companies</h3>
        </div>
        
        <div className="flex overflow-hidden relative w-full">
          {/* Gradient Masks for smooth fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          <motion.div 
            className="flex space-x-16 md:space-x-24 items-center whitespace-nowrap"
            animate={{ x: [0, -1500] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {/* Triplicate the array for seamless infinite scrolling */}
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div key={i} className="text-2xl md:text-3xl font-bold text-gray-700 hover:text-white transition-colors duration-500 tracking-tighter">
                {client.logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
