import { Link } from 'react-router-dom';
import { usePageTitle } from '../components/PageTitle';

export default function Cart() {
  usePageTitle('Cart');
  return (
    <section className="page-header tall">
      <div className="container center">
        <h1>Shopping Cart</h1>
        <p className="lead">You have nothing in your shopping cart.</p>
        <Link to="/" className="btn">
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}
