import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EncryptResult from './EncryptResult'

const Encrypt = () => {
  const [input,setInput]=useState('');
  const [result,setResult]=useState([]);
  let alphabets ="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

  let changes={
    'a':'z',
    'b':'y',
    'c':'x',
    'd':'w',
    'e':'v',
    'f':'u',
    'g':'t',
    'h':'s',
    'i':'r',
    'j':'q',
    'k':'p',
    'l':'o',
    'm':'n',
    'n':'m',
    'o':'l',
    'p':'k',
    'q':'j',
    'r':'i',
    's':'h',
    't':'g',
    'u':'f',
    'v':'e',
    'w':'d',
    'x':'c',
    'y':'b',
    'z':'a',

    'A':'Z',
    'B':'Y',
    'C':'X',
    'D':'W',
    'E':'V',
    'F':'U',
    'G':'T',
    'H':'S',
    'I':'R',
    'J':'Q',
    'K':'P',
    'L':'O',
    'M':'N',
    'N':'M',
    'O':'L',
    'P':'K',
    'Q':'J',
    'R':'I',
    'S':'H',
    'T':'G',
    'U':'F',
    'V':'E',
    'W':'D',
    'X':'C',
    'Y':'B',
    'Z':'A',
  }

  function handleChange(event){
      setInput(event.target.value);
  }

  function handleClick(){
    setResult([]);
    let inputArray=input;
    inputArray=inputArray.split('');
    inputArray.map((letter)=>(
      setResult((prevValue)=>prevValue+(alphabets.includes(letter)?changes[letter]:letter))
    ))
  }

  return (
    <div className='p-1 flex flex-col justify-center items-center gap-5'>

      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='font-bold text-[2.4em] text-[green] text-center animate__animated animate__headShake md:text-[3em]'>Encryption</h1>
        <p className='font-inter text-[1.2em] text-center md:text-[1.6em]'>Enter your message in the box and click encrypt to get the encrypted message</p>
      </div>

      <div className='flex flex-col justify-center items-center gap-5'>
        <textarea onChange={handleChange} className='p-2 text-[1.2em] border-2 border-black bg-[#E8FFCE] rounded-[5px] text-center h-[40vh] w-[80vw] ' placeholder='Enter your message here...'></textarea>
        <button type='submit' onClick={()=>handleClick()} className='px-4 py-2 rounded-[10px] bg-[#0b5ed7] text-white font-bold font-poppins hover:bg-[#0d6fff]'>Encrypt</button>
      </div>

      <EncryptResult result={result}/>
      
        <ul className='boxTopShadow border-black flex justify-evenly w-[100%] text-[blue] text-[1em] font-bold'>
          <li className='p-2 text-center btn font-poppins'><Link to="/decrypt">Decrypt</Link></li>
          <li className='p-2 text-center btn font-poppins'><Link to="/">Home</Link></li>
        </ul>
    </div>
  )
}

export default Encrypt