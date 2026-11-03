import { Link } from 'react-router-dom';
import { usePageTitle } from '../components/PageTitle';

export default function NotFound() {
  usePageTitle('Page Not Found');
  return (
    <section className="page-header tall">
      <div className="container center">
        <h1>Page not found</h1>
        <p className="lead">We couldn't find the page you were looking for.</p>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
