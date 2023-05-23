import Navbar from './components/navbar';
import { Outlet } from 'react-router-dom';
import './styles/App.css'

function App(){

    
  return(
    <div className='app'>
      
      <Navbar />


      <Outlet />

    </div>
  )
}

export default App
