import { FormEvent, useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    // TODO: connect to your mailing-list provider (Mailchimp, Klaviyo, etc.)
    setDone(true);
  };

  return (
    <section className="section newsletter">
      <div className="container narrow center">
        <h2 data-reveal="track">Stay posted.</h2>
        <p data-reveal="fade-up">Sign up to hear about our news, events and seasonal menus first.</p>
        {done ? (
          <p className="newsletter-thanks">
            <strong>Great, you're on our list.</strong> We'll be in touch soon.
          </p>
        ) : (
          <form className="newsletter-form" data-reveal="scale-in" onSubmit={submit} noValidate>
            <label htmlFor="nl-email" className="sr-only">
              Email Address
            </label>
            <input
              id="nl-email"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn" type="submit">
              Sign Up
            </button>
            {error && <p className="form-error">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
}
