import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import EditableText from './admin/EditableText';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    {
      id: 'nav-1',
      name: '회사소개',
      href: '/greeting',
      dropdown: [
        { id: 'nav-1-1', name: '인사말', href: '/greeting' },
        { id: 'nav-1-2', name: '회사연혁', href: '/history' },
        { id: 'nav-1-3', name: '회사전경', href: '/facility' },
        { id: 'nav-1-4', name: '인증현황', href: '/certifications' },
        { id: 'nav-1-5', name: '조직도', href: '/organization' },
        { id: 'nav-1-6', name: '오시는 길', href: '/directions' },
      ]
    },
    {
      id: 'nav-2',
      name: '제품소개',
      href: '/products',
      dropdown: [
        { id: 'nav-2-1', name: '제품영역', href: '/products' },
        { id: 'nav-2-2', name: '메인 컨트롤러', href: '/main-controller' },
        { id: 'nav-2-3', name: '디스플레이', href: '/display' },
        { id: 'nav-2-4', name: '기타', href: '/others' },
        { id: 'nav-2-5', name: '공정도', href: '/process' },
      ]
    },
    {
      id: 'nav-3',
      name: '고객지원',
      href: '/#faq',
      dropdown: [
        { id: 'nav-3-1', name: '자주 묻는 질문', href: '/#faq' },
        { id: 'nav-3-2', name: '공지사항', href: '/news' },
        { id: 'nav-3-3', name: '자료실', href: '/downloads' },
      ]
    },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300 tracking-wide">
            {navLinks.map((link) => (
              <div 
                key={link.id} 
                className="relative group h-16 flex items-center"
                onMouseEnter={() => setActiveDropdown(link.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.href.startsWith('/') ? (
                  <Link 
                    to={link.href} 
                    className="hover:text-white transition-colors flex items-center gap-1"
                    onClick={(e) => {
                      if (link.href.includes('#')) {
                        const hash = link.href.split('#')[1];
                        if (location.pathname === '/admin/dashboard') {
                          e.preventDefault();
                          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
                        } else if (location.pathname === '/') {
                          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    <EditableText id={`navbar-${link.id}`} defaultText={link.name} />
                    {link.dropdown && <ChevronDown size={14} className="opacity-50" />}
                  </Link>
                ) : (
                  <a href={link.href} className="hover:text-white transition-colors flex items-center gap-1">
                    <EditableText id={`navbar-${link.id}`} defaultText={link.name} />
                  </a>
                )}

                {/* Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-16 left-1/2 -translate-x-1/2 min-w-[180px] bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl"
                      >
                        {link.dropdown.map((dropLink) => (
                          <Link
                            key={dropLink.id}
                            to={dropLink.href}
                            onClick={(e) => {
                              if (dropLink.href.includes('#')) {
                                const hash = dropLink.href.split('#')[1];
                                if (location.pathname === '/admin/dashboard') {
                                  e.preventDefault();
                                  document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
                                } else if (location.pathname === '/') {
                                  document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
                                }
                              }
                            }}
                            className={`block px-4 py-2.5 text-sm rounded-lg transition-all ${
                              location.pathname === dropLink.href 
                                ? 'bg-white/10 text-white font-semibold' 
                                : 'text-gray-400 hover:bg-white/5 hover:text-white hover:pl-5'
                            }`}
                          >
                            <EditableText id={`navbar-${dropLink.id}`} defaultText={dropLink.name} />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex">
            <Link 
              to="/#contact" 
              className="px-5 py-2.5 bg-white hover:bg-gray-200 text-black text-sm font-medium rounded-lg transition-all"
              onClick={(e) => {
                if (location.pathname === '/admin/dashboard') {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                } else if (location.pathname === '/') {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <EditableText id="navbar-contact-btn" defaultText="문의하기" />
            </Link>
          </div>

          <button className="md:hidden text-gray-300" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <button
              className="absolute top-5 right-6 text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8 text-2xl font-semibold tracking-tight w-full px-8">
              {navLinks.map((link) => (
                <div key={link.id} className="flex flex-col items-center w-full">
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      onClick={(e) => {
                        setMobileMenuOpen(false);
                        if (link.href.includes('#')) {
                          const hash = link.href.split('#')[1];
                          if (location.pathname === '/admin/dashboard') {
                            e.preventDefault();
                            setTimeout(() => {
                              document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          } else if (location.pathname === '/') {
                            setTimeout(() => {
                              document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          }
                        }
                      }}
                      className="text-white hover:text-gray-300 transition-colors mb-4"
                    >
                      <EditableText id={`navbar-mobile-${link.id}`} defaultText={link.name} />
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white hover:text-gray-300 transition-colors mb-4"
                    >
                      <EditableText id={`navbar-mobile-${link.id}`} defaultText={link.name} />
                    </a>
                  )}
                  
                  {link.dropdown && (
                    <div className="flex flex-col items-center gap-4 w-full bg-white/5 rounded-2xl py-6">
                      {link.dropdown.map((dropLink) => (
                        <Link
                          key={dropLink.id}
                          to={dropLink.href}
                          onClick={(e) => {
                            setMobileMenuOpen(false);
                            if (dropLink.href.includes('#')) {
                              const hash = dropLink.href.split('#')[1];
                              if (location.pathname === '/admin/dashboard') {
                                e.preventDefault();
                                setTimeout(() => {
                                  document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                              } else if (location.pathname === '/') {
                                setTimeout(() => {
                                  document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                              }
                            }
                          }}
                          className={`text-lg transition-colors ${
                            location.pathname === dropLink.href ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          <EditableText id={`navbar-mobile-${dropLink.id}`} defaultText={dropLink.name} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
