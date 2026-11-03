import { FormEvent, useState } from 'react';
import { usePageTitle } from '../components/PageTitle';
import { SplitWords } from '../components/ScrollEffects';
import { business } from '../data/site';

interface Booking {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}

const empty: Booking = { name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: '' };

const times = (() => {
  const out: string[] = [];
  for (let h = 11; h <= 21; h++) {
    for (const m of [0, 30]) {
      if (h === 11 && m === 0) continue;
      const hh = h > 12 ? h - 12 : h;
      out.push(`${hh}:${m === 0 ? '00' : '30'}${h >= 12 ? 'pm' : 'am'}`);
    }
  }
  return out;
})();

export default function Contact() {
  usePageTitle('Contact');
  const [form, setForm] = useState<Booking>(empty);
  const [sent, setSent] = useState(false);

  const set = (k: keyof Booking) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: replace with your booking provider (e.g. Now Book It, ResDiary, OpenTable) or an API endpoint.
    setSent(true);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <section className="page-header">
        <div className="container center">
          <h1>
            <SplitWords text="Make a Reservation" />
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="booking-card" data-reveal="flip">
            {sent ? (
              <div className="center">
                <h3>Thank you, {form.name.split(' ')[0] || 'friend'}.</h3>
                <p>
                  We've received your request for {form.guests} on {form.date} at {form.time}. We'll confirm by email
                  shortly.
                </p>
                <button className="btn btn-outline" onClick={() => { setForm(empty); setSent(false); }}>
                  Make another booking
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="booking-form">
                <div className="row">
                  <label>
                    Date
                    <input type="date" min={today} required value={form.date} onChange={set('date')} />
                  </label>
                  <label>
                    Time
                    <select required value={form.time} onChange={set('time')}>
                      <option value="">Select</option>
                      {times.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Guests
                    <select value={form.guests} onChange={set('guests')}>
                      {Array.from({ length: 10 }, (_, i) => String(i + 1)).map((n) => (
                        <option key={n}>{n}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label>
                  Name
                  <input required value={form.name} onChange={set('name')} />
                </label>
                <div className="row">
                  <label>
                    Email
                    <input type="email" required value={form.email} onChange={set('email')} />
                  </label>
                  <label>
                    Phone
                    <input type="tel" required value={form.phone} onChange={set('phone')} />
                  </label>
                </div>
                <label>
                  Special requests
                  <textarea rows={3} value={form.notes} onChange={set('notes')} />
                </label>
                <button className="btn" type="submit">
                  Request Booking
                </button>
              </form>
            )}
          </div>

          <div className="contact-info" data-reveal-stagger="side">
            <h4>{business.name}</h4>
            <p>{business.addressFull}</p>
            <p>
              If you can't find a time that suits using the form, please call us on{' '}
              <a href={business.phoneHref}>{business.phone}</a>.
            </p>
            <p>
              General enquiries: <a href={`mailto:${business.email}`}>{business.email}</a>
            </p>
            <p>Open {business.hours}</p>
            <a href={business.directions} target="_blank" rel="noreferrer" className="btn btn-outline">
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <section className="map" data-reveal="curtain-up">
        <iframe
          title="Map to Signal Hill"
          src="https://www.google.com/maps?q=24+Victoria+Road,+Devonport,+Auckland+0624&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
