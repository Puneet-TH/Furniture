// Utility for sending enquiry email using EmailJS
import emailjs from '@emailjs/browser';

export function sendEnquiryEmail({ name, email, message, title, phone }) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name, // {{name}}
      email, // {{email}}
      message, // {{message}}
      title, // {{title}}
      phone, // {{phone}}
      time: new Date().toLocaleString(), // {{time}}
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}
