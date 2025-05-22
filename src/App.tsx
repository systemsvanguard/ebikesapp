import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import BikeDetail from "./components/BikeDetail";
import EditBike from "./pages/EditBike";  
import CreateBike from "./pages/CreateBike"; 
// reusable components 
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
// main pages 
import About from './pages/About';
import Contact from './pages/Contact';
// Ensure to keep this as the last link.  404 Not Found Page. I opted NOT to use Switch.
import PageNotFound from './pages/PageNotFound';

const App = () => (
  <Router>
    <NavBar />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<BikeDetail />} />
      <Route path="/admin" element={<List />} />
      <Route path="/edit/:id" element={<EditBike />} />
      <Route path="/create" element={<CreateBike />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* add fallback 'Catch All' 404 Not Found route below here.  */}
      <Route path="*" element={<PageNotFound />} /> 

    </Routes>
    <Footer />
  </Router>
);

export default App;
