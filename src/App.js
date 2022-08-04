import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./screens/Home";
import {About} from './screens/About';
import {Skills} from './screens/Skills';
import {Portfolio} from './screens/Portfolio';
import {PhotoAlbum} from './screens/PhotoAlbum';
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
          <Route path="/" element={<Home active='/' />}/>
          <Route path="/about" element={<About active='/about' />} />
          <Route path="/skills" element={<Skills active='/skills' />} />
          <Route path="/portfolio" element={<Portfolio active='/portfolio' />} />
          <Route path="/photos" element={<PhotoAlbum active='/photos' />} />
			  </Routes>
		  </Router>
    </>
  );
}

export default App;