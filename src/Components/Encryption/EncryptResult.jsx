import React, { useState } from 'react'

const EncryptResult = ({result}) => {
  const [EncCopied,setEncCopied]=useState(false);

  async function handleEncCopy(){
    try{
      await navigator.clipboard.writeText(result);
      setEncCopied(true);
      setTimeout(()=>{setEncCopied(false)},2000)
    }
    catch(error){
      console.log("Failed to copy:",error);
    }
  }
  return (
    <>
     <div className='flex flex-col justify-center items-center'>
        <label className='font-poppins text-[1.3em] font-bold text-[#DA0C81]'>Your Encrypted Message:</label>
        <p className='p-2 text-center bg-[#393E46] text-white rounded-[10px] text-[1.2em] h-[40vh] w-[80vw] overflow-auto'>{result}</p>
        <button onClick={()=>handleEncCopy()} className="mt-4 px-4 py-2 rounded-[10px] text-white font-bold font-poppins" style={EncCopied?{background:'yellowgreen'}:{background:'green'}}>{EncCopied ? "Copied": "Copy To Clipboard!"}</button>
      </div>
    </>
  )
}

export default EncryptResult