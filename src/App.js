import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';

import './App.css';

import Header from './Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Sign from './components/Sign';
import BookTour from './components/BookTour';
import Footer from './components/Footer';
import Allactivities from './components/Allactivities';

function App() {
  return (
    <div className="App">
       <Router>
        <Header />
        <main>
          <section>

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sign" element={<Sign />} />
              <Route path="/allactivities" element={<Allactivities />} />
              <Route path="/booktour" element={<BookTour />} />
            </Routes>
          </section>
        </main>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
