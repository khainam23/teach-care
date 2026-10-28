import './Hero.css';

const Hero = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero" aria-label="Giới thiệu dịch vụ">
      {/* Background blobs */}
      <div className="hero__blob hero__blob--teal" aria-hidden="true"></div>
      <div className="hero__blob hero__blob--orange" aria-hidden="true"></div>

      <div className="container hero__container">
        {/* Left Content */}
        <div className="hero__content">
          <div className="hero__badge animate-fade-up">
            <span>✨</span>
            <span>Dịch vụ tận tâm – Uy tín – Giá hợp lý</span>
          </div>

          <h1 className="hero__title animate-fade-up animate-fade-up-delay-1">
            Hỗ trợ <span>người thân</span> dùng công nghệ
            <br />
            <em>tại nhà bạn</em>
          </h1>

          <p className="hero__desc animate-fade-up animate-fade-up-delay-2">
            Chúng tôi đến tận nơi, kiên nhẫn hướng dẫn ông bà, ba mẹ cách dùng
            điện thoại, máy tính bảng và các ứng dụng thiết yếu — để họ luôn
            kết nối và tự tin trong thế giới số.
          </p>

          <div className="hero__actions animate-fade-up animate-fade-up-delay-3">
            <button
              className="btn-primary"
              onClick={() => handleScrollTo('contact')}
              id="hero-book-btn"
            >
              <span>📅</span> Đặt lịch miễn phí
            </button>
            <button
              className="btn-secondary"
              onClick={() => handleScrollTo('how-it-works')}
              id="hero-learn-btn"
            >
              Tìm hiểu thêm →
            </button>
          </div>

          {/* Trust indicators */}
          <div className="hero__trust animate-fade-up animate-fade-up-delay-4">
            <div className="hero__trust-item">
              <strong>500+</strong>
              <span>Gia đình tin dùng</span>
            </div>
            <div className="hero__trust-divider" aria-hidden="true"></div>
            <div className="hero__trust-item">
              <strong>4.9★</strong>
              <span>Đánh giá trung bình</span>
            </div>
            <div className="hero__trust-divider" aria-hidden="true"></div>
            <div className="hero__trust-item">
              <strong>30 phút</strong>
              <span>Có mặt nhanh chóng</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero__image-wrap animate-fade-up animate-fade-up-delay-2">
          <div className="hero__image-card">
            <picture>
              <source
                type="image/webp"
                srcSet="/hero-optimized.webp"
                sizes="(max-width: 900px) 85vw, 42vw"
              />
              <img
                src="/hero.png"
                alt="Kỹ thuật viên TechCare+ hướng dẫn người lớn tuổi sử dụng điện thoại, máy tính bảng và Smart TV tại nhà"
                className="hero__image"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={900}
                height={900}
              />
            </picture>

            {/* Floating badges */}
            <div className="hero__float hero__float--top" aria-hidden="true">
              <span>🏠</span>
              <div>
                <p>Phục vụ tại nhà</p>
                <small>Đặt lịch là có ngay</small>
              </div>
            </div>

            <div className="hero__float hero__float--bottom" aria-hidden="true">
              <div className="hero__stars">⭐⭐⭐⭐⭐</div>
              <p>"Rất tận tình và dễ hiểu!"</p>
              <small>— Bà Nguyễn, 72 tuổi</small>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-dot"></div>
      </div>
    </section>
  );
};

export default Hero;
