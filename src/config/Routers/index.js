import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Home, ProductDetail } from '../../pages';
import Catalog from '../../pages/Catalog';
const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/catalogproduct/:productId"
          element={<ProductDetail />}
        />
        <Route exact path="catalogproduct" element={<Catalog />} />
      </Routes>
    </Router>
  );
};

export default Routers;
