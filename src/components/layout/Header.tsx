import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BOUTIQUE_DETAILS, NAV_LINKS } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
    exit: { opacity: 0, y: -20 }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <NavLink to="/" className="text-2xl font-display font-bold text-primary hover:text-secondary transition-colors">
            {BOUTIQUE_DETAILS.name}
          </NavLink>

          <nav className="hidden md:flex items-center space-x-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full text-primary/80 hover:text-secondary hover:bg-surface transition-colors">
              <ShoppingBag size={22} />
            </button>
            <button
              className="p-2 rounded-md text-primary/80 hover:text-secondary md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden bg-surface border-t border-border"
          >
            <div className="flex flex-col space-y-2 p-4">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.name} variants={mobileLinkVariants}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded-md text-base font-medium ${isActive ? 'bg-accent/20 text-secondary' : 'text-primary/80 hover:bg-border hover:text-primary'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
