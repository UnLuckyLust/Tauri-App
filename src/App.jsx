import { Route, Routes, BrowserRouter as Router, Navigate, Link } from "react-router-dom";
import { About, Home, NavBar, StarsCanvas, Footer } from './components';

const HomePage = () => {
  return (
    <>
    <div className="relative z-0 bg-primary overflow-hidden">
      <div>
        <NavBar clearBG={true} useLinks={false} />
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
            <NavBar clearBG={true} useLinks={false} />
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


