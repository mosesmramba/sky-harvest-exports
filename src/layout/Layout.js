import React from 'react';
import Header from './Header';

import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Partners from '../pages/Partners';
import Contact from '../pages/Contact';
import Services from '../pages/Services';

export default function Layout() {
  return (
    <div>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <Home />
        <Services />
        <About />
        <Products />
        <Partners />
        <Contact />
      </main>
    </div>
  );
}