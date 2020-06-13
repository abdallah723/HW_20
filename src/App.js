import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';


function App () {
  return (
    <div className="App">
      <Header />
      <HashRouter>
        <Navbar />
          <Route exact path="/" component={About}/>
          <Route exact path="/Projects" component={Projects}/>
          <Route exact path="/contact" component={Contact}/>
      </HashRouter>
      <Footer />
    </div>
  )
}

export default App;