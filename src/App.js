import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom'
import Hero from './Componets/Hero'
import About from './Componets/About';
import Home from './Pages/index'
import Services from './Componets/Services'
import Experience from './Componets/Experience'


function App() {
  return (
    <Router>
      <Home />
      <Hero/>
      <About/>
      <Services/>
      <Experience />
    </Router>
  );
}

export default App;
