import './Services.css';

const services = [
  {
    icon: '📱',
    title: 'Hướng dẫn dùng điện thoại',
    desc: 'Cài đặt, gọi video, nhắn tin Zalo/Messenger, chụp ảnh và quản lý danh bạ — dễ hiểu, dễ nhớ.',
    tags: ['Zalo', 'Messenger', 'Camera', 'Danh bạ'],
    color: 'teal',
  },
  {
    icon: '💻',
    title: 'Hỗ trợ máy tính bảng & laptop',
    desc: 'Dạy cách duyệt web, xem YouTube, gửi email và sử dụng các ứng dụng cơ bản một cách an toàn.',
    tags: ['YouTube', 'Email', 'Web', 'Zoom'],
    color: 'orange',
  },
  {
    icon: '📺',
    title: 'Cài đặt smart TV',
    desc: 'Hướng dẫn kết nối WiFi, cài ứng dụng phim, chỉnh kênh truyền hình và điều khiển từ xa.',
    tags: ['Netflix', 'VTVgo', 'WiFi', 'YouTube TV'],
    color: 'teal',
  },
  {
    icon: '🔒',
    title: 'Bảo mật & an toàn số',
    desc: 'Nhận diện lừa đảo online, cài mật khẩu mạnh và bảo vệ thông tin cá nhân trên mạng.',
    tags: ['Chống lừa đảo', 'Mật khẩu', 'Quyền riêng tư'],
    color: 'orange',
  },
  {
    icon: '🏥',
    title: 'Ứng dụng sức khỏe & y tế',
    desc: 'Cài đặt app đặt lịch khám, theo dõi sức khoẻ, nhắc uống thuốc và liên lạc với bác sĩ.',
    tags: ['BookingCare', 'Nhắc thuốc', 'Khám từ xa'],
    color: 'teal',
  },
  {
    icon: '🛒',
    title: 'Mua sắm & ngân hàng online',
    desc: 'Hướng dẫn mua hàng online an toàn, chuyển khoản ngân hàng, thanh toán điện tử cơ bản.',
    tags: ['Shopee', 'MoMo', 'Ngân hàng', 'QR Pay'],
    color: 'orange',
  },
];

const Services = () => {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="services__header">
          <div className="section-label">🛠️ Dịch vụ của chúng tôi</div>
          <h2 className="section-title" id="services-title">
            Mọi nhu cầu công nghệ,<br />chúng tôi đều <span>hỗ trợ</span>
          </h2>
          <p className="section-desc">
            Từ chiếc điện thoại đến smart TV — đội ngũ kỹ thuật viên giàu kinh nghiệm
            của chúng tôi luôn sẵn sàng hướng dẫn tận tình tại chính ngôi nhà bạn.
          </p>
        </div>

        <div className="services__grid">
          {services.map((svc, i) => (
            <article
              className={`service-card service-card--${svc.color}`}
              key={i}
              tabIndex={0}
              aria-label={`Dịch vụ: ${svc.title}`}
            >
              <div className="service-card__icon" aria-hidden="true">{svc.icon}</div>
              <h3 className="service-card__title">{svc.title}</h3>
              <p className="service-card__desc">{svc.desc}</p>
              <div className="service-card__tags" aria-label="Bao gồm">
                {svc.tags.map((tag) => (
                  <span key={tag} className="service-card__tag">{tag}</span>
                ))}
              </div>
              <div className="service-card__arrow" aria-hidden="true">→</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
