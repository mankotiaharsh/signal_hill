import { Link } from 'react-router-dom';
import { business, footerNav, images } from '../data/site';
import { FacebookIcon, InstagramIcon, MailIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src={images.logo} alt="Signal Hill" />
        </div>
        <div className="footer-info">
          <h4>{business.name}</h4>
          <p>{business.address}</p>
          <p>{business.tagline}</p>
          <p>{business.hours}</p>
          <p>
            <a href={business.phoneHref}>{business.phone}</a>
          </p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {footerNav.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="socials footer-socials">
          <a href={business.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href={business.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href={`mailto:${business.email}`} aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} Signal Hill, Devonport</div>
    </footer>
  );
}
