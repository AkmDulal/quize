import React, { useState } from 'react';
import Header from "../components/Header";

function BuyQuiz() {
    const [showModal, setShowModal] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const datalist = [
        {
            name: "Silver",
            quiz_number: 10,
            price: 10,
            id: 1,
        },
        {
            name: "Bronze",
            quiz_number: 25,
            price: 35,
            id: 2,
        },
        {
            name: "Golden",
            quiz_number: 50,
            price: 55,
            id: 3,
        },
        {
            name: "Platinum",
            quiz_number: 100,
            price: 75,
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
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mt-[25px] mb-[25px]">
                    {datalist?.map((item, i) => (
                        <div className='bg-[#fff] p-[20px] rounded-[5px]' key={i}>
                            <p className='bg-[#2222] p-[5px] text-[14px] font-[600]'> PACKAGE NAME: {item?.name} </p>
                            <p className='p-[5px] text-[14px] font-[600]'>  NO OF QUIZ: {item?.quiz_number} </p>
                            <p className='bg-[#2222] p-[5px] text-[14px] font-[600]'>  PRICE: {item?.price} </p>
                            <button className='bg-[#ef5073] w-full mt-[20px] font-[600]' onClick={openModal}> BUY NOW </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">Choose Payment Method</h2>
                        <label className="block mb-4">
                            <input type="radio" value="MFS" checked={selectedOption === 'MFS'} onChange={handleOptionChange} />
                            
                            <span className='ml-[10px] font-[600]'> MFS </span>
                        </label>
                        <label className="block mb-4">
                            <input type="radio" value="Telco" checked={selectedOption === 'Telco'} onChange={handleOptionChange} />
                            <span className='ml-[10px] font-[600]'> Telco </span>
                        </label>
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

export default BuyQuiz;
