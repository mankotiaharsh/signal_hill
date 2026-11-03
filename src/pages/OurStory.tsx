import { Link } from 'react-router-dom';
import { usePageTitle } from '../components/PageTitle';
import { business, images, journal } from '../data/site';

export default function OurStory() {
  usePageTitle('Our Story');

  return (
    <>
      <section className="page-header">
        <div className="container center narrow">
          <h1>The Signal Hill Story</h1>
          <p className="lead">
            The newest chapter for one of Devonport's best-known houses — named for the mountain that watches over it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <figure className="figure-wide">
            <img src={images.illustration} alt="Lieut. Godfrey's 1844 sketch of Signal Hill and Point Devonport from Parnell" />
            <figcaption>Signal Hill / Point Devonport from Parnell, sketched by Lieut. Godfrey, 1844.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split-text">
            <h2>Devonport's oldest house.</h2>
            <p>
              Our home at 24 Victoria Road was built around 1846 by William Oliver, one of the North Shore's earliest
              settlers. Oliver was also the first person laid to rest on Signal Hill — the mountain first known as
              Flagstaff, and today as Mt Victoria.
            </p>
            <p>
              In the years since, Devonport grew from an isolated outpost into a busy commercial centre and naval base.
              Through it all, the house endured, and today it stands as the oldest existing home in Devonport.
            </p>
          </div>
          <figure className="split-media">
            <img src={images.historic} alt="Looking up toward 24 Victoria Road, c. 1900s" loading="lazy" />
            <figcaption>Looking up toward 24 Victoria Road, c. 1900s.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <div className="split-text">
            <h2>Now it's time for new stories…</h2>
            <p>
              Carefully restored, the house now lives on as a modern bar and restaurant at the heart of the township —
              a place for locals and visitors alike to eat, drink and catch up.
            </p>
            <p className="lead">Come join us.</p>
            <Link to="/contact" className="btn">
              Make a Reservation
            </Link>
          </div>
          <figure className="split-media">
            <img src={images.bowWindow} alt="The original bow window, made by William Oliver c. 1846" loading="lazy" />
            <figcaption>The original bow window, made by William Oliver c. 1846.</figcaption>
          </figure>
        </div>
      </section>

      <section className="full-bleed">
        <img src={images.entrance} alt="The entrance to Signal Hill" loading="lazy" />
      </section>

      <section className="section">
        <div className="container">
          <div className="center">
            <h2>Follow our journey.</h2>
            <p>
              <a href={business.instagram} target="_blank" rel="noreferrer">
                @signalhilldevonport
              </a>
            </p>
          </div>
          <div className="journal-grid">
            {journal.map((p) => (
              <a key={p.image} href={business.instagram} target="_blank" rel="noreferrer" className="journal-item">
                <img src={p.image} alt={p.caption} loading="lazy" />
                <span className="journal-caption">{p.caption}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
