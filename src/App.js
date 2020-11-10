import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Header from './header';

function App() {
  return(
    <div>
    <div class="header"> <Header /> </div>
  <BrowserRouter>
    <div className="nav-bar">
      <Link to="/">Home</Link>{' '}
      <Link to="/about">About</Link>{' '}
      <Link to="/contact">Contact</Link>{' '}
      </div>
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
    
  </BrowserRouter>
  </div>
  )
 
} 
export default App;
