import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Directory from "./pages/Directory";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/directory" component={Directory} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
