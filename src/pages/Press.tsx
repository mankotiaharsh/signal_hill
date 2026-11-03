import { Link } from 'react-router-dom';
import { usePageTitle } from '../components/PageTitle';
import { SplitWords } from '../components/ScrollEffects';
import { images } from '../data/site';

export default function Press() {
  usePageTitle('Press');

  return (
    <>
      <section className="page-header">
        <div className="container center">
          <h1>
            <SplitWords text="Press" />
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split-media" data-reveal="curtain-up">
            <img src={images.family} alt="The Signal Hill family" loading="lazy" />
          </div>
          <div className="split-text" data-reveal-stagger="">
            <p className="eyebrow">Devonport Flagstaff · 18 December 2020</p>
            <h2>Locals bring new life to landmark Devonport home.</h2>
            <p>The story of how a local family brought Devonport's oldest house back to life as Signal Hill.</p>
            <div className="btn-row left">
              <a className="btn" href="https://www.signalhill.co.nz/s/AD8767-Signal-Hill-Advertorial.pdf" target="_blank" rel="noreferrer">
                Read the Full Story
              </a>
              <a className="btn btn-outline" href="https://devonportflagstaff.co.nz/read-online/" target="_blank" rel="noreferrer">
                Flagstaff Online
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <div className="split-text" data-reveal="blur">
            <h2>For all press enquiries please contact us.</h2>
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
          </div>
          <div className="split-media" data-reveal="tilt">
            <img src={images.pressClip} alt="Signal Hill in the press" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
