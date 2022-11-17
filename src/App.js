import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";
import Footer from "./Components/Footer/Footer";
import LiveAuction from "./Pages/LiveAuction/LiveAuction";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auction" element={<LiveAuction />} />
          <Route path="/auction/item/:title" element={<ItemDetail />} />
        </Routes>
        <Footer />
        <div className="box3">
          Copyright ©️ 2022 CoLeDev, All right reserved.
        </div>
      </Router>
    </div>
  );
}

export default App;
