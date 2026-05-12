import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Sunrise, Flame, Ship, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg, #1a0a00 0%, #2d1200 40%, #1a0a00 100%)", fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');

        * { box-sizing: border-box; }

        body { font-family: 'Lato', sans-serif; }

        .display-font { font-family: 'Playfair Display', Georgia, serif; }

        .text-glow {
          text-shadow: 0 2px 8px rgba(0,0,0,0.9), 0 4px 24px rgba(0,0,0,0.7), 0 0 60px rgba(0,0,0,0.5);
        }

        .hero-subtitle-shadow {
          text-shadow: 0 1px 4px rgba(0,0,0,1), 0 2px 16px rgba(0,0,0,0.95), 0 4px 32px rgba(0,0,0,0.9);
        }

        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(234,88,12,0.2);
        }

        .btn-primary {
          background: linear-gradient(135deg, #ea580c, #c2410c);
          color: white;
          padding: 16px 40px;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          font-family: 'Lato', sans-serif;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(234,88,12,0.5);
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          transition: left 0.4s ease;
        }
        .btn-primary:hover::before { left: 100%; }
        .btn-primary:hover {
          background: linear-gradient(135deg, #f97316, #ea580c);
          box-shadow: 0 6px 30px rgba(234,88,12,0.7);
          transform: translateY(-2px);
        }

        .section-label {
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #f97316;
        }

        .divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ea580c, #f59e0b);
          margin: 16px auto 0;
        }

        .contact-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(234,88,12,0.25);
          padding: 20px 24px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .contact-card:hover {
          background: rgba(234,88,12,0.08);
          border-color: rgba(234,88,12,0.5);
        }

        .place-card {
          position: relative;
          height: 480px;
          overflow: hidden;
          border: 1px solid rgba(234,88,12,0.3);
          transition: border-color 0.3s ease;
        }
        .place-card:hover { border-color: rgba(249,115,22,0.7); }

        .feature-card {
          text-align: center;
          padding: 40px 32px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(234,88,12,0.2);
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }
        .feature-card:hover {
          background: rgba(234,88,12,0.07);
          border-color: rgba(234,88,12,0.5);
          transform: translateY(-6px);
        }

        .footer-link { color: #fcd34d; text-decoration: none; transition: color 0.2s; }
        .footer-link:hover { color: #f97316; }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <motion.div style={{ y: heroY, scale: heroScale, position: "absolute", inset: 0 }}>
          {/* Multiple gradient layers for maximum text readability */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 10,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.65) 70%, rgba(26,10,0,0.95) 100%)"
          }} />
          {/* Center darkening for text area */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 11,
            background: "radial-gradient(ellipse 80% 60% at 50% 65%, rgba(0,0,0,0.55) 0%, transparent 70%)"
          }} />
          <img
            src="https://images.unsplash.com/photo-1572403490139-e08bf9689937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYXJhbmFzaSUyMGJvYXQlMjBzdW5yaXNlfGVufDF8fHx8MTc3NjAyMDc3MXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Varanasi Ganges Sunrise"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity, position: "relative", zIndex: 20, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px" }}
        >
          <div style={{ maxWidth: "760px", textAlign: "center", color: "white" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Flame style={{ width: 64, height: 64, margin: "0 auto 8px", color: "#f97316", filter: "drop-shadow(0 0 16px rgba(249,115,22,0.8))" }} />
            </motion.div>

            <motion.p
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ marginBottom: 20, textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}
            >
              Sacred City of India
            </motion.p>

            <motion.h1
              className="display-font text-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", fontWeight: 900, lineHeight: 1.05, color: "#ffffff", margin: "0 0 28px" }}
            >
              Explore Varanasi
            </motion.h1>

            <motion.p
              className="hero-subtitle-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                fontSize: "clamp(1.05rem, 2.5vw, 1.35rem)",
                marginBottom: 48,
                color: "#ffffff",
                maxWidth: "600px",
                margin: "0 auto 48px",
                lineHeight: 1.7,
                fontFamily: "'Lato', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.02em"
              }}
            >
              Experience the spiritual heart of India with guided tours to sacred ghats, ancient temples, and timeless traditions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Your Tour
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('places')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: "transparent",
                  color: "white",
                  padding: "16px 40px",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  border: "2px solid rgba(255,255,255,0.6)",
                  cursor: "pointer",
                  fontFamily: "'Lato', sans-serif",
                  transition: "all 0.3s ease",
                  textShadow: "0 1px 4px rgba(0,0,0,0.8)"
                }}
                onMouseEnter={e => { (e.target as HTMLButtonElement).style.borderColor = "#f97316"; (e.target as HTMLButtonElement).style.color = "#f97316"; }}
                onMouseLeave={e => { (e.target as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.6)"; (e.target as HTMLButtonElement).style.color = "white"; }}
              >
                Explore Places
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", zIndex: 20 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ width: 24, height: 40, border: "2px solid rgba(255,255,255,0.4)", borderRadius: 12, display: "flex", justifyContent: "center", paddingTop: 6 }}
          >
            <div style={{ width: 4, height: 8, background: "rgba(255,255,255,0.7)", borderRadius: 2 }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Places to Visit Section */}
      <section id="places" style={{ padding: "100px 24px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent, rgba(234,88,12,0.04) 50%, transparent)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: 80 }}
          >
            <p className="section-label" style={{ marginBottom: 16 }}>Discover the Sacred</p>
            <h2
              className="display-font"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "#ffffff", marginBottom: 20, lineHeight: 1.1 }}
            >
              Sacred Places in Varanasi
            </h2>
            <div className="divider" />
            <p style={{ fontSize: "1.15rem", color: "#fcd34d", maxWidth: "580px", margin: "24px auto 0", lineHeight: 1.7, fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
              Discover the ancient ghats, temples, and spiritual sites that make Varanasi eternal
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 28, marginBottom: 60 }}>
            {[
              {
                icon: Flame,
                title: "Dashashwamedh Ghat",
                description: "Witness the spectacular Ganga Aarti ceremony every evening with thousands of diyas lighting the night",
                image: "https://images.unsplash.com/photo-1701619879211-e03adf1993a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxWYXJhbmFzaSUyMGdoYXRzJTIwR2FuZ2VzfGVufDF8fHx8MTc3NjAyMDc3MXww&ixlib=rb-4.1.0&q=80&w=1080",
                accent: "#ef4444"
              },
              {
                icon: MapPin,
                title: "Kashi Vishwanath Temple",
                description: "One of the twelve Jyotirlingas, this golden temple is the most sacred shrine dedicated to Lord Shiva",
                image: "https://images.unsplash.com/photo-1661771402987-9dc9db2cbb63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYXJhbmFzaSUyMHRlbXBsZSUyMEluZGlhfGVufDF8fHx8MTc3NjAyMDc3MXww&ixlib=rb-4.1.0&q=80&w=1080",
                accent: "#f59e0b"
              },
              {
                icon: Sunrise,
                title: "Assi Ghat",
                description: "Experience tranquil morning prayers and witness the sunrise over the Ganges from this peaceful ghat",
                image: "https://images.unsplash.com/photo-1676633645682-7bee123e73a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxWYXJhbmFzaSUyMGJvYXQlMjBzdW5yaXNlfGVufDF8fHx8MTc3NjAyMDc3MXww&ixlib=rb-4.1.0&q=80&w=1080",
                accent: "#818cf8"
              },
              {
                icon: Flame,
                title: "Manikarnika Ghat",
                description: "The main cremation ghat, where the eternal fire has burned for thousands of years in sacred rituals",
                image: "https://images.unsplash.com/photo-1701619878991-716d8fbb319f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYXJhbmFzaSUyMGdoYXRzJTIwR2FuZ2VzfGVufDF8fHx8MTc3NjAyMDc3MXww&ixlib=rb-4.1.0&q=80&w=1080",
                accent: "#f97316"
              },
              {
                icon: MapPin,
                title: "Sarnath",
                description: "Visit the birthplace of Buddhism where Lord Buddha gave his first sermon after enlightenment",
                image: "https://images.unsplash.com/photo-1749522025403-7a8045ea03bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxWYXJhbmFzaSUyMHRlbXBsZSUyMEluZGlhfGVufDF8fHx8MTc3NjAyMDc3MXww&ixlib=rb-4.1.0&q=80&w=1080",
                accent: "#a78bfa"
              },
              {
                icon: Ship,
                title: "Sunrise Boat Ride",
                description: "Glide along the sacred Ganges at dawn and witness the city awaken with ancient rituals and prayers",
                image: "https://images.unsplash.com/photo-1598439588456-106ce3e37b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxWYXJhbmFzaSUyMGJvYXQlMjBzdW5yaXNlfGVufDF8fHx8MTc3NjAyMDc3MXww&ixlib=rb-4.1.0&q=80&w=1080",
                accent: "#22d3ee"
              }
            ].map((place, index) => (
              <motion.div
                key={place.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="place-card card-hover"
              >
                <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                  <motion.img
                    src={place.image}
                    alt={place.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Strong bottom gradient for text */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,4,0,0.97) 0%, rgba(10,4,0,0.75) 40%, rgba(0,0,0,0.1) 75%, transparent 100%)" }} />
                </div>

                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 28px" }}>
                  <place.icon style={{ width: 36, height: 36, marginBottom: 14, color: place.accent, filter: `drop-shadow(0 0 8px ${place.accent}80)` }} />
                  <h3
                    className="display-font"
                    style={{ fontSize: "1.45rem", fontWeight: 700, color: "#ffffff", marginBottom: 10, lineHeight: 1.2, textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
                  >
                    {place.title}
                  </h3>
                  <p style={{ color: "#f3e8d0", fontSize: "0.92rem", lineHeight: 1.65, fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                    {place.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div style={{ textAlign: "center", padding: "0 24px 80px" }}>
        <div style={{ width: "100%", maxWidth: 800, margin: "0 auto", height: 1, background: "linear-gradient(90deg, transparent, rgba(234,88,12,0.4), transparent)" }} />
      </div>

      {/* Tour Experiences */}
      <section style={{ padding: "20px 24px 100px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <p className="section-label" style={{ marginBottom: 16 }}>Our Offerings</p>
            <h2
              className="display-font"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#ffffff", marginBottom: 16, lineHeight: 1.1 }}
            >
              What We Offer
            </h2>
            <div className="divider" />
            <p style={{ fontSize: "1.1rem", color: "#fcd34d", maxWidth: "520px", margin: "24px auto 0", lineHeight: 1.7, fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
              Authentic experiences with local guides who know every story, every ritual, every hidden corner
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              {
                icon: Sunrise,
                title: "Sunrise Boat Tours",
                description: "Begin your day with a peaceful boat ride along the Ganges as the sun rises over the ancient city",
                color: "#fbbf24"
              },
              {
                icon: Flame,
                title: "Ganga Aarti Experience",
                description: "Witness the mesmerizing evening prayer ceremony with fire, chants, and spiritual devotion",
                color: "#f97316"
              },
              {
                icon: MapPin,
                title: "Temple & Heritage Walks",
                description: "Explore narrow lanes, hidden temples, and centuries-old architecture with expert historians",
                color: "#34d399"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                className="feature-card"
              >
                <feature.icon style={{ width: 52, height: 52, margin: "0 auto 20px", color: feature.color, filter: `drop-shadow(0 0 10px ${feature.color}60)` }} />
                <h3
                  className="display-font"
                  style={{ fontSize: "1.35rem", color: "#ffffff", marginBottom: 14, fontWeight: 700 }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: "#e5d0b0", fontSize: "0.95rem", lineHeight: 1.7, fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div style={{ textAlign: "center", padding: "0 24px 80px" }}>
        <div style={{ width: "100%", maxWidth: 800, margin: "0 auto", height: 1, background: "linear-gradient(90deg, transparent, rgba(234,88,12,0.4), transparent)" }} />
      </div>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "20px 24px 120px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(234,88,12,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <p className="section-label" style={{ marginBottom: 16 }}>Get in Touch</p>
            <h2
              className="display-font"
              style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, color: "#ffffff", marginBottom: 16, lineHeight: 1.1 }}
            >
              Plan Your Varanasi Journey
            </h2>
            <div className="divider" />
            <p style={{ fontSize: "1.1rem", color: "#fcd34d", maxWidth: "500px", margin: "24px auto 0", lineHeight: 1.7, fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
              Share your interests and we'll craft the perfect spiritual experience for you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(234,88,12,0.25)", padding: "48px" }}
          >
            {/* Contact Info */}
            <div style={{ marginBottom: 48 }}>
              <h3
                className="display-font"
                style={{ fontSize: "1.5rem", color: "#f97316", marginBottom: 28, fontWeight: 700 }}
              >
                Contact Our Varanasi Team
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
                {[
                  { icon: Mail, label: "Email", value: "Varanasitrip007@gmail.com" },
                  { icon: Phone, label: "Phone / WhatsApp", value: "+91 78706 08855" },
                  { icon: Clock, label: "Available", value: "7 Days a Week, 6 AM – 10 PM IST" },
                  { icon: MapPin, label: "Office", value: "Near Assi Ghat, Varanasi, UP" }
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="contact-card">
                    <Icon style={{ width: 22, height: 22, color: "#f97316", marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <p style={{ color: "#f97316", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6, fontFamily: "'Lato', sans-serif" }}>
                        {label}
                      </p>
                      <p style={{ color: "#f3e8d0", fontSize: "0.97rem", fontFamily: "'Lato', sans-serif", lineHeight: 1.5 }}>
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(234,88,12,0.4), transparent)", marginBottom: 40 }} />

            {/* Google Form Area */}
            <div>
              <h3
                className="display-font"
                style={{ fontSize: "1.5rem", color: "#ffffff", marginBottom: 24, fontWeight: 700 }}
              >
                Tour Inquiry Form
              </h3>

              {/* Placeholder — replace the div below with your Google Form iframe */}
              <div style={{
                background: "rgba(0,0,0,0.3)",
                border: "2px dashed rgba(234,88,12,0.4)",
                minHeight: 340,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 40,
                marginBottom: 24
              }}>
                <div style={{ textAlign: "center", maxWidth: 480 }}>
                  <Ship style={{ width: 48, height: 48, margin: "0 auto 16px", color: "#ea580c", opacity: 0.6 }} />
                  <p className="display-font" style={{ fontSize: "1.2rem", color: "#fcd34d", marginBottom: 12, fontWeight: 700 }}>
                    Google Form Coming Soon
                  </p>
                  <p style={{ color: "#e5d0b0", fontSize: "0.92rem", lineHeight: 1.7, fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                    Replace this area with your Google Form iframe. All responses will go directly to{" "}
                    <span style={{ color: "#f97316", fontWeight: 700 }}>Varanasitrip007@gmail.com</span>
                  </p>
                </div>
              </div>

              {/*
                TO EMBED YOUR GOOGLE FORM:
                1. Go to your Google Form → Send → Embed (</>)
                2. Copy the iframe code
                3. Replace the placeholder div above with:

                <iframe
                  src="YOUR_GOOGLE_FORM_EMBED_URL"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  style={{ border: 0 }}
                >
                  Loading…
                </iframe>
              */}

              <div style={{
                background: "rgba(234,88,12,0.08)",
                border: "1px solid rgba(234,88,12,0.25)",
                padding: "20px 24px"
              }}>
                <p style={{ color: "#f97316", fontWeight: 700, marginBottom: 10, fontSize: "0.9rem", fontFamily: "'Lato', sans-serif", letterSpacing: "0.05em" }}>
                  HOW TO LINK FORM RESPONSES TO YOUR EMAIL
                </p>
                <ol style={{ color: "#e5d0b0", fontSize: "0.88rem", lineHeight: 1.8, paddingLeft: 20, fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                  <li>Open your Google Form → click the <strong style={{ color: "#fcd34d" }}>Responses</strong> tab</li>
                  <li>Click the <strong style={{ color: "#fcd34d" }}>3-dot menu</strong> → "Get email notifications for new responses"</li>
                  <li>Make sure you're signed in as <strong style={{ color: "#fcd34d" }}>Varanasitrip007@gmail.com</strong></li>
                  <li>Every submission will now notify you directly by email</li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "48px 24px",
        borderTop: "1px solid rgba(234,88,12,0.2)",
        background: "rgba(0,0,0,0.3)"
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <Flame style={{ width: 36, height: 36, margin: "0 auto 16px", color: "#f97316", filter: "drop-shadow(0 0 8px rgba(249,115,22,0.6))" }} />
          <p className="display-font" style={{ color: "#fcd34d", fontSize: "1.1rem", marginBottom: 8, fontWeight: 700 }}>
            Explore Varanasi
          </p>
          <p style={{ color: "#9a7a5a", fontSize: "0.85rem", marginBottom: 6, fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
            © 2026 Explore Varanasi. All rights reserved.
          </p>
          <p style={{ color: "#6b4f32", fontSize: "0.8rem", fontFamily: "'Lato', sans-serif", fontStyle: "italic" }}>
            Experience the eternal city. Embrace the sacred journey.
          </p>
        </div>
      </footer>
    </div>
  );
}
