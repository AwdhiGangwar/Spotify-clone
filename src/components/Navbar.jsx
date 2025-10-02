import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const [hoverSpotify, sethoverSpotify] = useState(false);
  const [hoverHome, sethoverHome] = useState(false);
  const [hoverBrowser, sethoverbrowser] = useState(false);
  const [hoverPremium, sethoverPremium] = useState(false);
  const [hoverSupport, sethoverSupport] = useState(false);
  const [hoverDownload, sethoverDownload] = useState(false);
  const [hoverInstall, sethoverInstall] = useState(false);
  const [hoverSignup, sethoverSignup] = useState(false);
  const [hoverLogin, sethoverLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Login logic yahan likhna (validate user)
    navigate("/Login"); // Redirect to /home
  };

  const handlePremium = () => {
    // Login logic yahan likhna (validate user)
    navigate("/Premium"); // Redirect to /home
  };

  const spotifyOver = () => {
    console.log('Hovered Over');
    sethoverSpotify(true);
  };

  const spotifyOut = () => {
    console.log('Hovered Out');
    sethoverSpotify(false);
  };

  const HomeOver = () => {
    console.log('Hovered Over');
    sethoverHome(true);
  };

  const HomeOut = () => {
    console.log('Hovered Out');
    sethoverHome(false);
  };

  const BrowserOver = () => {
    console.log('Hovered Over');
    sethoverbrowser(true);
  };

  const BrowserOut = () => {
    console.log('Hovered Out');
    sethoverbrowser(false);
  };

  const PremiumOver = () => {
    console.log('Hovered Over');
    sethoverPremium(true);
  };

  const PremiumOut = () => {
    console.log('Hovered Out');
    sethoverPremium(false);
  };

  const SupportOver = () => {
    console.log('Hovered Over');
    sethoverSupport(true);
  };

  const SupportOut = () => {
    console.log('Hovered Out');
    sethoverSupport(false);
  };

  const DownloadOver = () => {
    console.log('Hovered Over');
    sethoverDownload(true);
  };

  const DownloadOut = () => {
    console.log('Hovered Out');
    sethoverDownload(false);
  };

  const InstallOver = () => {
    console.log('Hovered Over');
    sethoverInstall(true);
  };

  const InstallOut = () => {
    console.log('Hovered Out');
    sethoverInstall(false);
  };

  const SignupOver = () => {
    console.log('Hovered Over');
    sethoverSignup(true);
  };

  const SignupOut = () => {
    console.log('Hovered Out');
    sethoverSignup(false);
  };

  const LoginOver = () => {
    console.log('Hovered Over');
    sethoverLogin(true);
  };

  const LoginOut = () => {
    console.log('Hovered Out');
    sethoverLogin(false);
  };

  return (
    <div className='flex justify-between items-center h-[65px] bg-neutral-900 mb-2 rounded-md'>
      <div className='flex justify-between items-center'>
        <div onMouseOver={spotifyOver} onMouseOut={spotifyOut} className={`mr-3 flex justify-center items-center text-4xl rounded-full ml-8 ${hoverSpotify ? 'bg-neutral-700 h-11 w-11' : 'bg-neutral-950 h-10 w-10'}`} ><i class="fa-brands fa-spotify"></i></div>
        <div className='flex flex-col'> <a onMouseOver={HomeOver} onMouseOut={HomeOut} href='#' className={`flex justify-center items-center text-2xl rounded-full mx-2 cursor-pointer ${hoverHome ? 'bg-neutral-700 h-11 w-11 ' : 'bg-neutral-800 h-12 w-12'}`}><i class="fa-solid fa-house"></i> </a> {hoverHome && <div className="text-md mt-14 ml-2 bg-neutral-950 px-1 py-1 rounded-lg absolute">Home</div>}</div>

        <div className='bg-neutral-800 rounded-3xl pl-3'><a className='pl-4' href=""><i class="fa-solid fa-magnifying-glass"></i></a><input className='h-12 bg-neutral-800 w-[340px] pl-5 rounded-3xl' type="text" placeholder='What do you want to play?' /><a onMouseOver={BrowserOver} onMouseOut={BrowserOut} href='' className={`border-l-2 px-3 mx-2 cursor-pointer text-xl text-neutral-400 ${hoverBrowser ? 'text-neutral-200' : 'text-neutral-400'}`}> <i class="fa-solid fa-window-restore"></i> </a></div></div>
      <div className='flex justify-between items-center mx-2'>
        <a onMouseOver={PremiumOver} onMouseOut={PremiumOut} onClick={handlePremium} href="" className={`cursor-pointer text-neutral-500 text-md px-1 ${hoverPremium ? 'text-lg text-neutral-200' : 'text-md'} `}>Premium</a>
        <a onMouseOver={SupportOver} onMouseOut={SupportOut} href="" className={`cursor-pointer text-neutral-500 text-md px-1 ${hoverSupport ? 'text-lg text-neutral-200' : 'text-md'} `}>Support</a>
        <a onMouseOver={DownloadOver} onMouseOut={DownloadOut} href="" className={`cursor-pointer  text-neutral-500 text-md px-1 pr-7 border-r-2 ${hoverDownload ? 'text-lg text-neutral-200' : 'text-md'} `}>Download</a>
        <div onMouseOver={InstallOver} onMouseOut={InstallOut} className='mx-8 text-sm  text-neutral-500 '><i class="fa-solid fa-arrow-down"></i><a className={`px-2 ${hoverInstall ? 'text-lg' : 'text-md'}`}>Install App</a></div>
        <div onMouseOver={SignupOver} onMouseOut={SignupOut} className={`px-5  text-neutral-500  ${hoverSignup ? 'text-lg text-neutral-200' : 'text-md'}`}>Sign up</div>
        <button onMouseOver={LoginOver} onMouseOut={LoginOut} onClick={handleLogin} className={`bg-slate-100 text-neutral-950 px-7 py-3 rounded-3xl font-semibold ${hoverLogin ? 'text-lg' : 'text-md'}`}>Log in</button>
      </div>
    </div>

  )
}

export default Navbar
