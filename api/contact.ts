import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Chỉ chấp nhận POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, phone, address, service, message } = req.body as {
    name: string;
    phone: string;
    address?: string;
    service?: string;
    message?: string;
  };

  // Kiểm tra trường bắt buộc
  if (!name?.trim() || !phone?.trim()) {
    return res.status(400).json({ error: 'Thiếu thông tin bắt buộc: tên và số điện thoại.' });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_TO) {
    return res.status(500).json({
      error: 'Chưa cấu hình email: SMTP_USER, SMTP_PASS và CONTACT_TO chưa được thiết lập.',
    });
  }

  // Cấu hình transporter Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const now = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

  const htmlBody = `
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 0; }
    .wrap { max-width: 580px; margin: 32px auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #0f766e, #0d9488); padding: 32px 36px; }
    .header h1 { margin: 0; color: #fff; font-size: 22px; font-weight: 700; }
    .header p  { margin: 6px 0 0; color: rgba(255,255,255,0.75); font-size: 13px; }
    .body { padding: 32px 36px; }
    .field { margin-bottom: 18px; }
    .label { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #a3a3a3; margin-bottom: 4px; }
    .value { font-size: 15px; color: #171717; font-weight: 500; }
    .note-box { background: #f0fdfa; border-left: 4px solid #0d9488; border-radius: 6px; padding: 14px 18px; margin-top: 8px; font-size: 14px; color: #404040; line-height: 1.6; }
    .footer { background: #fafafa; border-top: 1px solid #e5e5e5; padding: 18px 36px; font-size: 12px; color: #a3a3a3; text-align: center; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <h1>🌿 TechCare+ — Đặt lịch mới!</h1>
      <p>Nhận lúc ${now}</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">👤 Họ và tên</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">📞 Số điện thoại</div>
        <div class="value"><a href="tel:${phone}" style="color:#0d9488;">${phone}</a></div>
      </div>
      ${address ? `
      <div class="field">
        <div class="label">📍 Địa chỉ</div>
        <div class="value">${address}</div>
      </div>` : ''}
      ${service ? `
      <div class="field">
        <div class="label">🛠 Dịch vụ yêu cầu</div>
        <div class="value">${service}</div>
      </div>` : ''}
      ${message ? `
      <div class="field">
        <div class="label">💬 Ghi chú thêm</div>
        <div class="note-box">${message.replace(/\n/g, '<br/>')}</div>
      </div>` : ''}
    </div>
    <div class="footer">TechCare+ · 0337-209-580 · khainam23@gmail.com</div>
  </div>
</body>
</html>`;

  try {
    await transporter.sendMail({
      from: `"TechCare+ Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      subject: `[TechCare+] Đặt lịch mới từ ${name} — ${phone}`,
      html: htmlBody,
      replyTo: undefined, // không có email người dùng, chỉ có SĐT
    });

    return res.status(200).json({ success: true, message: 'Email đã được gửi thành công.' });
  } catch (err: unknown) {
    console.error('Lỗi gửi email:', err);
    const message = err instanceof Error ? err.message : 'Lỗi không xác định';
    return res.status(500).json({ error: 'Gửi email thất bại: ' + message });
  }
}
