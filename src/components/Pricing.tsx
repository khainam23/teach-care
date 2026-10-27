import { useState } from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Cơ bản',
    emoji: '🌱',
    price: '199.000',
    duration: '/ buổi (60 phút)',
    desc: 'Phù hợp cho lần đầu tiên hoặc hỗ trợ một vấn đề cụ thể.',
    features: [
      'Kỹ thuật viên đến tận nhà',
      'Hỗ trợ 1 thiết bị / 1 vấn đề',
      'Tài liệu hướng dẫn in sẵn',
      'Tư vấn miễn phí qua điện thoại',
      'Hỗ trợ sau buổi học (3 ngày)',
    ],
    cta: 'Đặt buổi học',
    highlight: false,
  },
  {
    name: 'Gia đình',
    emoji: '🏡',
    price: '499.000',
    duration: '/ gói (3 buổi)',
    desc: 'Lựa chọn phổ biến nhất — tiết kiệm hơn và học được nhiều hơn.',
    features: [
      'Tất cả tính năng gói Cơ bản',
      '3 buổi học linh hoạt (60 phút/buổi)',
      'Hỗ trợ đến 2 thiết bị',
      'Ưu tiên đặt lịch sớm',
      'Hỗ trợ sau buổi học (7 ngày)',
      'Gọi điện tư vấn không giới hạn',
    ],
    cta: 'Chọn gói Gia đình',
    highlight: true,
  },
  {
    name: 'Cao cấp',
    emoji: '⭐',
    price: '899.000',
    duration: '/ gói (6 buổi)',
    desc: 'Gói trọn gói dành cho ông bà cần học từ đầu đến thành thục.',
    features: [
      'Tất cả tính năng gói Gia đình',
      '6 buổi học linh hoạt (60 phút/buổi)',
      'Hỗ trợ không giới hạn thiết bị',
      'Kỹ thuật viên cố định xuyên suốt',
      'Hỗ trợ sau buổi học (30 ngày)',
      'Tài liệu học tập chuyên biệt',
    ],
    cta: 'Chọn gói Cao cấp',
    highlight: false,
  },
];

const Pricing = () => {
  const [selected, setSelected] = useState(1);

  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="pricing__header">
          <div className="section-label">💰 Bảng giá</div>
          <h2 className="section-title" id="pricing-title">
            Giá cả <span>minh bạch</span>,<br />không phí ẩn
          </h2>
          <p className="section-desc pricing__desc">
            Chọn gói phù hợp với nhu cầu của gia đình. Thanh toán sau khi dùng xong,
            không yêu cầu đặt cọc.
          </p>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <article
              key={i}
              className={`pricing-card ${plan.highlight ? 'pricing-card--featured' : ''} ${selected === i ? 'pricing-card--selected' : ''}`}
              onClick={() => setSelected(i)}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelected(i)}
              aria-selected={selected === i}
              role="option"
              aria-label={`Gói ${plan.name}`}
            >
              {plan.highlight && (
                <div className="pricing-card__badge" aria-label="Phổ biến nhất">🔥 Phổ biến nhất</div>
              )}

              <div className="pricing-card__header">
                <span className="pricing-card__emoji" aria-hidden="true">{plan.emoji}</span>
                <h3 className="pricing-card__name">{plan.name}</h3>
                <p className="pricing-card__desc">{plan.desc}</p>
              </div>

              <div className="pricing-card__price">
                <span className="pricing-card__amount">{plan.price}đ</span>
                <span className="pricing-card__dur">{plan.duration}</span>
              </div>

              <ul className="pricing-card__features" aria-label="Tính năng bao gồm">
                {plan.features.map((f, j) => (
                  <li key={j} className="pricing-card__feature">
                    <span className="pricing-card__check" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={plan.highlight ? 'btn-orange' : 'btn-secondary'}
                id={`pricing-cta-${i}`}
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={(e) => {
                  e.stopPropagation();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {plan.cta}
              </button>
            </article>
          ))}
        </div>

        <p className="pricing__note" role="note">
          * Giá trên chưa bao gồm VAT. Miễn phí tư vấn qua điện thoại 0337-209-580 trước khi đặt lịch.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
