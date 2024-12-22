import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/navbar/Footer";

function App() {
  return (
    <div
    //  className='h-screen flex justify-center items-center'
    >
      {/* <h1 className='text-2xl'>Lebaba Ecommerce Starter Files</h1> */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
