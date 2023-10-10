import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <> 
    <div className='p-1 flex flex-col justify-center items-center h-[60vh] w-[100%]'>
        <h1 className='font-bold text-[2.4em] text-[green] text-center animate__animated animate__headShake md:text-[3em]'>Build Walls Around Your Words</h1>
        <div className='text-[1.3em] '>
          <p className='font-poppins text-[1.2em] text-center md:text-[1.6em]'>This is a website that can help you to encode or decode your infromation</p>
        </div>
    </div>
    <h1 className='text-center pt-10 text-[1.3em] pb-4 font-bold'>Have a Try By Clicking Encrypt Button below</h1>
      <ul className='flex justify-evenly text-[blue] text-[1em] font-bold'>
        <li className='p-2 text-center btn font-poppins'><Link to="/encrypt">Encrypt</Link></li>
        <li className='p-2 text-center btn font-poppins'><Link to="/decrypt">Decrypt</Link></li>
      </ul>
    </>
  )
}

export default Home