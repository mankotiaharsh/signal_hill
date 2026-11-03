import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import { usePageTitle } from '../components/PageTitle';
import { business, images } from '../data/site';

export default function Home() {
  usePageTitle();

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${images.hero})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>
            Modern bar &amp; eatery.
            <br />
            Iconic setting.
          </h1>
        </div>
      </section>

      <section className="section intro">
        <div className="container split">
          <div className="split-media">
            <img src={images.heroSecondary} alt="Dining at Signal Hill" loading="lazy" />
          </div>
          <div className="split-text">
            <h2>Classic New Zealand fare, in Devonport's most iconic homestead.</h2>
            <p>
              Signal Hill pairs honest, seasonal Kiwi cooking with an extensive drinks list — all served inside one of
              Devonport's best-loved historic houses.
            </p>
            <Link to="/menu" className="btn">
              View Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="full-bleed">
        <img src={images.bar} alt="The bar at Signal Hill" loading="lazy" />
      </section>

      <section className="section hours">
        <div className="container split reverse">
          <div className="split-text">
            <h2>Open 11.30am – late, everyday.</h2>
            <p className="muted">Closed Christmas Day — open every other day of the year.</p>
            <p>
              Find us at {business.address}. Whether you're a local or just off the ferry, there's always a warm welcome
              at the bar or a table waiting in the dining room.
            </p>
            <Link to="/contact" className="btn">
              Make a Reservation
            </Link>
          </div>
          <div className="gallery-pair">
            <img src={images.gallery1} alt="Signal Hill interior" loading="lazy" />
            <img src={images.gallery2} alt="Food at Signal Hill" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section story-teaser">
        <div className="container center narrow">
          <img className="illustration" src={images.illustrationSm} alt="1844 sketch of Signal Hill, Devonport" loading="lazy" />
          <h2>An Establishment 169 years in the making.</h2>
          <p className="lead">Where we've come from and where we're going.</p>
          <Link to="/our-story" className="btn btn-outline">
            Our Story
          </Link>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
