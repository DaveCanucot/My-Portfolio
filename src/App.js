import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom'
import Hero from './Componets/Hero'
import About from './Componets/About';
import Home from './Pages/index'
import Services from './Componets/Services'
import Experience from './Componets/Experience'
import Works from './Componets/Works'


function App() {
  return (
    <Router>
      <Home />
      <Hero/>
      <About/>
      <Services/>
      <Experience />
      <Works/>
    </Router>
  );
}

export default App;
