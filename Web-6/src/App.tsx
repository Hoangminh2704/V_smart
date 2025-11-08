import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Production from "./Pages/Production/Production";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Cart from "./Pages/Cart/Cart";
import OrderPage from "./Pages/Order/Order";
import Promotion from "./Pages/Promotion/Promotion";
import { ChatProvider } from "./context/ChatContext";
import ChatButton from "./Component/ChatButton/ChatButton";
import ChatBox from "./Component/ChatBox/ChatBox";
import ChatList from "./Component/ChatList/ChatList";

function App() {
  return (
    <ChatProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/production" element={<Production />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/promotion" element={<Promotion />} />
        </Routes>
        <ChatButton />
        <ChatBox />
        <ChatList />
      </BrowserRouter>
    </ChatProvider>
  );
}
export default App;
