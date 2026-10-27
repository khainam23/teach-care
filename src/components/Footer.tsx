import './Footer.css';

const Footer = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__container">
        <div className="footer__brand">
          <div className="footer__logo">
            <span>🌿</span>
            <span className="footer__logo-text">Tech<span>Care</span>+</span>
          </div>
          <p className="footer__tagline">
            Đồng hành cùng người lớn tuổi<br />trong hành trình dùng công nghệ.
          </p>
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Facebook">📘</a>
            <a href="#" className="footer__social" aria-label="Zalo">💬</a>
            <a href="#" className="footer__social" aria-label="YouTube">📺</a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Dịch vụ</h4>
          <ul>
            <li><button onClick={() => handleScrollTo('services')}>Điện thoại & Zalo</button></li>
            <li><button onClick={() => handleScrollTo('services')}>Máy tính bảng</button></li>
            <li><button onClick={() => handleScrollTo('services')}>Smart TV</button></li>
            <li><button onClick={() => handleScrollTo('services')}>Bảo mật số</button></li>
            <li><button onClick={() => handleScrollTo('services')}>Y tế & Sức khoẻ</button></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Hỗ trợ</h4>
          <ul>
            <li><button onClick={() => handleScrollTo('how-it-works')}>Quy trình</button></li>
            <li><button onClick={() => handleScrollTo('pricing')}>Bảng giá</button></li>
            <li><button onClick={() => handleScrollTo('faq')}>FAQ</button></li>
            <li><button onClick={() => handleScrollTo('testimonials')}>Đánh giá</button></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Liên hệ</h4>
          <ul>
            <li><a href="tel:0337209580">📞 0337-209-580</a></li>
            <li><a href="mailto:khainam23@gmail.com">📧 khainam23@gmail.com</a></li>
            <li><span>📍 TP.HCM · Hà Nội · Đà Nẵng</span></li>
            <li><span>🕐 7:00 – 21:00, mỗi ngày</span></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} TechCare+. Được làm với ❤️ cho ông bà, ba mẹ Việt Nam.</p>
          <div className="footer__bottom-links">
            <a href="#">Chính sách bảo mật</a>
            <a href="#">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
