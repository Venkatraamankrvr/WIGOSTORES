import './App.css';

// import { Route, Router, BrowserRouter as Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CartScreen } from './screens/CartScreen';
// import { BrowserRouter } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';
import Login from './screens/login';
import { NotFound } from './screens/NotFound';
import { ShopSection } from './components/homeComponents/ShopSection';
import { SingleProduct } from './screens/SingleProduct';

// import { Router } from 'react-router';
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";


// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart/:id?" component={<CartScreen />} />

          {/* <Route path='*' exact={true} element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <HomeScreen></HomeScreen> */}
    </div>
  );
}

export default App;
