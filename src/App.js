import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
