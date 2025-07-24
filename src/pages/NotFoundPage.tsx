import { Link, useRouteError } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-primary text-center px-4">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h1 className="text-9xl font-display font-bold text-accent">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mt-4">Page Not Found</p>
        <p className="text-primary/70 mt-2">The page you're looking for has been abducted by aliens.</p>
        <p className="text-primary/50 text-sm mt-6">
          <i>{error?.statusText || error?.message}</i>
        </p>
        <Link to="/" className="mt-8 group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-background bg-secondary rounded-md overflow-hidden transition-all duration-300 hover:shadow-neon-glow">
          Return to Base
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
