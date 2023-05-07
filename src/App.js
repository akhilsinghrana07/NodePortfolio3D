import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Certificate from './components/Certificate/Certificate';
import Footer from './components/Footer/Footer';
function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skill' element={<Skill/>}/>
      <Route path='/certificate' element={<Certificate/>}/>
    </Routes>
    <Footer />
  </Router>
}

export default App;
