import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Service from './Components/Service';
import Exp from './Components/Exp';
import Project from './Components/Projects';
import Testimon from './Components/Testimon';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Service/>
      <Exp/>
      <Project/>
      <Testimon/>
      <Contact/>
      <Footer/>


    </div>
  );
}

export default App;
