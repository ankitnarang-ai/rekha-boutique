import { BOUTIQUE_DETAILS } from "../constants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary tracking-wider"
      >
        REKHA BOUTIQUE
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 text-lg md:text-xl text-primary/80 max-w-2xl"
      >
        {BOUTIQUE_DETAILS.tagline}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <Link to="/collections" className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-background bg-secondary rounded-md overflow-hidden transition-all duration-300 hover:shadow-neon-glow">
          <span className="relative z-10">Shop Now</span>
        </Link>
        <Link to="/about" className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-primary border-2 border-border rounded-md overflow-hidden transition-all duration-300 hover:border-secondary hover:text-secondary">
          Explore
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  );
};

export default HomePage;
