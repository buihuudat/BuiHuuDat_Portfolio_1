import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import Services from './components/pages/services/Services';
import About from './components/pages/about/About';

import './app.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className='container'>
          <Home />
          <Services />
          <About />
      </div>
      </Router>
  )
}

export default App;
