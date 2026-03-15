import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Sparkles } from "lucide-react";

const services = [
  { title: "Haircut", price: "$45", duration: "45 min", icon: "✂️" },
  { title: "Hair Coloring", price: "$120", duration: "2 hours", icon: "🎨" },
  { title: "Beard Trim", price: "$25", duration: "20 min", icon: "🪒" },
  { title: "Wash & Blow Dry", price: "$35", duration: "30 min", icon: "💆" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles size={14} />
              Premium Beauty Experience
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
              Where beauty meets
              <br />
              <span className="text-primary">precision.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
              At Aura Beauty Studio, we craft personalized experiences that enhance your natural elegance. Every visit is a step into refined self-care.
            </p>
            <div className="flex gap-4">
              <Link
                to="/bookings/new"
                className="inline-flex items-center bg-foreground text-primary-foreground px-6 py-3.5 rounded-xl font-medium hover:bg-primary transition-all active:scale-95"
              >
                Book Appointment
              </Link>
              <Link
                to="/bookings"
                className="inline-flex items-center px-6 py-3.5 rounded-xl font-medium border border-border text-foreground hover:bg-accent transition-all"
              >
                View Bookings
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-2">Our Services</h2>
          <p className="text-muted-foreground mb-10">Expertly crafted treatments for every need.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
