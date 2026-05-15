import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Header,
  Home,
  About,
  Structure,
  Contact,
} from './pages';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Home />
          <About />
          <Structure />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

