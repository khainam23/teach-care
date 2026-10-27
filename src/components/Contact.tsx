import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.phone) {
      setSubmitted(true);
    }
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__bg" aria-hidden="true">
        <div className="contact__blob contact__blob--1"></div>
        <div className="contact__blob contact__blob--2"></div>
      </div>

      <div className="container contact__container">
        {/* Info Side */}
        <div className="contact__info">
          <div className="section-label" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
            📅 Đặt lịch hỗ trợ
          </div>
          <h2 className="contact__title" id="contact-title">
            Sẵn sàng bắt đầu?<br />Liên hệ ngay hôm nay
          </h2>
          <p className="contact__desc">
            Đặt lịch miễn phí, không cần thanh toán trước.
            Kỹ thuật viên sẽ liên hệ xác nhận trong vòng 30 phút.
          </p>

          <div className="contact__channels">
            <a href="tel:0337209580" className="contact__channel" id="contact-phone-link" aria-label="Gọi hotline">
              <div className="contact__channel-icon">📞</div>
              <div>
                <strong>Hotline</strong>
                <span>0337-209-580</span>
                <small>7:00 – 21:00, mỗi ngày</small>
              </div>
            </a>
            <a href="https://zalo.me/techcareplus" className="contact__channel" id="contact-zalo-link" aria-label="Chat Zalo">
              <div className="contact__channel-icon">💬</div>
              <div>
                <strong>Chat Zalo</strong>
                <span>TechCare+ Official</span>
                <small>Phản hồi trong 5 phút</small>
              </div>
            </a>
            <div className="contact__channel">
              <div className="contact__channel-icon">📍</div>
              <div>
                <strong>Phục vụ tại</strong>
                <span>TP.HCM · Hà Nội · Đà Nẵng</span>
                <small>Và đang mở rộng thêm</small>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="contact__form-wrap">
          {submitted ? (
            <div className="contact__success" role="alert" aria-live="polite">
              <div className="contact__success-icon">🎉</div>
              <h3>Đặt lịch thành công!</h3>
              <p>
                Cảm ơn <strong>{form.name}</strong>! Chúng tôi sẽ liên hệ qua số
                <strong> {form.phone}</strong> trong vòng 30 phút để xác nhận lịch hẹn.
              </p>
              <button
                className="btn-primary"
                id="contact-new-booking-btn"
                onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', address: '', service: '', message: '' }); }}
              >
                Đặt lịch khác
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate aria-label="Form đặt lịch">
              <h3 className="contact__form-title">Điền thông tin đặt lịch</h3>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name" className="contact__label">Họ và tên *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="contact__input"
                    placeholder="Nguyễn Văn A"
                    value={form.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="phone" className="contact__label">Số điện thoại *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="contact__input"
                    placeholder="0901 234 567"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="address" className="contact__label">Địa chỉ</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="contact__input"
                  placeholder="123 Nguyễn Trãi, Quận 1, TP.HCM"
                  value={form.address}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="service" className="contact__label">Dịch vụ cần hỗ trợ</label>
                <select
                  id="service"
                  name="service"
                  className="contact__input contact__select"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Chọn dịch vụ...</option>
                  <option>Hướng dẫn dùng điện thoại</option>
                  <option>Hỗ trợ máy tính bảng / laptop</option>
                  <option>Cài đặt smart TV</option>
                  <option>Bảo mật & an toàn số</option>
                  <option>Ứng dụng sức khỏe</option>
                  <option>Mua sắm & ngân hàng online</option>
                  <option>Khác</option>
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="message" className="contact__label">Ghi chú thêm</label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="Mô tả thêm về tình huống của ông bà / ba mẹ..."
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="btn-orange"
                id="contact-submit-btn"
                style={{ width: '100%', justifyContent: 'center', fontSize: '1rem' }}
              >
                📅 Đặt lịch miễn phí ngay
              </button>

              <p className="contact__form-note">
                🔒 Thông tin của bạn được bảo mật tuyệt đối. Không spam, không quảng cáo.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
