import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Testing from "./pages/Testing";
import MovieProfile from "./pages/MovieProfile";
import Results from "./pages/Results";
import Credits from "./pages/Credits";


function App() {
  return (
    <Router forceRefresh={true}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/testing:searchResult" element={<Testing />}></Route>
          <Route path="/profile:id" element={<MovieProfile />}></Route>
          <Route path="/results:searchResult" element={<Results />}></Route>
          <Route path="/profile:id/credits" element={<Credits />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
