import { useState } from "react";
import {
  ArrowDownRight, ArrowRight, Check, Menu, X, Globe2, Stethoscope,
  Smartphone, MapPin, Mail, MessageCircle, Code2,
  Layers3, Sparkles, Clock3, MonitorSmartphone
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Business websites",
    description: "A clear, professional home for your business online — designed to look good on phones and make it easy for customers to contact you.",
    tags: ["Responsive design", "WhatsApp contact", "Google Maps"]
  },
  {
    number: "02",
    icon: Stethoscope,
    title: "Clinic queue management",
    description: "A practical digital token and queue display concept to help clinics organise patient flow and keep people informed.",
    tags: ["Digital tokens", "Doctor-wise queue", "Live display"]
  }
];

const steps = [
  ["01", "We listen", "First, we understand your business, your customers, and the problem you want to solve."],
  ["02", "We plan", "We agree on the scope, timeline, deliverables, and price before work begins."],
  ["03", "We build", "You see progress along the way and can share feedback before launch."],
  ["04", "We support", "We test the final result and provide the support agreed for your project."]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", business: "", service: "Business website", message: "" });
  const [notice, setNotice] = useState("");

  const closeMenu = () => setMenuOpen(false);
  const updateForm = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  function submitEnquiry(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.business || "Not provided"}\nInterested in: ${form.service}\n\nProject details:\n${form.message}`
    );
    // Replace this demo address with your real business email before publishing.
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
    setNotice("Your email app should open with the enquiry prepared. Add your real business email before publishing.");
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="OneVision Digital home">
            <span className="brand-mark">O<span>V</span></span>
            <span className="brand-copy">onevision<span>digital studio</span></span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? "main-nav open" : "main-nav"}>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#work" onClick={closeMenu}>Our work</a>
            <a href="#approach" onClick={closeMenu}>Our approach</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Discuss a project <ArrowRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot"></span> INDEPENDENT DIGITAL STUDIO · TELANGANA</div>
              <h1>Good ideas deserve <span>useful digital solutions.</span></h1>
              <p className="hero-lede">We build professional websites and practical software that help local businesses show up clearly and work a little smarter.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#services">Explore our services <ArrowRight size={17} /></a>
                <a className="text-link" href="#work">See what we're building <ArrowDownRight size={17} /></a>
              </div>
              <div className="hero-proof">
                <div className="proof-icon"><Check size={16} /></div>
                <p>Thoughtful design. Clear communication. No unnecessary complexity.</p>
              </div>
            </div>

            <div className="hero-visual" aria-label="Abstract preview of a website dashboard">
              <div className="visual-topline"><span className="window-dots"><i></i><i></i><i></i></span><span>PROJECT PREVIEW / 001</span></div>
              <div className="visual-panel">
                <div className="panel-heading">
                  <div><span className="mini-label">DIGITAL, MADE PRACTICAL</span><h2>Make the next step<br />a little simpler.</h2></div>
                  <div className="panel-symbol"><Layers3 size={24} /></div>
                </div>
                <div className="panel-line"></div>
                <div className="preview-row">
                  <div className="preview-icon"><MonitorSmartphone size={20} /></div>
                  <div><strong>Business websites</strong><span>Made for real customers</span></div>
                  <ArrowRight size={17} className="preview-arrow" />
                </div>
                <div className="preview-row">
                  <div className="preview-icon preview-icon-green"><Clock3 size={20} /></div>
                  <div><strong>Clinic queue tools</strong><span>Designed around daily workflows</span></div>
                  <ArrowRight size={17} className="preview-arrow" />
                </div>
                <div className="panel-footer"><span className="status-dot"></span> SMALL STUDIO · PRACTICAL BY DESIGN</div>
              </div>
              <div className="visual-note"><Sparkles size={15} /> Built with purpose, not just decoration.</div>
              <div className="visual-orbit orbit-one"></div><div className="visual-orbit orbit-two"></div>
            </div>
          </div>
          <div className="container hero-bottom"><span>WHAT WE FOCUS ON</span><div><b>Web presence</b><i></i><b>Useful software</b><i></i><b>Local businesses</b></div></div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow">WHAT WE DO</div><h2>Two focused services.<br /><span>Built around real needs.</span></h2></div>
              <p>We are starting small on purpose: focusing on work we can demonstrate, deliver carefully, and improve with every project.</p>
            </div>
            <div className="service-grid">
              {services.map(({ number, icon: Icon, title, description, tags }) => (
                <article className="service-card" key={number}>
                  <div className="card-top"><span className="card-number">{number} / SERVICE</span><div className="service-icon"><Icon size={22} /></div></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a className="card-link" href="#contact" onClick={() => setForm(prev => ({ ...prev, service: title === "Business websites" ? "Business website" : "Clinic queue management" }))}>Talk about this service <ArrowRight size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-heading work-heading">
              <div><div className="eyebrow">SELECTED WORK</div><h2>Proof over promises.</h2></div>
              <p>These are our first demonstrations. We will add client projects here as we build them and get permission to showcase the work.</p>
            </div>
            <article className="project-card">
              <div className="project-art real-project-art">
                <div className="project-art-top"><span>LIVE PRODUCT / 001</span><span>CLINIC QUEUE</span></div>
                <figure className="screen-main">
                  <img src="/clinic-doctor-queue.png" alt="Clinic Queue doctor queue and token management screen" />
                  <figcaption>01 — Reception &amp; queue management</figcaption>
                </figure>
                <div className="screen-inset">
                  <img src="/clinic-display.png" alt="Clinic Queue waiting-room display showing doctor queues" />
                  <span>02 — Waiting-room display</span>
                </div>
                <div className="screen-label">BUILT AND TESTED · PRODUCT SCREENSHOTS</div>
              </div>
              <div className="project-copy">
                <div className="project-label"><Stethoscope size={15} /> HEALTHCARE WORKFLOW</div>
                <h3>Clinic Queue<br />Management</h3>
                <p>A working queue-management app for clinic staff: create patient tokens, manage doctor-wise queues, call the next patient, and show live queue status on a waiting-room screen.</p>
                <ul className="feature-list"><li><Check size={15} /> Receptionist token workflow</li><li><Check size={15} /> Doctor-wise queue</li><li><Check size={15} /> Public token status and display</li></ul>
                <a className="button button-dark" href="https://clinic-queue-demo.onrender.com" target="_blank" rel="noreferrer">Open live demo <ArrowRight size={16} /></a>
                <p className="small-note">Screens shown are from the working project. Please use the live demo to explore the current experience.</p>
              </div>
            </article>
            <div className="next-project">
              <div className="next-project-icon"><Code2 size={22} /></div>
              <div><span className="mini-label">IN PROGRESS</span><h3>Local business website concept</h3><p>A clean sample website for a local service business will be added here next.</p></div>
              <span className="coming-soon">COMING NEXT</span>
            </div>
          </div>
        </section>

        <section className="section approach-section" id="approach">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow">A CLEAR PROCESS</div><h2>Small team. <span>Thoughtful work.</span></h2></div>
              <p>No confusing process or surprise scope. We keep the work clear, involve you in key decisions, and agree on expectations up front.</p>
            </div>
            <div className="steps-grid">
              {steps.map(([number, title, copy]) => <article className="step" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section about-strip">
          <div className="container about-grid">
            <div><div className="eyebrow eyebrow-light">WHY ONEVISION</div><h2>Technology should<br />make things <span>easier.</span></h2></div>
            <div className="about-copy"><p>OneVision Digital is an independent studio in Telangana, starting with two simple goals: help local businesses build a stronger online presence and create useful software for everyday problems.</p><p>We believe good work starts by understanding the people who will actually use it.</p><a className="text-link text-link-light" href="#contact">Let's talk about your idea <ArrowRight size={16} /></a></div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="eyebrow">START A CONVERSATION</div>
              <h2>Have a project<br />in mind?</h2>
              <p>Tell us a little about your business or the problem you want to solve. We'll take it from there.</p>
              <div className="contact-detail"><div className="contact-detail-icon"><MapPin size={18} /></div><div><span>LOCAL FOCUS</span><strong>Warangal · Hanamkonda · Kazipet</strong></div></div>
              <div className="contact-detail"><div className="contact-detail-icon"><Mail size={18} /></div><div><span>EMAIL</span><strong>hello@example.com</strong><small>Demo address — replace before publishing</small></div></div>
              <div className="social-links">
                <a href="#contact" aria-label="Instagram placeholder" onClick={(e) => { e.preventDefault(); setNotice("Add your real Instagram profile link in src/App.jsx before publishing."); }}><span className="social-letter">ig</span></a>
                <a href="#contact" aria-label="Facebook placeholder" onClick={(e) => { e.preventDefault(); setNotice("Add your real Facebook page link in src/App.jsx before publishing."); }}><span className="social-letter">f</span></a>
                <a href="#contact" aria-label="WhatsApp placeholder" onClick={(e) => { e.preventDefault(); setNotice("Add your WhatsApp Business number in src/App.jsx before publishing."); }}><MessageCircle size={18} /></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={submitEnquiry}>
              <div className="form-heading"><h3>Tell us about your project</h3><span>We'll get back to you soon.</span></div>
              <label>Your name<input required name="name" value={form.name} onChange={updateForm} placeholder="Name" /></label>
              <label>Business name <span className="optional">(optional)</span><input name="business" value={form.business} onChange={updateForm} placeholder="Your business" /></label>
              <label>What do you need?<select name="service" value={form.service} onChange={updateForm}><option>Business website</option><option>Clinic queue management</option><option>Something else</option></select></label>
              <label>Tell us a little more<textarea required name="message" value={form.message} onChange={updateForm} rows="4" placeholder="What would you like help with?" /></label>
              <button className="button button-primary form-submit" type="submit">Prepare enquiry email <ArrowRight size={17} /></button>
              {notice && <p className="form-notice" role="status">{notice}</p>}
              <p className="form-privacy">This demo prepares an email in your device's email app. It does not store form submissions.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand brand-footer" href="#home"><span className="brand-mark">O<span>V</span></span><span className="brand-copy">onevision<span>digital studio</span></span></a>
          <p>Useful digital solutions for growing businesses.</p>
          <a className="back-top" href="#home">Back to top ↑</a>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} OneVision Digital. Demo brand name.</span><span>Made with care in Telangana.</span></div>
      </footer>
    </>
  );
}

export default App;