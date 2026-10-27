import './Navbar.css';

const Navbar = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="navbar" id="navbar">
      <div className="container navbar__inner">
        <a href="/" className="navbar__logo" aria-label="TechCare+ trang chủ">
          <span className="navbar__logo-icon">🌿</span>
          <span className="navbar__logo-text">Tech<span>Care</span>+</span>
        </a>

        <nav className="navbar__links" aria-label="Điều hướng chính">
          <button onClick={() => handleScrollTo('services')} className="navbar__link">Dịch vụ</button>
          <button onClick={() => handleScrollTo('how-it-works')} className="navbar__link">Quy trình</button>
          <button onClick={() => handleScrollTo('testimonials')} className="navbar__link">Đánh giá</button>
          <button onClick={() => handleScrollTo('pricing')} className="navbar__link">Bảng giá</button>
          <button onClick={() => handleScrollTo('faq')} className="navbar__link">FAQ</button>
        </nav>

        <div className="navbar__actions">
          <a href="tel:0337209580" className="navbar__phone" aria-label="Gọi hotline 0337209580">
            <span className="navbar__phone-icon">📞</span>
            <span>0337-209-580</span>
          </a>
          <button
            className="btn-primary navbar__cta"
            onClick={() => handleScrollTo('contact')}
            id="navbar-cta-btn"
          >
            Đặt lịch ngay
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
