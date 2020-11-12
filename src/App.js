import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
// import Main from './components/Main';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/" component={Contact} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
