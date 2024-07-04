import Navbar from './Navbar/navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import shop from './pages/shop.js';
import Helmets from './pages/helmets.js';
import Accessories from './pages/accessories.js';
import Spares from './pages/spares.js';
import Womens from './pages/womens.js';
import Gears from './pages/gears.js';
import Shoes from './pages/shoes.js';



function App() {
  return (
    <Router>
    <Navbar />
    <main className="main-content">
      <Routes>
      <Route path="/shop" element={<shop />} />
        <Route path="/helmets" element={<Helmets />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/spares" element={<Spares />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/gears" element={<Gears />} />
        <Route path="/shoes" element={<Shoes />} />
      </Routes>
    </main>
  </Router>
  );
}

export default App;
