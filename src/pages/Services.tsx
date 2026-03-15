import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const services = [
  { title: "Haircut", price: "$45", duration: "45 min", icon: "✂️", description: "Precision cuts tailored to your style and face shape." },
  { title: "Hair Coloring", price: "$120", duration: "2 hours", icon: "🎨", description: "Vibrant, long-lasting color using premium products." },
  { title: "Beard Trim", price: "$25", duration: "20 min", icon: "🪒", description: "Clean, sharp lines for the perfectly groomed look." },
  { title: "Wash & Blow Dry", price: "$35", duration: "30 min", icon: "💆", description: "Relaxing wash with a flawless blowout finish." },
  { title: "Deep Conditioning", price: "$55", duration: "45 min", icon: "💧", description: "Restore moisture and shine to dry or damaged hair." },
  { title: "Bridal Styling", price: "$200", duration: "3 hours", icon: "👰", description: "Stunning looks for your most special day." },
  { title: "Scalp Treatment", price: "$65", duration: "1 hour", icon: "🌿", description: "Therapeutic treatment for a healthy scalp." },
  { title: "Kids Haircut", price: "$25", duration: "30 min", icon: "👧", description: "Fun, gentle cuts for your little ones." },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">Our Services ✨</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Discover our full range of beauty treatments designed to make you look and feel amazing.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/bookings/new"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:brightness-110 transition-all active:scale-95"
        >
          <CalendarDays size={18} />
          Book an Appointment 💅
        </Link>
      </div>
    </div>
  </div>
);

export default Services;
