import { motion } from "framer-motion";



const ServiceCard = ({ title, price, duration, icon }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    className="group relative p-8 bg-card rounded-2xl shadow-card hover:shadow-card-hover border border-border transition-shadow duration-300"
  >
    <div className="text-4xl mb-5">{icon}</div>
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
      <span className="text-primary font-bold">{price}</span>
    </div>
    <p className="text-sm text-muted-foreground">{duration}</p>
    <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/10 to-transparent" />
  </motion.div>
);

export default ServiceCard;



