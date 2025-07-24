import { Link } from 'react-router-dom';
import { BOUTIQUE_DETAILS, FOOTER_LINKS } from '../../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Boutique Info */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-primary">{BOUTIQUE_DETAILS.name}</h3>
            <p className="text-primary/70 text-sm">{BOUTIQUE_DETAILS.tagline}</p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 text-primary/80"><MapPin size={16} className="text-secondary"/> {BOUTIQUE_DETAILS.address}</p>
              <a href={`tel:${BOUTIQUE_DETAILS.contactNumber}`} className="flex items-center gap-2 text-primary/80 hover:text-secondary transition-colors"><Phone size={16} className="text-secondary"/> {BOUTIQUE_DETAILS.contactNumber}</a>
              <a href={`mailto:${BOUTIQUE_DETAILS.email}`} className="flex items-center gap-2 text-primary/80 hover:text-secondary transition-colors"><Mail size={16} className="text-secondary"/> {BOUTIQUE_DETAILS.email}</a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-primary/90 mb-4 tracking-wider">LEGAL</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-primary/70 hover:text-secondary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-primary/90 mb-4 tracking-wider">FOLLOW US</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.social.map(link => (
                <li key={link.name}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary/70 hover:text-secondary transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
             <h4 className="font-bold text-primary/90 mb-4 tracking-wider">NEWSLETTER</h4>
             <p className="text-sm text-primary/70 mb-4">Subscribe for the latest collections and offers.</p>
             <form className="flex">
                <input type="email" placeholder="Your Email" className="w-full bg-border text-primary px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent" />
                <button type="submit" className="bg-accent text-primary font-bold px-4 py-2 rounded-r-md hover:bg-accent/80 transition-colors">Join</button>
             </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-primary/60">
          <p>&copy; {currentYear} {BOUTIQUE_DETAILS.name}. All Rights Reserved.</p>
          <p className="mt-1">Website designed by Dualite Alpha</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
