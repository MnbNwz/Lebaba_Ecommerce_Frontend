
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'


function App() {
 

  return (
    <div
    //  className='h-screen flex justify-center items-center'
     >
     {/* <h1 className='text-2xl'>Lebaba Ecommerce Starter Files</h1> */}
     <Navbar/>
     <Outlet/>
    </div>
  )
}

export default App