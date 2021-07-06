import React from "react";
import Register from "./Register";
import Login from "./Login";
import Hsregister from "./Hsregister";
import Navbar from './Navbar';

import Rating from './Rating';
import Carousel from './Carousel';
import About from './About';
import Footer from './Footer';
function App() {
  return (
    <div>
      {/* <Register /> */}
      {/* <Login /> */}
      <Navbar />
      <Carousel />
      <About />
      <Rating />
      <Footer /> 

    </div>
  );
}
export default App;
