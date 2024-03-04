import React, { useState } from 'react';
import { RiDatabase2Line } from "react-icons/ri";
import Header from "../components/Header";
function Score() {
    const [showModal, setShowModal] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const datalist = [
        {
            name: "60Tk Talk Time + 1GB Data (7 Day)",
            price: 1000,
            id: 1,
        },
        {
            name: "Speakers",
            price: 1000,
            id: 2,
        },
        {
            name: "Gif Voucher / Amusement Pass",
            price: 1000,
            id: 3,
        },
        {
            name: "Gift Voucher (Arong)",
            price: 1000,
            id: 4,
        },
    ];

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleBuyNow = () => {
        // Handle buy action based on the selected option
        console.log("Selected option:", selectedOption);
        // You can add further logic here, like payment processing, etc.
    };

    return (
        <div> 
            <Header />  
            <div className='container m-auto'> 
            <div className="grid grid-cols-1 gap-4 mt-[25px] mb-[25px]">
                <div className='flex flex-col items-center justify-center w-full'>
                    <h3 className='text-[24px] font-[600] text-[#fff]'>Your total point is 20 </h3>
                    <p className='text-[16px] text-[#fff]'> You can buy any giftPack by using your point </p>
                    <div className='border border-[#fff] mt-[20px] px-[30px] py-[10px] rounded-[10px] text-[#fff] cursor-pointer'> Gift pack </div>
                </div>
            </div>

                <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mt-[25px] mb-[25px]">
                    {datalist?.map((item, i) => (
                        <div className='bg-[#fff] p-[20px] rounded-[5px] flex flex-col items-center justify-center' key={i}>
                            <p className='p-[5px] text-[14px] font-[600]'>  {item?.name} </p>
                            <p className='p-[5px] text-[20px] font-[600] border-b border-[#222] flex'> <RiDatabase2Line className='text-[30px] mr-[5px]' /> {item?.price} </p>
                            <button className='bg-[#ef5073] w-full mt-[20px] font-[600]' onClick={openModal}> ORDER NOW </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">Hay !</h2>
                        <p> Are you sure? </p>
                        
                        <div className="flex justify-end mt-[15px]">
                            <button className="bg-gray-300 px-4 py-2 rounded-md mr-2" onClick={closeModal}>CANCEL</button>
                            <button className="bg-[#ef5073] text-white px-4 py-2 rounded-md " onClick={handleBuyNow}>CONFIRM</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Score;
