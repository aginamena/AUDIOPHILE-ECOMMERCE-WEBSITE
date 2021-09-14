
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nagivation from './components/Navigation';
import Footer from './components/Footer';
import HeadPhones from './components/HeadPhones';
import Speakers from './components/Speakers';
import EarPhones from './components/EarPhones';
import ProductDetail from './components/ProductDetail';
import { useEffect, useState } from 'react';
import Checkout from './components/Checkout';
// import SummaryItems from './components/SummaryItems';
import Thankyou from './components/Thankyou';

function App() {
  const [product, setProduct] = useState({});
  const [data, setDate] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then(response => response.json())
      .then(value => setDate(value))
  }, [])
  function viewProduct(slug) {
    data.map(item => item.slug == slug && setProduct(item))
  }
  return (
    <Router>
      <div style={{ backgroundColor: "#141414" }}>
        <Nagivation />
      </div>
      <Switch>
        <Route exact path="/">
          <HomePage send={slug => viewProduct(slug)} />
        </Route>
        <Route exact path="/headphones">
          <HeadPhones send={slug => viewProduct(slug)} />
        </Route>
        <Route exact path="/speakers">
          <Speakers send={slug => viewProduct(slug)} />
        </Route>
        <Route exact path="/earphones">
          <EarPhones send={slug => viewProduct(slug)} />
        </Route>
        <Route exact path="/prdDetail">
          <ProductDetail product={product} send={slug => viewProduct(slug)} />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
          <Thankyou />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
