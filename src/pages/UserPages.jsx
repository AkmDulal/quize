import React from 'react';
import { AiOutlineNotification } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa6";
import { ImStarEmpty } from "react-icons/im";
import { IoGameController } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Header from "../components/Header";
function UserPages() {
  return (
    <div className='container m-auto'> 
        <Header /> 
        <div className='w-[70%] m-auto'>
          
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-[25px] mb-[25px]">
                <div className="w-full flex flex-col items-center justify-center border-2 border-[#ef5073] py-[100px] rounded-[15px]">
                    <IoGameController className='text-[100px] text-[#ef5073]' />
                    <h3 className='text-[#fff] text-[24px]'> PLAY QUIZ </h3>
                </div>
                <Link to="/buy-quiz" className="w-full flex flex-col items-center justify-center border-2 border-[#ef5073] py-[100px] rounded-[15px] cursor-pointer">
                    <FaCartArrowDown  className='text-[100px] text-[#ef5073]' />
                    <h3 className='text-[#fff] text-[24px]'> BUY QUIZ </h3>
                </Link>
                <Link to="/score" className="w-full flex flex-col items-center justify-center border-2 border-[#ef5073] py-[100px] rounded-[15px]">
                    <ImStarEmpty  className='text-[100px] text-[#ef5073]' />
                    <h3 className='text-[#fff] text-[24px]'> SCORE </h3>
                </Link>
                <div className="w-full flex flex-col items-center justify-center border-2 border-[#ef5073] py-[100px] rounded-[15px]">
                    <AiOutlineNotification  className='text-[100px] text-[#ef5073]' />
                    <h3 className='text-[#fff] text-[24px]'> CAMPAIGN </h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserPages