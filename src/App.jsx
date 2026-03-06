import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, ShoppingBag, BookOpen, Menu, X, Sprout } from 'lucide-react';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductsPage from './pages/ProductsPage';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import './index.css';

const BottomNav = () => {
  const location = useLocation();

  return (
    <div className="bottom-nav">
      <Link to="/" className={`bottom-nav-item ${location.pathname === '/' ? 'active' : ''}`}>
        <HomeIcon size={24} />
        <span>Village</span>
      </Link>
      <Link to="/products" className={`bottom-nav-item ${location.pathname === '/products' ? 'active' : ''}`}>
        <ShoppingBag size={24} />
        <span>Products</span>
      </Link>
      <Link to="/about" className={`bottom-nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
        <BookOpen size={24} />
        <span>Stories</span>
      </Link>
    </div>
  );
};

const TopNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar" style={{ position: 'sticky', top: 0, zIndex: 1000, backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(243, 229, 171, 0.2)', padding: '1rem 2rem' }}>
      <div className="nav-left hide-mobile" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ color: 'var(--color-sand)', fontSize: '1.1rem', fontWeight: 'bold', letterSpacing: '1px' }}>Vidya-Pradeep</span>
        <span style={{ color: 'var(--color-sand)', fontSize: '0.8rem', opacity: 0.8 }}>millets are not boring boss😎😜</span>
      </div>

      {/* Spacer for center-alignment logic if needed, or simply remove central column */}
      <div className="nav-center"></div>

      {/* Desktop Links (right side) */}
      <div className="nav-links hide-mobile">
        <Link to="/">Home</Link>
        <Link to="/about">Stories</Link>
        <Link to="/products">Products</Link>
        <a href="/#contact">Contact</a>
      </div>

      {/* Hamburger Toggle (Mobile Only) */}
      <div className="mobile-menu-toggle mobile-only" onClick={toggleMenu} style={{ cursor: 'pointer', color: 'var(--color-bark)' }}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </div>

      {/* Mobile Sidebar/Overlay */}
      <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`} style={{
        position: 'fixed',
        top: '80px',
        left: 0,
        width: '100%',
        height: 'calc(100vh - 80px)',
        backgroundColor: 'var(--color-sand)',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '2rem',
        gap: '1.5rem',
        transition: 'transform 0.3s ease',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        boxShadow: '-5px 0 15px rgba(0,0,0,0.1)'
      }}>
        <Link to="/" onClick={toggleMenu} style={{ color: 'var(--color-bark)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600' }}>Home</Link>
        <Link to="/about" onClick={toggleMenu} style={{ color: 'var(--color-bark)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600' }}>Our Stories</Link>
        <Link to="/products" onClick={toggleMenu} style={{ color: 'var(--color-bark)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600' }}>Products</Link>
        <a href="/#contact" onClick={toggleMenu} style={{ color: 'var(--color-bark)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600' }}>Contact Us</a>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Global/Persistent UI */}
        <div className="desktop-only-nav">
          <TopNav />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
