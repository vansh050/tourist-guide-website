import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Sunrise, Flame, Ship, MapPin, Phone, Mail, Clock, Star, Camera } from "lucide-react";

const WHATSAPP_NUMBER = "917870608855";
const WHATSAPP_MESSAGE = "Hello! I'm interested in booking a Varanasi tour. Please share more details.";

const REVIEWS = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    date: "2 weeks ago",
    text: "Absolutely magical experience! Our guide knew every story of every ghat. The sunrise boat ride was unforgettable — felt the spiritual energy of Varanasi. Highly recommend!",
    avatar: "P",
    color: "#ef4444"
  },
  {
    name: "James Whitaker",
    location: "London, UK",
    rating: 5,
    date: "1 month ago",
    text: "Visited from the UK and this team made the trip truly special. The Ganga Aarti tour was perfectly timed and we got front-row spots. Super responsive on WhatsApp before arrival.",
    avatar: "J",
    color: "#f59e0b"
  },
  {
    name: "Anjali Verma",
    location: "Delhi, India",
    rating: 5,
    date: "3 weeks ago",
    text: "Booked the heritage walk + Kashi Vishwanath darshan combo. Smooth, well-organized, and our guide spoke perfect Hindi & English. Will definitely come back with family.",
    avatar: "A",
    color: "#a78bfa"
  },
  {
    name: "Rahul Mehta",
    location: "Bangalore, India",
    rating: 5,
    date: "1 week ago",
    text: "The sunrise boat ride is a must! Captain was kind, told us the history of every ghat we passed. Got incredible photos. Worth every rupee — 10/10 service.",
    avatar: "R",
    color: "#22d3ee"
  },
  {
    name: "Sofia Romano",
    location: "Rome, Italy",
    rating: 5,
    date: "2 months ago",
    text: "Una esperienza incredibile! The Sarnath tour was beautifully arranged. Our guide explained Buddhist history with so much passion. Felt safe and welcomed throughout.",
    avatar: "S",
    color: "#34d399"
  },
  {
    name: "Vikram Singh",
    location: "Jaipur, India",
    rating: 5,
    date: "5 days ago",
    text: "Best decision was booking with them. Pickup on time, all temples covered, even helped us with prasad at Kashi Vishwanath. Truly authentic local experience.",
    avatar: "V",
    color: "#f97316"
  }
];

const GALLERY_PHOTOS = [
  { src: "/gallery/photo1.jpeg", caption: "Sacred Moments at the Ghats" },
  { src: "/gallery/photo2.jpeg", caption: "Evening Aarti Ceremony" },
  { src: "/gallery/photo3.png", caption: "Temple Heritage Walk" },
  { src: "/gallery/photo4.jpeg", caption: "Sunrise Over the Ganges" }
];

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

      {/* Gallery Section */}
      <section id="gallery" style={{ padding: "20px 24px 100px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <p className="section-label" style={{ marginBottom: 16 }}>Moments from the Sacred City</p>
            <h2
              className="display-font"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#ffffff", marginBottom: 16, lineHeight: 1.1 }}
            >
              Glimpses of Varanasi
            </h2>
            <div className="divider" />
            <p style={{ fontSize: "1.05rem", color: "#fcd34d", maxWidth: "560px", margin: "24px auto 0", lineHeight: 1.7, fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
              Captured during real tours with our travellers — the ghats, the rituals, the timeless light
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {GALLERY_PHOTOS.map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  position: "relative",
                  height: 360,
                  overflow: "hidden",
                  border: "1px solid rgba(234,88,12,0.3)",
                  background: "#0a0400"
                }}
                className="card-hover"
              >
                <motion.img
                  src={photo.src}
                  alt={photo.caption}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,4,0,0.92) 0%, rgba(10,4,0,0.35) 45%, transparent 75%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 22px", display: "flex", alignItems: "center", gap: 10 }}>
                  <Camera style={{ width: 18, height: 18, color: "#f97316", flexShrink: 0 }} />
                  <p className="display-font" style={{ fontSize: "1.05rem", color: "#fff", fontWeight: 700, margin: 0, textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
                    {photo.caption}
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

      {/* Reviews Section */}
      <section id="reviews" style={{ padding: "20px 24px 100px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(234,88,12,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <p className="section-label" style={{ marginBottom: 16 }}>Travellers Love Us</p>
            <h2
              className="display-font"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#ffffff", marginBottom: 16, lineHeight: 1.1 }}
            >
              What Our Guests Say
            </h2>
            <div className="divider" />
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 24, padding: "10px 20px", background: "rgba(252,211,77,0.08)", border: "1px solid rgba(252,211,77,0.3)", borderRadius: 999 }}>
              <div style={{ display: "flex", gap: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} style={{ width: 18, height: 18, color: "#fbbf24", fill: "#fbbf24" }} />
                ))}
              </div>
              <span style={{ color: "#fcd34d", fontWeight: 700, fontFamily: "'Lato', sans-serif", letterSpacing: "0.05em" }}>
                4.9 / 5 · Verified Google Reviews
              </span>
            </div>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {REVIEWS.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(234,88,12,0.22)",
                  padding: "28px 26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  transition: "all 0.3s ease"
                }}
                className="card-hover"
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${review.color}, ${review.color}aa)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    fontFamily: "'Lato', sans-serif",
                    flexShrink: 0,
                    boxShadow: `0 4px 14px ${review.color}55`
                  }}>
                    {review.avatar}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p className="display-font" style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", margin: 0, lineHeight: 1.2 }}>
                      {review.name}
                    </p>
                    <p style={{ color: "#9a7a5a", fontSize: "0.8rem", margin: "2px 0 0", fontFamily: "'Lato', sans-serif" }}>
                      {review.location}
                    </p>
                  </div>
                  {/* Google logo G */}
                  <svg width="22" height="22" viewBox="0 0 48 48" style={{ flexShrink: 0, opacity: 0.85 }}>
                    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"/>
                    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
                    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.3-4.1 5.6l6.2 5.2C41.4 35.7 44 30.3 44 24c0-1.3-.1-2.3-.4-3.5z"/>
                  </svg>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ display: "flex", gap: 2 }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} style={{ width: 16, height: 16, color: "#fbbf24", fill: "#fbbf24" }} />
                    ))}
                  </div>
                  <span style={{ color: "#9a7a5a", fontSize: "0.78rem", fontFamily: "'Lato', sans-serif" }}>{review.date}</span>
                </div>

                <p style={{ color: "#e5d0b0", fontSize: "0.93rem", lineHeight: 1.7, fontFamily: "'Lato', sans-serif", fontWeight: 300, margin: 0 }}>
                  "{review.text}"
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

              <div style={{
                background: "rgba(234,88,12,0.06)",
                border: "1px solid rgba(234,88,12,0.3)",
                padding: "36px 28px",
                textAlign: "center"
              }}>
                <Ship style={{ width: 44, height: 44, margin: "0 auto 14px", color: "#f97316" }} />
                <p className="display-font" style={{ fontSize: "1.25rem", color: "#fcd34d", marginBottom: 10, fontWeight: 700 }}>
                  Share Your Travel Details
                </p>
                <p style={{ color: "#e5d0b0", fontSize: "0.95rem", lineHeight: 1.7, fontFamily: "'Lato', sans-serif", fontWeight: 300, maxWidth: 520, margin: "0 auto 26px" }}>
                  Click below to fill our quick inquiry form. We'll get back to you within a few hours with a customized itinerary.
                </p>
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScWUUEYgRNa89EOUQtz4XjLgkUogIxAAO5tTau3JlNb2iuU4A/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ display: "inline-block", textDecoration: "none" }}
                >
                  Fill the Inquiry Form
                </motion.a>
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

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          width: 96,
          height: 96,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 32px rgba(37,211,102,0.6), 0 0 0 8px rgba(37,211,102,0.15)",
          zIndex: 100,
          textDecoration: "none",
          cursor: "pointer"
        }}
      >
        {/* Pulse ring */}
        <motion.span
          animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "#25D366",
            zIndex: -1
          }}
        />
        <svg width="52" height="52" viewBox="0 0 32 32" fill="white" aria-hidden="true">
          <path d="M16.001 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.55-1.72a12.79 12.79 0 0 0 6.25 1.6h.01c7.07 0 12.8-5.73 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05a12.71 12.71 0 0 0-9.06-3.63zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.88 1.02 1.04-3.78-.25-.4a10.62 10.62 0 0 1-1.63-5.69c0-5.88 4.78-10.66 10.65-10.66 2.85 0 5.52 1.11 7.53 3.13a10.59 10.59 0 0 1 3.12 7.54c0 5.88-4.78 10.66-10.65 10.66zm5.85-7.98c-.32-.16-1.9-.94-2.19-1.04-.3-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.58-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.53-.53-.72-.54-.19-.01-.4-.01-.61-.01-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.3 3.27c.16.21 2.24 3.42 5.42 4.79.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.16-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z"/>
        </svg>
      </motion.a>
    </div>
  );
}
