// api/send.js
export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS — permissive in dev, tighten in production if needed
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { name, email, location, budget, subject, message } = req.body;

  // Server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [process.env.CONTACT_EMAIL],
        reply_to: email,
        subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${location ? `<p><strong>Location:</strong> ${location}</p>` : ''}
          ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br />')}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend error:', errorData);
      return res.status(500).json({ error: 'Failed to send email.' });
    }

    const data = await response.json();
    return res.status(200).json({ message: 'Email sent successfully.', id: data.id });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
}