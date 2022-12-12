import "./App.css";
import Home from "./pages/Home";
import Testing from "./pages/Testing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/testing:searchResult" element={<Testing/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
