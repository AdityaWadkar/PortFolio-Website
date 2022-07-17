import Navbar from './PortfolioContainer/Navbar/Navbar';
import Home from './PortfolioContainer/Home/Home';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Resume from './PortfolioContainer/Resume/Resume';
import Testimonial from './PortfolioContainer/Testimonial/Testimonial';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe'
import Footer from './PortfolioContainer/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        
        <Home/>
        <AboutMe/>
        <Resume/>
        <Testimonial/>
        <ContactMe/>
        <Footer/>
      
    </div>
  );
}

export default App;

