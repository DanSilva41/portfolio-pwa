import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Header } from "./components/Header";
import { Home } from "./views/Home";
import { About } from "./views/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
