import { Mail } from "lucide-react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <p className="contact__eyebrow">Contact</p>
        <h2 className="contact__title">Let&apos;s Build Something Great</h2>
        <p className="contact__text">
          For collaborations, freelance projects, or full-time opportunities, reach out directly.
        </p>

        <a className="contact__mail" href="mailto:jogarao.job@gmail.com">
          <Mail size={18} />
          <span>jogarao.job@gmail.com</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
