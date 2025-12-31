import { useEffect, useState } from 'react';
import logoFinal from '../assets/logo-final-v3.png';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '' },
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo-container">
          <a href="/" className="logo-link">
            <img src={logoFinal} alt="REYCUT" className="logo-img" />
            <div className="logo-text">
              REYCUT <span>MEDIA</span>
            </div>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              setIsOpen(false);
            }}
            className="mobile-theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <>
                <Moon size={24} /> <span>Dark Mode</span>
              </>
            ) : (
              <>
                <Sun size={24} /> <span>Light Mode</span>
              </>
            )}
          </button>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          padding: 1.5rem 0;
          background: transparent;
        }
        
        .navbar.scrolled {
          background: var(--color-bg-main);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          padding: 1rem 0;
          opacity: 0.95;
        }
        
        .navbar.scrolled .logo-text, .navbar.scrolled .nav-link, .navbar.scrolled .mobile-menu-btn, .navbar.scrolled .theme-toggle {
          color: var(--color-text-main);
        }

        .theme-toggle {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border-radius: 50%;
          transition: background-color 0.3s ease;
        }

        .theme-toggle:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .navbar.scrolled .theme-toggle:hover {
          background-color: var(--color-bg-alt);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .logo-img {
          height: 48px;
          width: auto;
          object-fit: contain;
        }

        .logo-text {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1;
        }
        
        .logo-text span {
          color: var(--color-primary);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          font-weight: 500;
          font-size: 1rem;
          color: #fff;
          position: relative;
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--color-primary);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          z-index: 1001;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: var(--color-bg-main);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: right 0.3s ease;
          z-index: 1000;
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-nav-link {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 1.5rem 0;
          color: var(--color-text-main);
        }

        .mobile-theme-toggle {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 2rem;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-md);
          background: var(--color-bg-alt);
          color: var(--color-text-main);
          font-size: 1.25rem;
          font-weight: 600;
          border: 1px solid var(--color-border);
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
