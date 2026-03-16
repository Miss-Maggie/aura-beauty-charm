import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, Check, Home } from "lucide-react";

const services = [
  {
    title: "Hair Styling",
    icon: "💇‍♀️",
    description: "From cuts to colors, we create the perfect look for you",
    price: "$80",
    features: ["Consultation", "Wash & Style", "Professional Products"],
  },
  {
    title: "Nail Art",
    icon: "💅",
    description: "Beautiful nail designs that make a statement",
    price: "$45",
    features: ["Manicure", "Custom Design", "Long-lasting Polish"],
  },
  {
    title: "Facial Treatments",
    icon: "🌸",
    description: "Rejuvenate your skin with our luxury facial treatments",
    price: "$120",
    features: ["Deep Cleansing", "Anti-aging", "Hydrating Masks"],
  },
  {
    title: "Beard Grooming",
    icon: "🪒",
    description: "Sharp lines and clean looks for the modern gentleman",
    price: "$35",
    features: ["Trim & Shape", "Hot Towel", "Beard Oil Treatment"],
  },
  {
    title: "Hair Coloring",
    icon: "🎨",
    description: "Vibrant, long-lasting color using premium products",
    price: "$120",
    features: ["Color Consultation", "Premium Dyes", "Aftercare Kit"],
  },
  {
    title: "Spa Package",
    icon: "💆",
    description: "Complete relaxation with our signature spa experience",
    price: "$200",
    features: ["Full Body Massage", "Facial Treatment", "Aromatherapy"],
  },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-medium hover:brightness-110 transition-all active:scale-95 mb-10"
      >
        <Home size={16} />
        Back to Home 🏠
      </Link>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
          Our Services ✨
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Discover our range of beauty and wellness services designed to make you feel fabulous! 🌟
        </p>
      </motion.div>

      {/* Service Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
          >
            <div className="p-8 pb-0 text-center flex-1">
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-card-foreground mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6">{service.description}</p>

              {/* Price */}
              <p className="text-2xl font-bold text-foreground mb-6">
                Starting at {service.price}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Book Now Button */}
            <div className="px-8 pb-8">
              <Link
                href={`/bookings/new?service=${encodeURIComponent(service.title)}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 active:scale-[0.98] transition-all"
              >
                Book Now <CalendarDays size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;



