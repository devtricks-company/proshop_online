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
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Homescreen/>} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path="/product/:id" element={<ProudctScreen/>} />
          <Route path="/cart">
            <Route path=":id" element={<CartScreen />} />
            <Route path="" element={<CartScreen/>} />
          </Route>
        </Routes>
        
      <Footer />
    </BrowserRouter>
  );
}

export default App;
