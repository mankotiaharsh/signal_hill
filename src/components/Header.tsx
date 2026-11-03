import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { business, images, mainNav } from '../data/site';
import { CartIcon, FacebookIcon, InstagramIcon, MailIcon } from './Icons';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="logo" aria-label="Signal Hill home">
          <img src={images.logo} alt="Signal Hill - Devonport Bar & Restaurant" />
        </Link>

        <nav className="main-nav" aria-label="Main">
          {mainNav.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <div className="socials">
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
          <Link to="/contact" className="btn btn-small header-cta">
            Make a Reservation
          </Link>
          <Link to="/cart" className="cart" aria-label="Cart, 0 items">
            <CartIcon />
            <span className="cart-count">0</span>
          </Link>
          <button
            className="burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="mobile-menu" aria-hidden={!open}>
        <nav aria-label="Mobile">
          {mainNav.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn">
          Make a Reservation
        </Link>
        <div className="socials">
          <a href={business.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon size={24} />
          </a>
          <a href={business.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <FacebookIcon size={24} />
          </a>
          <a href={`mailto:${business.email}`} aria-label="Email">
            <MailIcon size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}
