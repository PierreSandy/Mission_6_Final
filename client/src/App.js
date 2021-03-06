import React from 'react';

// We use Route in order to define the different routes of our application
import { Route, Routes } from 'react-router-dom';

// We import all the components we need in our app
import Navbar from './components/navbar';
import RecordList from './components/recordList';
import Edit from './components/edit';
import Create from './components/create';
import Home from './components/home';
import About from './components/about';
import SettingsPage from './components/settings';
import NavbarMain from './components/navbarMain';
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        {/* <Route path="/products" element={<About />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<SettingsPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;
