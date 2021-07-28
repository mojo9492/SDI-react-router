import './App.css';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li><Link to={`/`}>Home</Link></li>
          <li><Link to={`/products`}>Products</Link></li>
          <li><Link to={`/cart`}>Cart</Link></li>
        </ul>
      </header>
      <hr />

      <div>
        <Route exact path={`/`} component={Home} />
        <Route exact path={`/products`} component={Products} />
        <Route exact path={`/cart`} component={Cart} />
      </div>
    </div>
  );
}

export default App;
