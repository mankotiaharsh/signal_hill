import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../components/PageTitle';
import { SplitWords } from '../components/ScrollEffects';
import { business, drinksMenu, foodMenu, kidsMenu, type MenuItem } from '../data/site';
import foodMenuPdf from '../assets/images/menu/Menu SH New.pdf?url';
import kidsMenuImage from '../assets/images/menu/kids_menu.jpeg';

type Tab = 'food' | 'kids' | 'drinks';

const tabs: { id: Tab; label: string }[] = [
  { id: 'food', label: 'Food' },
  { id: 'kids', label: 'Kids Menu' },
  { id: 'drinks', label: 'Drinks' },
];

function Anchor() {
  return (
    <svg className="menu-anchor" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="4.5" r="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 6.5V21M8 10h8M4 14c0 4 3.6 7 8 7s8-3 8-7M4 14l-1.6 1.6M4 14l1.8 1.2M20 14l1.6 1.6M20 14l-1.8 1.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuEntry({ item }: { item: MenuItem }) {
  return (
    <li className="menu-item">
      <div className="menu-item-head">
        <h4 className="menu-item-name">{item.name}</h4>
        {item.price && (
          <>
            <span className="menu-item-leader" aria-hidden="true" />
            <span className="menu-item-price">{item.price}</span>
          </>
        )}
      </div>
      {item.description && <p className="menu-item-desc">{item.description}</p>}
      {item.prices && (
        <ul className="menu-item-options">
          {item.prices.map((p) => (
            <li key={p.label}>
              <span>{p.label}</span> {p.price}
            </li>
          ))}
        </ul>
      )}
      {item.addOn && (
        <p className="menu-item-addon">
          <span>+ {item.addOn.name}</span>
          {item.addOn.description && <em> — {item.addOn.description}</em>}
          <span className="menu-item-price">{item.addOn.price}</span>
        </p>
      )}
    </li>
  );
}

function FoodMenu() {
  const [current, setCurrent] = useState(foodMenu[0].id);
  const navRef = useRef<HTMLElement>(null);

  // Highlight the category currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setCurrent(visible.target.id);
      },
      { rootMargin: '-35% 0px -60% 0px' },
    );
    foodMenu.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Keep the active chip visible in the horizontally scrolling nav (mobile).
  useEffect(() => {
    const nav = navRef.current;
    const chip = nav?.querySelector<HTMLElement>(`[data-id="${current}"]`);
    if (nav && chip) {
      nav.scrollTo({ left: chip.offsetLeft - nav.clientWidth / 2 + chip.clientWidth / 2, behavior: 'smooth' });
    }
  }, [current]);

  return (
    <div className="food-menu">
      <nav className="menu-nav" ref={navRef} aria-label="Menu categories">
        {foodMenu.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            data-id={s.id}
            className={current === s.id ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {s.title}
          </a>
        ))}
      </nav>

      <div className="menu-sheet" data-reveal="unfold">
        {foodMenu.map((section) => (
          <section key={section.id} id={section.id} className="menu-section" aria-labelledby={`${section.id}-title`}>
            <header className="menu-section-head" data-reveal="lines">
              <h3 id={`${section.id}-title`}>{section.title}</h3>
              {section.note && <p className="menu-section-note">{section.note}</p>}
            </header>
            <ul className={`menu-items${section.items.length > 2 ? ' two-col' : ''}`} data-reveal-stagger="">
              {section.items.map((item) => (
                <MenuEntry key={item.name} item={item} />
              ))}
            </ul>
          </section>
        ))}

        <footer className="menu-sheet-foot">
          <Anchor />
          <p>Please let our team know about any dietary requirements.</p>
          <a href={foodMenuPdf} target="_blank" rel="noreferrer" className="btn btn-outline">
            Download Food Menu (PDF)
          </a>
        </footer>
      </div>
    </div>
  );
}

function KidsMenu({ onZoom }: { onZoom: (src: string) => void }) {
  return (
    <div className="kids-menu">
      <div className="kids-card" data-reveal="slide-left">
        <p className="eyebrow">Kids Menu</p>
        <h2>Little Sailors</h2>
        <div className="kids-rule" aria-hidden="true">
          <span />
          <Anchor />
          <span />
        </div>
        <ul className="menu-items" data-reveal-stagger="side">
          {kidsMenu.map((item) => (
            <MenuEntry key={item.name} item={item} />
          ))}
        </ul>
      </div>

      <button
        className="kids-art"
        data-reveal="tilt"
        style={{ '--delay': '0.2s' } as CSSProperties}
        onClick={() => onZoom(kidsMenuImage)} aria-label="Enlarge kids menu">
        <img src={kidsMenuImage} alt="Little Sailors kids menu illustration" loading="lazy" />
        <span className="kids-art-hint">View printed menu</span>
      </button>
    </div>
  );
}

function DrinksMenu({ onZoom }: { onZoom: (src: string) => void }) {
  return (
    <>
      <div className="menu-pages" data-reveal-stagger="pop">
        {drinksMenu.pages.map((src, i) => (
          <button key={src} className="menu-page" onClick={() => onZoom(src)} aria-label={`Enlarge drinks list page ${i + 1}`}>
            <img src={src} alt={`Drinks list page ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>
      <div className="center menu-drinks-foot">
        <a href={drinksMenu.pdf} target="_blank" rel="noreferrer" className="btn btn-outline">
          Download Drinks List (PDF)
        </a>
      </div>
    </>
  );
}

export default function Menu() {
  usePageTitle('Menu');
  const [active, setActive] = useState<Tab>(() => (window.location.hash === '#kids' ? 'kids' : 'food'));

  const openKids = () => {
    setActive('kids');
    document.getElementById('menus')?.scrollIntoView({ behavior: 'smooth' });
  };
  const [zoom, setZoom] = useState<string | null>(null);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setZoom(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoom]);

  return (
    <>
      <section className="page-header">
        <div className="container center">
          <p className="eyebrow">Signal Hill · Restaurant &amp; Bar</p>
          <h1>
            <SplitWords text="Menu" />
          </h1>
          <p className="lead">Seasonal plates to share, generous mains and something sweet to finish.</p>
          <div className="btn-row">
            <a href={foodMenuPdf} target="_blank" rel="noreferrer" className="btn btn-outline">
              Food Menu (PDF)
            </a>
            <a
              href="#kids"
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                openKids();
              }}
            >
              Kids Menu
            </a>
            <a href={drinksMenu.pdf} target="_blank" rel="noreferrer" className="btn btn-outline">
              Drinks List (PDF)
            </a>
            <a href={business.orderOnline} target="_blank" rel="noreferrer" className="btn">
              Order Online
            </a>
          </div>
          <p className="muted small">Dining in? Scan the QR code at your table to order.</p>
        </div>
      </section>

      <section id="menus" className="section menu-body">
        <div className="container">
          <div className="tabs" role="tablist" data-reveal="fade-up">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={t.id === active}
                className={t.id === active ? 'active' : ''}
                onClick={() => setActive(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {active === 'food' && <FoodMenu />}
          {active === 'kids' && <KidsMenu onZoom={setZoom} />}
          {active === 'drinks' && <DrinksMenu onZoom={setZoom} />}
        </div>
      </section>

      <section className="section cta-band">
        <div className="container center">
          <h2 data-reveal="scale-in">Book a table.</h2>
          <Link to="/contact" className="btn">
            Make a Reservation
          </Link>
        </div>
      </section>

      {zoom && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setZoom(null)}>
          <button className="lightbox-close" aria-label="Close">
            ×
          </button>
          <img src={zoom} alt="Menu enlarged" />
        </div>
      )}
    </>
  );
}
