import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import About from './screens/About';
import Skills from './screens/Skills';
import Portfolio from './screens/Portfolio';
import PhotoAlbum from './screens/PhotoAlbum';
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom CSS files
import './styles.css';
import './components/Nav/GlobalNavbar.css';
import './components/Home/Introduction.css';

function App() {
  return (
    <>
      <Router>
			  <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/photos" element={<PhotoAlbum/>} />
			  </Routes>
		  </Router>
    </>
  );
}

export default App;