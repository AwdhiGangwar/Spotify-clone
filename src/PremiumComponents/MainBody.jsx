import React, { useState } from 'react';
import { premiumplans, premiumfeature, cards, questions, links } from '../assets/assets';

const MainBody = () => {
    const [arrowdown, setArrowdown] = useState(null); // Track the currently opened dropdown index

    const handleArrowClick = (index) => {
        // Toggle the dropdown - if the same question is clicked, close it, otherwise open the new one
        setArrowdown(arrowdown === index ? null : index);
    };

    return (
        <div className='flex flex-col justify-center bg-gradient-to-t from-neutral-800 to-neutral-900 '>
            <div className='ml-[300px]'>
                <div className='text-4xl w-[400px] font-bold pt-10 mt-10 mb-3'>
                    Listen without limits. Try 2 months of Premium for $199.
                </div>
                <div className='text-md text-neutral-300 mb-5'>only $199/month after. Cancel anytime</div>
                <div>
                    <button className='h-[50px] w-[300px] bg-red-300 rounded-3xl text-black font-bold hover:bg-red-200 mr-4'>
                        Try 2 months for $199
                    </button>
                    <button className='h-[50px] w-[200px] border rounded-3xl hover:border-neutral-700'>
                        View all plans
                    </button>
                </div>
                <div className='text-xs w-[380px] text-neutral-300 my-10'>
                    $199 for 2 months, then $199 per month after. Offer only available if you haven't tried premium before.{' '}
                    <button className='underline'>terms apply.</button>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center mt-10'>
                <div className='text-4xl font-bold pb-3'>Experience the difference</div>
                <div className='text-3xl text-center mb-3 pb-10 w-[800px]'>
                    Go Premium and enjoy full control of your listening. Cancel anytime.
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex border-b-2 pb-4 justify-between w-[570px]'>
                        <div className='px-10 font-semibold text-lg'>What you'll get</div>
                        <div className='px-10 font-semibold text-lg'>Spotify's Free plan</div>
                        <div className='px-10 font-semibold text-lg'>
                            <i className="fa-brands fa-spotify"></i> Spotify's Premium plans
                        </div>
                    </div>
                    {premiumplans.map((plans, index) => (
                        <div key={index} className='flex flex-col justify-between mb-4'>
                            <div className='flex hover:bg-neutral-800'>
                                <div className='border-b-2 py-5 pr-10 pl-10 w-[190px] text-sm under'>{plans.title}</div>
                                <div className='border-b-2 py-5 pr-10 pl-10 w-[190px] text-sm'>{plans.plan}</div>
                                <div className='border-b-2 py-5 pr-10 pl-10 w-[190px] text-lg hover:bg-neutral-600'>
                                    <i className="fa-solid fa-check"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='mt-10 pt-10 text-4xl font-bold'>Affordable plans for any situation</div>
                    <div className='mt-4 text-md w-[700px] text-center'>
                        Choose a Premium plan and listen to ad-free music without limits on your phone, speaker, and other devices.
                        Pay in various ways. Cancel anytime.
                    </div>
                    <div className=' mt-5 flex text-3xl'>
                        <button className='px-3'>
                            <i className="fa-brands fa-google-pay"></i>
                        </button>
                        <button className='px-3'>
                            <i className="fa-brands fa-paypal"></i>
                        </button>
                        <button className='px-3'>
                            <i className="fa-brands fa-apple-pay"></i>
                        </button>
                        <button className='px-3'>
                            <i className="fa-brands fa-amazon-pay"></i>
                        </button>
                    </div>
                    <div className='flex justify-evenly w-[700px] items-center mt-10 pt-10'>
                        <div className='text-3xl font-bold '>All Premium included</div>
                        <div>
                            {premiumfeature.map((feature, index) => (
                                <div key={index} className='flex'>
                                    <div className='px-3'><i className="fa-solid fa-check"></i></div>
                                    <div>{feature.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className='flex mt-14 pt-10 flex-wrap justify-center'>
                            {cards.map((card, index) => (
                                <div key={index} className='mx-10 my-5 w-[330px] bg-neutral-700 rounded-2xl'>
                                    <div className={`w-[150px] text-black ${card.color} rounded-r-md rounded-l-md h-[30px] px-2 py-1 mb-5`}>
                                        {card.price}
                                    </div>
                                    <div className='flex px-3 text-xl'>
                                        <div className='px-1'><i className="fa-brands fa-spotify"></i></div>
                                        <div className='font-bold'>{card.title}</div>
                                    </div>
                                    <div className={`font-bold text-4xl px-3 py-1 ${card['font-color']}`}>{card.plan}</div>
                                    <div className='font-bold px-3'>{card.price}</div>
                                    <div className='text-sm text-neutral-400 border-b-2 border-neutral-400 pb-4 mx-3'>{card.subPrice}</div>
                                    <div className='my-2 font-bold h-[80px]'>
                                        {card.features.map((feature, index) => (
                                            <ul key={index} className='px-3 list-disc list-inside text-sm'>
                                                <li>{feature}</li>
                                            </ul>
                                        ))}
                                    </div>
                                    <div className='flex flex-col'>
                                        <button className={`text-black h-[45px] font-bold my-2 rounded-3xl w-[310px] ${card.color} mx-2 ${card.hovercolor}`}>
                                            {card.button1}
                                        </button>
                                        <button className='border-2 h-[45px] font-bold my-2 rounded-3xl w-[310px] mx-2 border-neutral-500 hover:border-neutral-300'>
                                            {card.button2}
                                        </button>
                                    </div>
                                    <div className='px-2 text-xs mx-4 my-4 text-center text-neutral-400'>{card.disclaimer}</div>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className="text-4xl font-bold mt-10">Questions?</div>
                            <div className='py-2'>We've got answers.</div>
                            <div className='pb-10'>Find more answers on our <span className='underline hover:font-bold'>Support site.</span></div>
                            <div className='py-10 w-[700px] text-xl flex flex-col'>
                                {questions.map((ques, index) => (
                                    <div key={ques.id} className='border-b-2 border-neutral-700 py-4 hover:bg-neutral-700 flex justify-between px-4'>
                                        <div className={`text-neutral-200 ${arrowdown === index ? "underline h-[200px]" : ""}`}>{ques.question}</div>
                                        <button className='font-sm ' onClick={() => handleArrowClick(index)}>
                                            {arrowdown === index ? (
                                                <div className='-translate-y-8 mb-10 pb-14'><i className='fa-solid fa-arrow-up'></i></div>
                                            ) : (
                                                <i className='fa-solid fa-arrow-down'></i>
                                            )}
                                        </button>
                                        {arrowdown === index && (
                                            <div className='absolute mt-12'>
                                                <ul className='text-sm '>
                                                    {ques.feature.map((features, featureIndex) => (
                                                        <li key={featureIndex} className='w-[680px]  text-md py-2'>{features}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className='flex justify-evenly mx-10 w-full mt-10 mb-10'>
                                <div className='flex text 2xl'><div className='px-1 text-3xl'><i class="fa-brands fa-spotify"></i> </div><p className='text-2xl font-semibold'>Spotify</p></div>
                                <div className='flex'>{links.map((link) => (
                                    <div className='flex flex-col w-[200px]'><div className='text-xl font-bold pb-3 text-neutral-400'>{link.title}</div>
                                        <div>{link.feature.map((features) => (
                                            <div className='flex flex-col py-1 text-lg hover:text-green-700'><a href="">{features}</a></div>
                                        ))}</div></div>
                                ))}</div>
                                <div className='flex'>
                                    <a href='' className='h-10 w-10 bg-neutral-600 flex justify-center items-center mx-2 rounded-full hover:bg-neutral-500'><i class="fa-brands fa-instagram"></i></a>
                                    <a href='' className='h-10 w-10 bg-neutral-600 flex justify-center items-center mx-2 rounded-full hover:bg-neutral-500'><i class="fa-brands fa-twitter"></i></a>
                                    <a href='' className='h-10 w-10 bg-neutral-600 flex justify-center items-center mx-2 rounded-full hover:bg-neutral-500'><i class="fa-brands fa-facebook"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBody;
