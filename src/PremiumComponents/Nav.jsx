import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Nav = () => {
    const [isLangVisible, setLangVisible] = useState(true);
    const [hoverPremium, setPremium] = useState(false);
    const navigate = useNavigate();

    const handleCross = () => {
        setLangVisible(false);
    };

    const handlelogin = () => {
        navigate("/Login");
    }

    const handlelogo = () => {
        navigate("/");
    }

    return (
        <div>
            {/* Top Blue Bar: only show if visible */}
            {isLangVisible && (
                <div className='h-[60px] flex justify-between items-center px-10 bg-blue-500 '>
                    <button className='underline text-neutral-200'>Language</button>
                    <button onClick={handleCross}>
                        <i className="fa-solid fa-x text-white text-xl"></i>
                    </button>
                </div>
            )}

            {/* Always visible Black Navbar */}
            <div className='flex justify-evenly items-center h-[70px] bg-neutral-900'>
                <div className="flex font-bold text-md">
                    <button onClick={handlelogo} className='mx-1 text-2xl flex translate-y-1'>
                        <div className='-translate-y-1 mx-1 text-3xl'>
                            <i className="fa-brands fa-spotify"></i>
                        </div>
                        Spotify
                    </button>
                </div>
                <div className="flex font-bold justify-evenly text-md ">
                    {/* Premium with hover dropdown */}
                    <div
                        onMouseEnter={() => setPremium(true)}
                        onMouseLeave={() => setPremium(false)}
                        className="relative"
                    >
                        <div className='px-4 hover:text-green-700 text-neutral-200 translate-y-1'>Premium</div>

                        {/* Show dropdown if hovering */}
                        {hoverPremium && (
                            <div className='flex flex-col w-[300px] gap-4 py-3 absolute top-[100%] mt-2 bg-neutral-800'>
                                <div className='flex flex-col px-4 hover:bg-neutral-900 py-4 cursor-pointer'>
                                    <div className='text-lg text-white'>Premium Individual</div>
                                    <div className='text-xs text-neutral-500'>1 account - for one person.</div>
                                </div>
                                <div className='flex flex-col px-4  my-1 py-4 hover:bg-neutral-900 cursor-pointer'>
                                    <div className='text-white'>Premium Duo</div>
                                    <div className='text-xs text-neutral-500'>2 accounts - for couple under one roof</div>
                                </div>
                                <div className='flex flex-col px-4  my-1 py-4 hover:bg-neutral-900 cursor-pointer'>
                                    <div className='text-white'>Premium Family</div>
                                    <div className='text-xs text-neutral-500'>6 accounts - for family members under one roof</div>
                                </div>
                                <div className='flex flex-col px-4  my-1 py-4 hover:bg-neutral-900 cursor-pointer'>
                                    <div className='text-white'>Premium Student</div>
                                    <div className='text-xs text-neutral-500'>1 account - Discount for eligible students</div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Other Nav Items */}
                    <button className='px-4 hover:text-green-700 text-neutral-200'>Support</button>
                    <button className='px-4 hover:text-green-700 text-neutral-200'>Download</button>
                    <div className='px-4 text-2xl text-neutral-200'>|</div>
                    <button className='px-4 hover:text-green-700 text-neutral-400'>Sign up</button>
                    <button onClick={handlelogin} className='px-4 hover:text-green-700 text-neutral-400'>Log in</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;
