import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Testing from "./pages/Testing";
import MovieProfile from "./pages/MovieProfile";
import Results from "./pages/Results";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/testing:searchResult" element={<Testing />}></Route>
          <Route path="/profile:id" element={<MovieProfile />}></Route>
          <Route path="/results:searchResult" element={<Results />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
