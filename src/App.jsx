import { Route, Routes, BrowserRouter as Router, Navigate, Link } from "react-router-dom";
import { About, Home, NavBar, StarsCanvas, Footer } from './components';
import { SiteName, Organization, navLinks } from "./constants";

const HomePage = () => {
  return (
    <>
    <div className="relative z-0 bg-primary overflow-hidden">
      <div>
        <NavBar useLinks={false} />
        <div className="relative z-0">
          <Home />
          <StarsCanvas />
          <Footer clearBG={true} />
        </div>
      </div>
    </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="Home" element={
          <HomePage />
        } />
        <Route path="/" element={
          <Navigate to="Home" />
        } />
        <Route path="*" element={
          <Navigate to="Home" />
        } />

        <Route path="About" element={
          <div className="relative z-0 bg-primary overflow-hidden">
            <NavBar useLinks={false} />
            <About />
            <StarsCanvas />
            <Footer clearBG={true} />
          </div>
        } />

      </Routes>
    </Router>
  )
}

export default App


