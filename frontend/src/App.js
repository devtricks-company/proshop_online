import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Homescreen from "./screens/Homescreen";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import ProudctScreen from "./screens/ProudctScreen";
function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Homescreen/>} />
          <Route path="/product/:id" element={<ProudctScreen/>} />
        </Routes>
        
      <Footer />
    </BrowserRouter>
  );
}

export default App;
