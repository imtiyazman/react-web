import './App.css';
import './css/App.scss';
import './css/custom.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';

// =========Added-Component==============
import Header from './components/header';
import Footer from './components/footer';

// =========Added-Pages==============
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Faq from './pages/faq';
import Contact from './pages/contact';

// =========Added-Router-Dom==============
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// =========Added-Bootstrap==============
import {Navbar,Nav,NavDropdown,} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <>
      <Router>
      <header className='site-header'>
      <div className='container'>
      <div className='row'>
    <div className='col-md-2 logo'><Header/></div>
      <div className='col-md-10 d-flex align-center justify-center'>
          <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li> <Link to="/about">About</Link>
                <ul className='sub-menu-link'>
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                  <li>Link 4</li>
                </ul>
              </li>
              <li> <Link to="/services">Services</Link> </li>
              <li> <Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Conact</Link></li>
             <li><Link to="#">Contact us</Link> </li>
            </ul>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>   
      </div>
      </div>
    </header>
      <Switch>
                <Route exact path="/">
                <Home/>
                </Route>
                <Route path="/about">
                  <About/>
                </Route>
                <Route path="/services">
                <Services/>
                </Route>
                <Route path="/faq">
                  <Faq/>
                </Route>
                <Route path="/contact">
                  <Contact/>
                </Route> 
              </Switch>
        </Router>
       <Footer/>
       </>
    </div>
  );
}

export default App;
