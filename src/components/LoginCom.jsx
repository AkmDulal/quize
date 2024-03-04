import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.jpg";
function LoginCom() {

    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');
  
    const handlePlayClick = () => {
      setShowInput(true);
    };
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = () => {
      // Handle form submission or any other logic here
      console.log("Submitted value:", inputValue);
    };

  return (
    <div className=" w-[500px] flex-col h-[500px] cursor-pointer border-4 border-[#f6bc46] rounded-full bg-[#262d4a] absolute z-30 flex justify-center items-center">
      {!showInput ? (
        <>
          <img src={Logo} alt="" />
          <button
            className="bg-[#f15175] px-[50px] font-[600] mt-[15px]"
            onClick={handlePlayClick}
          >
            Play
          </button>
        </>
      ) : (
        <form className='flex-col flex justify-center items-center' onSubmit={handleSubmit}>
             <img className='w-[80%]' src={Logo} alt="" />
             <p className='text-[#fff] font-[600]'> Please enter your mobile number </p>
          <input
            type="text"
            placeholder='01XXXXXXXXX'
            value={inputValue}
            onChange={handleInputChange}
            className="bg-[#fff] px-3 py-2 rounded-md border border-gray-400 mr-2 w-full mt-[10px]"
          />
          <Link to="/user-pages"
            type="submit"
            className="bg-[#f15175] mt-[20px] px-3 py-2 rounded-md text-white font-semibold"
          >
            Submit
          </Link>
        </form>
      )}
    </div>
  );
}

export default LoginCom;
