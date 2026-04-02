/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  Droplets, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  MessageSquare, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2,
  Star,
  ArrowRight
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Szolgáltatások', href: '#services' },
    { name: 'Galéria', href: '#gallery' },
    { name: 'Miért mi?', href: '#why-us' },
    { name: 'Kapcsolat', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass-dark py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-linear-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center neon-glow car-highlight">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter">
            SHINE<span className="text-primary drop-shadow-[0_0_8px_rgba(225,6,0,0.4)]">TO</span>YOU
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 bg-linear-to-r from-primary to-primary-dark text-white text-sm font-bold rounded-full hover:neon-glow-strong transition-all car-highlight"
          >
            Időpont foglalás
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-dark border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 bg-linear-to-r from-primary to-primary-dark text-white text-center font-bold rounded-xl car-highlight"
              >
                Időpont foglalás
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Red Sports Car" 
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/60 to-background" />
        {/* Red Glow Reflection */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Prémium Mobil Autókozmetika
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
            Autóápolás, ami <br />
            <span className="text-primary italic drop-shadow-[0_0_15px_rgba(225,6,0,0.5)]">házhoz jön.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Vízmentes nanotechnológiás tisztítás Dabas és környékén. 
            Sportautó szintű detailing az Ön otthonában vagy munkahelyén.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-primary to-primary-dark text-white font-bold rounded-2xl hover:neon-glow-strong transition-all flex items-center justify-center gap-2 car-highlight"
            >
              Időpont foglalás <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/36304330472" 
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              Írj üzenetet <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Külső tisztítás",
      desc: "Vízmentes nanotechnológiás eljárás, karcmentes ragyogás.",
      icon: <Droplets className="w-8 h-8 text-primary" />,
    },
    {
      title: "Belső mélytisztítás",
      desc: "Kárpittisztítás, fertőtlenítés és teljes portalanítás.",
      icon: <Sparkles className="w-8 h-8 text-primary" />,
    },
    {
      title: "Felni tisztítás",
      desc: "Fékpor eltávolítás és tartós védelem a felniknek.",
      icon: <Car className="w-8 h-8 text-primary" />,
    },
    {
      title: "Gumiápolás",
      desc: "Mélyfekete hatás és UV védelem az abroncsoknak.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    },
    {
      title: "Bőrápolás",
      desc: "Tisztítás és kondicionálás a repedezés ellen.",
      icon: <Sparkles className="w-8 h-8 text-primary" />,
    },
    {
      title: "Műanyag ápolás",
      desc: "Gyári matt vagy selyemfényű megjelenés visszaállítása.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Szolgáltatásaink</h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Minden részletre kiterjedő figyelem, prémium alapanyagok és professzionális technológia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 car-highlight opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors drop-shadow-[0_0_8px_rgba(225,6,0,0.3)]">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1552933529-e359b2477252?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?q=80&w=1964&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Referenciáink</h2>
            <p className="text-white/50 max-w-xl">
              Nézze meg az általunk kezelt autók látványos átalakulását. 
              A csillogás magáért beszél.
            </p>
          </div>
          <a href="https://instagram.com" className="flex items-center gap-2 text-primary font-bold hover:underline drop-shadow-[0_0_8px_rgba(225,6,0,0.3)]">
            Több kép Instagramon <Instagram className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden group"
            >
              <img 
                src={img} 
                alt="Detailing work" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-primary font-bold drop-shadow-[0_0_8px_rgba(225,6,0,0.5)]">ShineToYou Quality</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    {
      title: "Vízmentes technológia",
      desc: "Környezetbarát eljárás, amely nem igényel folyóvizet, mégis karcmentes és tartós ragyogást biztosít.",
      icon: <Droplets />
    },
    {
      title: "Házhoz megyünk",
      desc: "Dabas és környékén bárhol: otthonában, irodájában vagy akár a mélygarázsban is elvégezzük a munkát.",
      icon: <MapPin />
    },
    {
      title: "Prémium eredmények",
      desc: "Csak a legjobb minőségű vegyszereket és eszközöket használjuk, hogy autója olyan legyen, mint az új.",
      icon: <Star />
    },
    {
      title: "Időtakarékos",
      desc: "Amíg Ön dolgozik vagy pihen, mi újjávarázsoljuk autóját. Nincs sorban állás, nincs várakozás.",
      icon: <Clock />
    }
  ];

  return (
    <section id="why-us" className="py-24 px-6 bg-surface-lighter overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Miért válassza a <br />
              <span className="text-primary">ShineToYou</span> csapatát?
            </h2>
            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary drop-shadow-[0_0_8px_rgba(225,6,0,0.3)]">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                    <p className="text-white/50 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 animate-pulse" />
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1931&auto=format&fit=crop" 
                alt="Detailing process" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 car-highlight" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Kovács Péter",
      car: "BMW M5",
      text: "Elképesztő, amit a srácok műveltek az autóval. A vízmentes technológia miatt szkeptikus voltam, de a végeredmény minden várakozásomat felülmúlta.",
      rating: 5
    },
    {
      name: "Nagy Andrea",
      car: "Mercedes GLE",
      text: "Nagyon kényelmes, hogy házhoz jönnek. Amíg a gyerekekkel voltam, az autó teljesen megújult a garázsban. Csak ajánlani tudom!",
      rating: 5
    },
    {
      name: "Szabó Márk",
      car: "Audi RS6",
      text: "Profi hozzáállás, precíz munka. Minden apró részletre figyeltek, a felnik még sosem csillogtak így. Köszönöm!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Ügyfeleink véleménye</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-3xl glass border border-white/5">
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary drop-shadow-[0_0_8px_rgba(225,6,0,0.4)]" />
                ))}
              </div>
              <p className="text-white/80 italic mb-6">"{r.text}"</p>
              <div>
                <p className="font-bold">{r.name}</p>
                <p className="text-primary text-sm font-medium">{r.car}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Foglaljon időpontot</h2>
            <p className="text-white/50 mb-10 text-lg">
              Kérdése van vagy időpontot szeretne? Keressen minket bizalommal! 
              Dabas és 30km-es körzetében ingyenes kiszállással.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary drop-shadow-[0_0_8px_rgba(225,6,0,0.3)]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Hívjon minket</p>
                  <a href="tel:+36304330472" className="text-xl font-bold hover:text-primary transition-colors">+36 30 433 0472</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary drop-shadow-[0_0_8px_rgba(225,6,0,0.3)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Helyszín</p>
                  <p className="text-xl font-bold">Dabas és környéke</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary drop-shadow-[0_0_8px_rgba(225,6,0,0.3)]">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Kövessen minket</p>
                  <a href="https://instagram.com" className="text-xl font-bold hover:text-primary transition-colors">@shinetoyou_detailing</a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[2.5rem]">
            {formStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Köszönjük!</h3>
                <p className="text-white/50">Hamarosan felvesszük Önnel a kapcsolatot.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-primary font-bold hover:underline drop-shadow-[0_0_8px_rgba(225,6,0,0.3)]"
                >
                  Új üzenet küldése
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Név</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Az Ön neve"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-hidden transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Telefonszám</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+36 30 123 4567"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-hidden transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Üzenet / Autó típusa</label>
                  <textarea 
                    rows={4}
                    placeholder="Miben segíthetünk?"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-hidden transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  disabled={formStatus === 'submitting'}
                  className="w-full py-5 bg-linear-to-r from-primary to-primary-dark text-white font-bold rounded-2xl hover:neon-glow-strong transition-all disabled:opacity-50 flex items-center justify-center gap-2 car-highlight"
                >
                  {formStatus === 'submitting' ? 'Küldés...' : 'Foglalj időpontot most'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-linear-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center car-highlight">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tighter">
            SHINE<span className="text-primary">TO</span>YOU
          </span>
        </div>
        
        <p className="text-white/30 text-sm">
          © 2024 ShineToYou. Minden jog fenntartva. | Dabas és környéke
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-white/50 hover:text-primary transition-colors drop-shadow-[0_0_8px_rgba(225,6,0,0.3)]"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-white/50 hover:text-primary transition-colors drop-shadow-[0_0_8px_rgba(225,6,0,0.3)]"><MessageSquare className="w-5 h-5" /></a>
          <a href="#" className="text-white/50 hover:text-primary transition-colors drop-shadow-[0_0_8px_rgba(225,6,0,0.3)]"><Phone className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/36304330472"
        className="w-14 h-14 bg-linear-to-br from-primary to-primary-dark text-white rounded-full flex items-center justify-center shadow-2xl neon-glow car-highlight"
      >
        <MessageSquare className="w-7 h-7" />
      </motion.a>
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+36304330472"
        className="w-14 h-14 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-2xl border border-white/10"
      >
        <Phone className="w-7 h-7" />
      </motion.a>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
