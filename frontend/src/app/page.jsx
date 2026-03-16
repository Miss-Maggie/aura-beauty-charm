"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, Star } from "lucide-react";
import FloatingEmoji from "@/components/FloatingEmoji";
import ServiceCard from "@/components/ServiceCard";

const services = [
  { title: "Haircut", price: "$45", duration: "45 min", icon: "✂️" },
  { title: "Hair Coloring", price: "$120", duration: "2 hours", icon: "🎨" },
  { title: "Beard Trim", price: "$25", duration: "20 min", icon: "🪒" },
  { title: "Wash & Blow Dry", price: "$35", duration: "30 min", icon: "💆" },
];

const stats = [
  { value: "1000+", label: "Happy Clients 😊" },
  { value: "4.9", label: "Rating ⭐", showStars: true },
  { value: "15+", label: "Services 💄" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center">
        {/* Floating emojis */}
        <FloatingEmoji emoji="✨" className="top-12 left-8 md:left-16" animationClass="animate-float" />
        <FloatingEmoji emoji="💅" className="top-32 right-12 md:right-24" animationClass="animate-float-delayed" />
        <FloatingEmoji emoji="💄" className="bottom-48 left-16 md:left-24" animationClass="animate-float-slow" />
        <FloatingEmoji emoji="🌸" className="bottom-32 right-8 md:right-16" animationClass="animate-float" />
        <FloatingEmoji emoji="💆‍♀️" className="top-48 left-[30%]" animationClass="animate-float-delayed" />
        <FloatingEmoji emoji="🪷" className="top-20 right-[35%]" animationClass="animate-float-slow" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium text-muted-foreground mb-8">
              🌸 Welcome to Your Beauty Sanctuary ✨
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-2">
              <span className="text-muted-foreground">Aura Beauty</span>
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
              Your Beauty Journey 💫
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              Transform yourself at our luxury salon. From stunning hair makeovers to relaxing spa treatments, we make every visit a magical experience! 🌟
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/bookings/new"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base hover:brightness-110 transition-all active:scale-95 shadow-card"
              >
                <CalendarDays size={18} />
                Book Your Appointment 💅
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base border-2 border-border text-foreground hover:bg-secondary transition-all"
              >
                View Our Services ✨
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center gap-12 md:gap-20"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</span>
                    {stat.showStars && (
                      <div className="flex gap-0.5 ml-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">Our Services ✨</h2>
          <p className="text-muted-foreground text-lg">Expertly crafted treatments for every need.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        {/* CTA below services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/bookings/new"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:brightness-110 transition-all active:scale-95"
          >
            <CalendarDays size={18} />
            Book Now 💅
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2026 Aura Beauty Studio. All rights reserved. ✨
        </div>
      </footer>
    </div>
  );
};

export default Index;



