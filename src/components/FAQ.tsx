import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'Kỹ thuật viên của TechCare+ được đào tạo như thế nào?',
    a: 'Tất cả kỹ thuật viên đều trải qua chương trình đào tạo kỹ năng mềm chuyên biệt, học cách giao tiếp với người lớn tuổi, kiên nhẫn và giải thích dễ hiểu. Ngoài ra họ còn được kiểm tra lý lịch tư pháp trước khi nhận việc.',
  },
  {
    q: 'Nếu ông bà/ba mẹ chưa biết gì về điện thoại có học được không?',
    a: 'Hoàn toàn được! Chúng tôi bắt đầu từ những kiến thức cơ bản nhất — từ cách cầm điện thoại, bật tắt màn hình cho đến gọi điện. Không ai bị "bỏ lại" trong buổi học của TechCare+.',
  },
  {
    q: 'Một buổi học kéo dài bao lâu và học được những gì?',
    a: 'Mỗi buổi kéo dài 60 phút. Nội dung học sẽ được thống nhất trước theo nhu cầu của gia đình — ví dụ: chỉ học Zalo, hoặc chỉ học cách dùng máy tính bảng để xem phim. Chúng tôi không ôm đồm nhiều thứ một lúc để người học có thể nhớ tốt hơn.',
  },
  {
    q: 'Tôi có thể đặt lịch học cho ba mẹ ở thành phố khác không?',
    a: 'Hiện TechCare+ phục vụ tại TP.HCM, Hà Nội và Đà Nẵng. Chúng tôi đang mở rộng thêm các tỉnh thành. Liên hệ hotline 0337-209-580 để biết thêm thông tin về khu vực của bạn.',
  },
  {
    q: 'Nếu ông bà quên kiến thức sau buổi học thì sao?',
    a: 'Không sao cả! Chúng tôi để lại tài liệu hướng dẫn in sẵn, viết tay theo từng thiết bị cụ thể. Hơn nữa, sau mỗi buổi học bạn có thể gọi điện cho kỹ thuật viên miễn phí trong vòng 7 ngày để giải đáp thắc mắc.',
  },
  {
    q: 'Phương thức thanh toán là gì?',
    a: 'Chúng tôi nhận thanh toán tiền mặt, chuyển khoản ngân hàng, ví MoMo và VNPay. Bạn thanh toán sau buổi học, không cần đặt cọc trước.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="faq__header">
          <div className="section-label">❓ Câu hỏi thường gặp</div>
          <h2 className="section-title" id="faq-title">
            Bạn có thắc mắc?<br />Chúng tôi có <span>câu trả lời</span>
          </h2>
        </div>

        <div className="faq__list" role="list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq__item ${open === i ? 'faq__item--open' : ''}`}
              role="listitem"
            >
              <button
                className="faq__question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                id={`faq-q-${i}`}
                aria-controls={`faq-a-${i}`}
              >
                <span>{faq.q}</span>
                <span className="faq__icon" aria-hidden="true">{open === i ? '−' : '+'}</span>
              </button>
              <div
                className="faq__answer"
                id={`faq-a-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
                hidden={open !== i}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
