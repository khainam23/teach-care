import './Testimonials.css';

const reviews = [
  {
    name: 'Bà Nguyễn Thị Hoa',
    age: '72 tuổi — Quận 3, TP.HCM',
    avatar: '👵',
    stars: 5,
    text: 'Cháu kỹ thuật viên rất dễ thương và kiên nhẫn lắm. Nói đi nói lại nhiều lần bà mới nhớ mà cháu không hề tỏ ra khó chịu. Bây giờ bà đã biết gọi video cho con cháu ở nước ngoài rồi!',
    service: 'Hướng dẫn Zalo & gọi video',
  },
  {
    name: 'Ông Trần Văn Minh',
    age: '68 tuổi — TP.HCM',
    avatar: '👴',
    stars: 5,
    text: 'Trước đây tôi sợ nhất là dùng internet banking, sợ bị mất tiền. Nhờ TechCare+ giải thích kỹ từng bước về bảo mật, giờ tôi yên tâm dùng rồi. Dịch vụ rất chuyên nghiệp.',
    service: 'Ngân hàng online & bảo mật',
  },
  {
    name: 'Con trai của Bà Lan',
    age: 'Con cháu — Thay mặt gia đình',
    avatar: '👨',
    stars: 5,
    text: 'Tôi đặt dịch vụ cho mẹ vì bà hay nhắn tin nhầm, bấm lung tung. Sau buổi học, mẹ tiến bộ hẳn! Kỹ thuật viên còn để lại tờ hướng dẫn viết tay rất dễ thương.',
    service: 'Hướng dẫn smartphone cơ bản',
  },
  {
    name: 'Bà Phạm Thị Thu',
    age: '75 tuổi — TP.HCM',
    avatar: '👵',
    stars: 5,
    text: 'Tôi dùng app đặt lịch khám bệnh online giờ rồi, không phải nhờ con cháu nữa. Bây giờ tôi tự đặt lịch được, tự xem kết quả xét nghiệm. Cảm ơn TechCare+ nhiều lắm!',
    service: 'Ứng dụng y tế & sức khỏe',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="testimonials__header">
          <div className="section-label">💬 Khách hàng nói gì</div>
          <h2 className="section-title" id="testimonials-title">
            Hàng trăm gia đình đã<br /><span>tin tưởng</span> chúng tôi
          </h2>
        </div>

        <div className="testimonials__grid">
          {reviews.map((r, i) => (
            <figure className="review-card" key={i} tabIndex={0}>
              <div className="review-card__stars" aria-label={`${r.stars} sao`}>
                {'⭐'.repeat(r.stars)}
              </div>
              <blockquote className="review-card__text">"{r.text}"</blockquote>
              <figcaption className="review-card__author">
                <div className="review-card__avatar" aria-hidden="true">{r.avatar}</div>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.age}</span>
                  <span className="review-card__service">🛠 {r.service}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Summary bar */}
        <div className="testimonials__summary" aria-label="Tổng quan đánh giá">
          <div className="testimonials__summary-item">
            <span className="testimonials__summary-num">4.9/5</span>
            <span>Điểm đánh giá trung bình</span>
          </div>
          <div className="testimonials__summary-divider" aria-hidden="true"></div>
          <div className="testimonials__summary-item">
            <span className="testimonials__summary-num">500+</span>
            <span>Buổi hỗ trợ hoàn thành</span>
          </div>
          <div className="testimonials__summary-divider" aria-hidden="true"></div>
          <div className="testimonials__summary-item">
            <span className="testimonials__summary-num">98%</span>
            <span>Khách hàng hài lòng</span>
          </div>
          <div className="testimonials__summary-divider" aria-hidden="true"></div>
          <div className="testimonials__summary-item">
            <span className="testimonials__summary-num">7 ngày</span>
            <span>Hỗ trợ sau buổi học</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
