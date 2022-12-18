import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";
import Footer from "./Components/Footer/Footer";
import LiveAuction from "./Pages/LiveAuction/LiveAuction";
import CreateNft from "./Pages/CreateNft/CreateNft";
import SuccessPage from "./Components/Success/SuccessPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auction" element={<LiveAuction />} />
          <Route path="/auction/item/:title" element={<ItemDetail />} />
          <Route path="/createnft" element={<CreateNft />} />
          <Route path="/success" element={<SuccessPage />} />
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
