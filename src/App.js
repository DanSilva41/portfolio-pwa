import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Header } from "./components/Header";
import { Home } from "./views/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
