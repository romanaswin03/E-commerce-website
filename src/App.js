import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Collection from './components/Collection';
import Journal from './components/Journal';
import Instagram from './components/Instagram';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className='lg:px-20 pl-4'>
        <Header />
        <Home />
        <Collection />
        <Journal />
        <Instagram />
        <Testimonials />
      </div>
    <Footer />
    </div>
    
    
  );
}

export default App;
