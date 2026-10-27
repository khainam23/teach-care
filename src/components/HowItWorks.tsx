import './HowItWorks.css';

const steps = [
  {
    num: '01',
    icon: '📞',
    title: 'Liên hệ & tư vấn',
    desc: 'Gọi hotline hoặc điền form đặt lịch. Chúng tôi sẽ tư vấn miễn phí và sắp xếp lịch phù hợp với gia đình bạn.',
  },
  {
    num: '02',
    icon: '🚗',
    title: 'Kỹ thuật viên đến nhà',
    desc: 'Kỹ thuật viên được chọn lọc kỹ, thân thiện và kiên nhẫn đến đúng giờ, mang theo đầy đủ thiết bị hỗ trợ.',
  },
  {
    num: '03',
    icon: '📚',
    title: 'Hướng dẫn tận tình',
    desc: 'Giải thích từng bước một theo tốc độ của người học. Thực hành trực tiếp ngay trên thiết bị của gia đình.',
  },
  {
    num: '04',
    icon: '✅',
    title: 'Hỗ trợ sau buổi học',
    desc: 'Gọi điện miễn phí trong 7 ngày nếu có thắc mắc. Tài liệu hướng dẫn in sẵn để ông bà tiện tra cứu.',
  },
];

const HowItWorks = () => {
  return (
    <section className="how" id="how-it-works" aria-labelledby="how-title">
      <div className="how__bg" aria-hidden="true"></div>
      <div className="container">
        <div className="how__header">
          <div className="section-label">📋 Quy trình làm việc</div>
          <h2 className="section-title" id="how-title">
            Chỉ <span>4 bước đơn giản</span><br />để bắt đầu
          </h2>
        </div>

        <div className="how__steps">
          {steps.map((step, i) => (
            <div className="how__step" key={i}>
              <div className="how__step-left">
                <div className="how__step-num" aria-hidden="true">{step.num}</div>
                {i < steps.length - 1 && (
                  <div className="how__step-line" aria-hidden="true"></div>
                )}
              </div>
              <div className="how__step-content">
                <div className="how__step-icon" aria-hidden="true">{step.icon}</div>
                <h3 className="how__step-title">{step.title}</h3>
                <p className="how__step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
