import './App.css';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Landing2 from './components/Landing2';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Landing2></Landing2>
      <Router>
        <Routes>
          {/* <Route
            exact
            path="/login"
            element={<Login setLoginSuccess={setLoginSuccess}></Login>}
          /> */}
        </Routes>
      </Router>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
