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
    <div className="min-h-screen bg-gradient-to-b from-orange-950 via-amber-950 to-orange-950">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/40 to-amber-600/40 mix-blend-overlay z-10" />
          <img
            src="https://images.unsplash.com/photo-1572403490139-e08bf9689937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYXJhbmFzaSUyMGJvYXQlMjBzdW5yaXNlfGVufDF8fHx8MTc3NjAyMDc3MXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Varanasi Ganges Sunrise"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 h-full flex items-center justify-center px-6"
        >
          <div className="max-w-4xl text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Flame className="w-20 h-20 mx-auto mb-6 text-orange-400" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 text-white"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800, lineHeight: 1.1 }}
            >
              Explore Varanasi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl mb-12 text-amber-100 max-w-2xl mx-auto"
            >
              Experience the spiritual heart of India with guided tours to sacred ghats, ancient temples, and timeless traditions
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg transition-colors"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Your Tour
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Places to Visit Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6" style={{ fontWeight: 800 }}>
              Sacred Places in Varanasi
            </h2>
            <p className="text-xl text-amber-200 max-w-2xl mx-auto">
              Discover the ancient ghats, temples, and spiritual sites that make Varanasi eternal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Flame,
                title: "Dashashwamedh Ghat",
                description: "Witness the spectacular Ganga Aarti ceremony every evening with thousands of diyas lighting the night",
                image: "https://images.unsplash.com/photo-1701619879211-e03adf1993a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxWYXJhbmFzaSUyMGdoYXRzJTIwR2FuZ2VzfGVufDF8fHx8MTc3NjAyMDc3MXww&ixlib=rb-4.1.0&q=80&w=1080",
                color: "from-orange-500/30 to-red-500/30"
              },
              {
                icon: MapPin,
                title: "Kashi Vishwanath Temple",
                description: "One of the twelve Jyotirlingas, this golden temple is the most sacred shrine dedicated to Lord Shiva",
                image: "https://images.unsplash.com/photo-1661771402987-9dc9db2cbb63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYXJhbmFzaSUyMHRlbXBsZSUyMEluZGlhfGVufDF8fHx8MTc3NjAyMDc3MXww&ixlib=rb-4.1.0&q=80&w=1080",
                color: "from-amber-500/30 to-yellow-500/30"
              },
              {
                icon: Sunrise,
                title: "Assi Ghat",
                description: "Experience tranquil morning prayers and witness the sunrise over the Ganges from this peaceful ghat",
                image: "https://images.unsplash.com/photo-1676633645682-7bee123e73a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxWYXJhbmFzaSUyMGJvYXQlMjBzdW5yaXNlfGVufDF8fHx8MTc3NjAyMDc3MXww&ixlib=rb-4.1.0&q=80&w=1080",
                color: "from-blue-500/30 to-purple-500/30"
              },
              {
                icon: Flame,
                title: "Manikarnika Ghat",
                description: "The main cremation ghat, where the eternal fire has burned for thousands of years in sacred rituals",
                image: "https://images.unsplash.com/photo-1701619878991-716d8fbb319f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYXJhbmFzaSUyMGdoYXRzJTIwR2FuZ2VzfGVufDF8fHx8MTc3NjAyMDc3MXww&ixlib=rb-4.1.0&q=80&w=1080",
                color: "from-red-500/30 to-orange-500/30"
              },
              {
                icon: MapPin,
                title: "Sarnath",
                description: "Visit the birthplace of Buddhism where Lord Buddha gave his first sermon after enlightenment",
                image: "https://images.unsplash.com/photo-1749522025403-7a8045ea03bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxWYXJhbmFzaSUyMHRlbXBsZSUyMEluZGlhfGVufDF8fHx8MTc3NjAyMDc3MXww&ixlib=rb-4.1.0&q=80&w=1080",
                color: "from-purple-500/30 to-pink-500/30"
              },
              {
                icon: Ship,
                title: "Sunrise Boat Ride",
                description: "Glide along the sacred Ganges at dawn and witness the city awaken with ancient rituals and prayers",
                image: "https://images.unsplash.com/photo-1598439588456-106ce3e37b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxWYXJhbmFzaSUyMGJvYXQlMjBzdW5yaXNlfGVufDF8fHx8MTc3NjAyMDc3MXww&ixlib=rb-4.1.0&q=80&w=1080",
                color: "from-cyan-500/30 to-blue-500/30"
              }
            ].map((place, index) => (
              <motion.div
                key={place.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateY: 5, rotateX: 5 }}
                className="group relative"
                style={{ perspective: "1000px" }}
              >
                <div className="relative h-[500px] bg-orange-900/30 backdrop-blur-sm overflow-hidden border border-orange-700/50 transition-all duration-300 group-hover:border-orange-500">
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.img
                      src={place.image}
                      alt={place.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b ${place.color} group-hover:opacity-70 transition-opacity`} />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-orange-950 via-orange-950/80 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                    <place.icon className="w-12 h-12 mb-4 text-orange-400" />
                    <h3 className="text-2xl mb-3 text-white" style={{ fontWeight: 700 }}>
                      {place.title}
                    </h3>
                    <p className="text-amber-200">
                      {place.description}
                    </p>
                  </div>

                  <motion.div
                    className="absolute inset-0 border-2 border-orange-400/0 group-hover:border-orange-400/40 transition-all duration-300 pointer-events-none"
                    style={{ transformStyle: "preserve-3d" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Experiences */}
      <section className="py-24 px-6 bg-gradient-to-b from-orange-900/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6" style={{ fontWeight: 800 }}>
              What We Offer
            </h2>
            <p className="text-xl text-amber-200 max-w-2xl mx-auto">
              Authentic experiences with local guides who know every story, every ritual, every hidden corner
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sunrise,
                title: "Sunrise Boat Tours",
                description: "Begin your day with a peaceful boat ride along the Ganges as the sun rises over the ancient city"
              },
              {
                icon: Flame,
                title: "Ganga Aarti Experience",
                description: "Witness the mesmerizing evening prayer ceremony with fire, chants, and spiritual devotion"
              },
              {
                icon: MapPin,
                title: "Temple & Heritage Walks",
                description: "Explore narrow lanes, hidden temples, and centuries-old architecture with expert historians"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 bg-orange-900/30 backdrop-blur border border-orange-700/50 hover:border-orange-400/50 transition-all"
              >
                <feature.icon className="w-16 h-16 mx-auto mb-4 text-orange-400" />
                <h3 className="text-2xl text-white mb-3" style={{ fontWeight: 700 }}>
                  {feature.title}
                </h3>
                <p className="text-amber-200">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6" style={{ fontWeight: 800 }}>
              Plan Your Varanasi Journey
            </h2>
            <p className="text-xl text-amber-200 max-w-2xl mx-auto">
              Share your interests and we'll craft the perfect spiritual experience for you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-orange-900/30 backdrop-blur-sm border border-orange-700/50 p-8 md:p-12"
          >
            {/* Contact Information */}
            <div className="mb-8 pb-8 border-b border-orange-700/50">
              <h3 className="text-2xl text-white mb-6" style={{ fontWeight: 700 }}>
                Contact Our Varanasi Team
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-orange-400 mb-1">Email</p>
                    <p className="text-amber-100">tours@varanasi-explore.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-orange-400 mb-1">Phone / WhatsApp</p>
                    <p className="text-amber-100">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-orange-400 mb-1">Available</p>
                    <p className="text-amber-100">7 Days a Week, 6 AM - 10 PM IST</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-orange-400 mb-1">Office</p>
                    <p className="text-amber-100">Near Assi Ghat, Varanasi, UP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Form Embed */}
            <div className="relative">
              <h3 className="text-2xl text-white mb-6" style={{ fontWeight: 700 }}>
                Tour Inquiry Form
              </h3>
              <div className="bg-orange-950/50 p-6 border border-orange-700/50">
                <p className="text-amber-200 mb-6">
                  To add your custom Google Form for tour inquiries:
                </p>
                <ol className="text-amber-200 space-y-3 mb-6 list-decimal list-inside">
                  <li>Create a Google Form at <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">forms.google.com</a></li>
                  <li>Add fields like: Name, Email, Phone, Preferred Tour Date, Number of People, Special Requests</li>
                  <li>Click "Send" → Select embed icon {"<>"} → Copy iframe code</li>
                  <li>Replace the placeholder below with your iframe code</li>
                </ol>

                {/* Placeholder for Google Form - Replace with actual embed code */}
                <div className="aspect-[4/3] bg-orange-900/50 border-2 border-dashed border-orange-600 flex items-center justify-center text-amber-300">
                  <div className="text-center p-8">
                    <Ship className="w-16 h-16 mx-auto mb-4 text-orange-600" />
                    <p className="text-lg mb-2">Google Form Embed Area</p>
                    <p className="text-sm max-w-md">
                      Replace this div with your Google Form iframe code.
                      All tourist inquiries will automatically save to Google Sheets for easy tracking.
                    </p>
                  </div>
                </div>

                {/* Example of how to embed - commented out */}
                {/*
                <iframe
                  src="YOUR_GOOGLE_FORM_URL"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="border-0"
                >
                  Loading…
                </iframe>
                */}
              </div>

              <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/30 text-amber-200 text-sm">
                <p className="mb-2"><strong className="text-orange-400">Auto-save responses to Google Sheets:</strong></p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Open your Google Form → Click "Responses" tab</li>
                  <li>Click the green Google Sheets icon</li>
                  <li>Create a new spreadsheet to store all tour inquiries</li>
                  <li>Every form submission will automatically appear in the spreadsheet</li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-orange-800">
        <div className="max-w-7xl mx-auto text-center text-amber-300">
          <Flame className="w-10 h-10 mx-auto mb-4 text-orange-400" />
          <p className="mb-2">© 2026 Explore Varanasi. All rights reserved.</p>
          <p className="text-sm">Experience the eternal city. Embrace the sacred journey.</p>
        </div>
      </footer>
    </div>
  );
}