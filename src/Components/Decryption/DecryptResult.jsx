import React, { useState } from 'react'

const DecryptResult = ({outResult}) => {
  const [copied, setCopied]=useState(false);

  async function handleCopy(){
    try{
      await navigator.clipboard.writeText(outResult);
      setCopied(true);
      setTimeout(()=>{setCopied(false)},2000);
    }
    catch(error){
        console.error("Failed to Copy:",error);
    }
  }
  return (
    <>
     <div className='flex flex-col justify-center items-center'>
        <label className='font-poppins text-[1.3em] font-bold text-[#DA0C81]'>Your Decrypted Message:</label>
        <p className='p-2 text-center bg-[#393E46] text-white rounded-[10px] text-[1.2em] h-[40vh] w-[80vw] overflow-auto'>{outResult}</p>
        <button onClick={()=>handleCopy()} className="mt-4 px-4 py-2 rounded-[10px] text-white font-bold font-poppins" style={copied?{background:'yellowgreen'}:{background:'green'}}>{copied ? "Copied" : "Copy To Clipboard!"}</button>
      </div>
    </>
  )
}

export default DecryptResult