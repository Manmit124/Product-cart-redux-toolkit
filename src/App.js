import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { Toast,Toaster } from "react-hot-toast";
import "./Style/App.scss"
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
function App() {
  return (
     <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Toaster/>
     </Router>

    );
}

export default App;
