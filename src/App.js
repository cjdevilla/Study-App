import Home from "./Home"
import About from "./About"

import {
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

    </div>
  );
}



export default App;