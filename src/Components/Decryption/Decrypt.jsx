import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DecryptResult from './DecryptResult';


const Decrypt = () => {
  const [output,setOutput]=useState('');
  const [outResult,setOutResult]=useState([]);
  let outAlphabets="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

  let outChanges={
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

  function handleOutChange(event){
      setOutput(event.target.value);
  }

  function handleOutClick(){
    setOutResult([]);
    let outputArray=output;
    outputArray=outputArray.split('');
    outputArray.map((letter)=>(
      setOutResult((prevValue)=>prevValue+(outAlphabets.includes(letter)?outChanges[letter]:letter))
    ))
  }
  return (
    <div className='p-1 flex flex-col justify-center items-center gap-5'>

      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='font-bold font-inter text-[2.4em] text-[green] text-center animate__animated animate__headShake md:text-[3em]'>Decryption</h1>
        <p className='font-inter text-[1.2em] text-center md:text-[1.6em]'>Paste the Encrypted message in the box and click decrypt to get the decrypted message</p>
      </div>

      <div className='flex flex-col justify-center items-center gap-5'>
        <textarea onChange={handleOutChange} className='p-2 text-[1.2em] border-2 border-black bg-[#FAF1E4] rounded-[5px] text-center h-[40vh] w-[80vw] ' placeholder='Paste encrypted message here...'></textarea>
        <button type='submit' onClick={()=>handleOutClick()} className='px-4 py-2 rounded-[10px] bg-[#0b5ed7] text-white font-bold font-poppins hover:bg-[#0d6fff]'>Decrypt</button>
      </div>

      <DecryptResult outResult={outResult}/>
      
      <ul className='flex justify-evenly w-[100%] text-[blue] text-[1em] font-bold'>
          <li className='p-2 text-center btn font-poppins'><Link to="/encrypt">Encrypt</Link></li>
          <li className='p-2 text-center btn font-poppins'><Link to="/">Home</Link></li>
        </ul>
    </div>
  )
}

export default Decrypt