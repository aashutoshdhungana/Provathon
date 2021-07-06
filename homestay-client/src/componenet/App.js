import React from "react";
import Register from "./Register";
import Login from "./Login";
import Hsregister from "./Hsregister";
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      {/* <Register /> */}
      {/* <Login /> */}
      <Navbar />
      <Hsregister/>
    </div>
  );
}
export default App;
