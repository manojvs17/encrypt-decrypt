import './App.css'
import Home from './Components/Home/Home';
import Encrypt from './Components/Encryption/Encrypt';
import Decrypt from './Components/Decryption/Decrypt';
import { Link, Route, Routes } from 'react-router-dom';
import 'animate.css';

function App() {

  return (
    <div>
      <ul className='flex justify-evenly  p-4 text-[1.3em] font-bold text-blue-700 shadow-lg md:shadow-xl'>
        <li className='hover:underline hover:underline-offset-[7px] hover:text-red-600'><Link to="/">Home</Link></li>
        <li className='hover:underline hover:underline-offset-[7px] hover:text-red-600'><Link to="/encrypt">Encrypt</Link></li>
        <li className='hover:underline hover:underline-offset-[7px] hover:text-red-600'><Link to="/decrypt">Decrypt</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/encrypt' element={<Encrypt />} />
        <Route path='/decrypt' element={<Decrypt />} />
      </Routes>
    </div>
  )
}

export default App