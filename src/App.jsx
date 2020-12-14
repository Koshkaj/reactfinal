import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from 'components/about/About';
import Parts from 'components/parts/Parts';
import Contact from 'components/contact/Contact';
import Home from 'components/home/Home';
import Brands from 'components/brands/Brands';
import React from 'react';
import Navigation from './components/navigation/navigation';

import './App.scss';
import { useState } from 'react';

function App() {
  const [showNav, setShowNav] = useState(true)
  const toggleNav = () => {
    setShowNav(!showNav)
  }
  return (
    <div className="app">
      <Router>
        {showNav && <Navigation /> }
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/brands">
              <Brands callback={toggleNav} />
            </Route>
            <Route path="/parts">
              <Parts />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
