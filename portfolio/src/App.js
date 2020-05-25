import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

function App () {
  return (
    <div className="App">
      <Header/>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={About}/>
          <Route exact path="/Projects" component={Projects}/>
          {/* <Route exact path="/contact" component={Contact}/> */}
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App;