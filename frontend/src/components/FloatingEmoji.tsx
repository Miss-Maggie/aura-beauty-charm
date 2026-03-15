import { motion } from "framer-motion";

interface FloatingEmojiProps {
  emoji: string;
  className?: string;
  animationClass?: string;
}

const FloatingEmoji = ({ emoji, className = "", animationClass = "animate-float" }: FloatingEmojiProps) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className={`absolute text-2xl md:text-3xl select-none pointer-events-none ${animationClass} ${className}`}
  >
    {emoji}
  </motion.span>
);

export default FloatingEmoji;
