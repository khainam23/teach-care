import { useState } from 'react';
import './Contact.css';

type FormState = {
  name: string;
  phone: string;
  address: string;
  service: string;
  message: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const EMPTY_FORM: FormState = {
  name: '',
  phone: '',
  address: '',
  service: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const text = await res.text();
      let data: { error?: string } | null = null;

      if (text) {
        try {
          data = JSON.parse(text) as { error?: string };
        } catch {
          throw new Error(
            'API không trả về dữ liệu JSON hợp lệ. Hãy đảm bảo backend email đang chạy trên localhost:3000 hoặc Vercel.'
          );
        }
      }

      if (!res.ok) {
        throw new Error(data?.error ?? 'Gửi thất bại, vui lòng thử lại.');
      }

      setStatus('success');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Có lỗi xảy ra. Vui lòng thử lại.';
      setErrorMsg(msg);
      setStatus('error');
    }
  };

  const handleReset = () => {
    setForm(EMPTY_FORM);
    setStatus('idle');
    setErrorMsg('');
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
          <div
            className="section-label"
            style={{
              background: 'rgba(255,255,255,0.15)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
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
            <a
              href="tel:0337209580"
              className="contact__channel"
              id="contact-phone-link"
              aria-label="Gọi hotline"
            >
              <div className="contact__channel-icon">📞</div>
              <div>
                <strong>Hotline</strong>
                <span>0337-209-580</span>
                <small>7:00 – 21:00, mỗi ngày</small>
              </div>
            </a>

            <a
              href="https://zalo.me/techcareplus"
              className="contact__channel"
              id="contact-zalo-link"
              aria-label="Chat Zalo"
            >
              <div className="contact__channel-icon">💬</div>
              <div>
                <strong>Chat Zalo</strong>
                <span>TechCare+ Official</span>
                <small>Phản hồi trong 5 phút</small>
              </div>
            </a>

            <a
              href="mailto:khainam23@gmail.com"
              className="contact__channel"
              id="contact-email-link"
              aria-label="Gửi email"
            >
              <div className="contact__channel-icon">📧</div>
              <div>
                <strong>Email</strong>
                <span>khainam23@gmail.com</span>
                <small>Phản hồi trong 2 giờ</small>
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
          {status === 'success' ? (
            /* ── Thành công ── */
            <div className="contact__success" role="alert" aria-live="polite">
              <div className="contact__success-icon">🎉</div>
              <h3>Đặt lịch thành công!</h3>
              <p>
                Cảm ơn <strong>{form.name}</strong>! Chúng tôi sẽ liên hệ qua số{' '}
                <strong>{form.phone}</strong> trong vòng 30 phút để xác nhận lịch hẹn.
              </p>
              <p className="contact__success-sub">
                📧 Thông tin đặt lịch đã được gửi đến hộp thư của chúng tôi.
              </p>
              <button
                className="btn-primary"
                id="contact-new-booking-btn"
                onClick={handleReset}
              >
                Đặt lịch khác
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <form
              className="contact__form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Form đặt lịch"
            >
              <h3 className="contact__form-title">Điền thông tin đặt lịch</h3>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="contact-name" className="contact__label">
                    Họ và tên *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="contact__input"
                    placeholder="Nguyễn Văn A"
                    value={form.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-phone" className="contact__label">
                    Số điện thoại *
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className="contact__input"
                    placeholder="0901 234 567"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="contact-address" className="contact__label">
                  Địa chỉ
                </label>
                <input
                  id="contact-address"
                  name="address"
                  type="text"
                  className="contact__input"
                  placeholder="123 Nguyễn Trãi, Quận 1, TP.HCM"
                  value={form.address}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-service" className="contact__label">
                  Dịch vụ cần hỗ trợ
                </label>
                <select
                  id="contact-service"
                  name="service"
                  className="contact__input contact__select"
                  value={form.service}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                >
                  <option value="">Chọn dịch vụ...</option>
                  <option>Hướng dẫn dùng điện thoại</option>
                  <option>Hỗ trợ máy tính bảng / laptop</option>
                  <option>Cài đặt smart TV</option>
                  <option>Bảo mật &amp; an toàn số</option>
                  <option>Ứng dụng sức khỏe</option>
                  <option>Mua sắm &amp; ngân hàng online</option>
                  <option>Khác</option>
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message" className="contact__label">
                  Ghi chú thêm
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="Mô tả thêm về tình huống của ông bà / ba mẹ..."
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  disabled={status === 'loading'}
                />
              </div>

              {/* Lỗi */}
              {status === 'error' && (
                <div className="contact__error" role="alert" aria-live="polite">
                  ⚠️ {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className={`btn-orange contact__submit ${status === 'loading' ? 'contact__submit--loading' : ''}`}
                id="contact-submit-btn"
                disabled={status === 'loading' || !form.name.trim() || !form.phone.trim()}
                style={{ width: '100%', justifyContent: 'center', fontSize: '1rem' }}
              >
                {status === 'loading' ? (
                  <>
                    <span className="contact__spinner" aria-hidden="true"></span>
                    Đang gửi...
                  </>
                ) : (
                  '📅 Đặt lịch miễn phí ngay'
                )}
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
