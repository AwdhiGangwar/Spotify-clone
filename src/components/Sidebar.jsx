import React, { useState } from 'react'

const Sidebar = () => {

  const [hoverplus, sethoverplus] = useState(false);
  const [hoverplaylist, sethoverplaylist] = useState(false);
  const [clickplus, setclickplus] = useState(false);
  const [hoverCookies, setCookies] = useState(false);
  const [hoverplaylistbutton,sethoverplaylistbutton]=useState(false);
  const [hoverbrowserbutton,sethoverbrowserbutton]=useState(false);
  const [hoverlangbutton,sethoverlangbutton]=useState(false);

  const plusOver = () => {
    sethoverplus(true);
  }
  const plusOut = () => {
    sethoverplus(false);
  }
  const handleplusclick = () => {
    setclickplus(!clickplus)
  }

  const handlenewplaylistover = () => {
    sethoverplaylist(true);
  }

  const handlenewplaylistout = () => {
    sethoverplaylist(false);
  }
  const handlecookiesover = () => {
    setCookies(true);
  }

  const handlecookiesout = () => {
    setCookies(false);
  }

  const handleplaylistover = () => {
    sethoverplaylistbutton(true);
  }
  const handleplaylistout = () => {
    sethoverplaylistbutton(false);
  }
  const handlebrowserover = () => {
    sethoverbrowserbutton(true);
  }
  const handlebrowseout = () => {
    sethoverbrowserbutton(false);
  }
  const handlelangover = () => {
    sethoverlangbutton(true);
  }
  const handlelangout = () => {
    sethoverlangbutton(false);
  }
  return (

    // your library and creating playlist with "+" option
    <div className='bg-neutral-900 flex w-[29%] h-full  flex-col rounded-lg mx-2' >
      <div className='flex my-4 mx-4 text-lg font-semibold justify-between'><div>YourLibrary</div>
        <div className='flex flex-col items-center'><button onMouseOut={plusOut} onMouseOver={plusOver} onClick={handleplusclick} className={` text-2xl absolute mr-4 ${hoverplus ? 'bg-neutral-800 rounded-full px-2' : ""}`}><i class="fa-solid fa-plus"></i></button></div> {hoverplus && <div className='absolute mt-10 ml-[330px] py-1 px-4 rounded-lg text-sm bg-neutral-800 border-2'>Create Playlist or Folder</div>} </div>
      {clickplus && (<div className='absolute mt-14 ml-[330px]  rounded-lg text-sm flex justify-evenly items-center w-[200px]'><button onMouseOver={handlenewplaylistover} onMouseOut={handlenewplaylistout} className={` bg-neutral-800  py-4 px-5 rounded-md ${hoverplaylist ? " font-bold bg-neutral-600 px-2 py-2" : "bg-neutral-800 border-3"}`}><i class="fa-solid fa-music"></i> Create a new playlist</button></div>)}
      <div>

        {/* create and browsing playlist */}
        <div className='h-[300px] overflow-hidden hover:overflow-y-auto'>
        <div className=' mx-2 rounded-md h-full flex flex-col'>
          <div className=' bg-neutral-800 mx-2 my-2 px-4 py-4 rounded-xl'><div className='font-semibold text-xl'>Create your first playlist</div>
            <div className='text-sm my-2'>It's easy, we'll help you</div>
            <button onMouseOver={handleplaylistover} onMouseOut={handleplaylistout} className={`bg-slate-100 px-3 text-sm mt-3 text-neutral-950 py-2 rounded-3xl font-semibold ${hoverplaylistbutton ? "bg-neutral-300" : "bg-slate-100"}`}>Create playlist</button>
          </div>
          <div className=' bg-neutral-800 mx-2 my-4 px-4 py-4 rounded-xl'><div className='font-semibold text-xl'>Let's find some podcasts to follow</div>
            <div className='text-sm my-2'>We'll keep you updated on new episodes</div>
            <button onMouseOver={handlebrowserover} onMouseOut={handlebrowseout} className={`bg-slate-100 px-3 text-sm mt-3 text-neutral-950 py-2 rounded-3xl font-semibold ${hoverbrowserbutton ? "bg-neutral-300" : "bg-slate-100 font-semibold"}`}>Browse podcasts</button>
          </div>
        </div></div>
        </div>

        {/* policies and securities */}
      <div>
        <div className='mx-5 my-10 flex flex-wrap gap-5 text-neutral-300 text-xs'><a href="">Legal</a><a href="">Safety&PrivacyCenter</a><a href="">PrivacyPolicy</a><a href="">Cookies</a><a href="">AboutAds</a><a href="">Accessibility</a><a onMouseOver={handlecookiesover} onMouseOut={handlecookiesout} className={`font-semibold  ${hoverCookies ? "underline text-neutral-400" : "font-semibold"}`} href="">Cookies</a></div>
      </div>
      <div className='mx-3 mb-10 py-1 px-4 text-xs font-semibold '><button onMouseOver={handlelangover} onMouseOut={handlelangout} className={`border-2 border-neutral-600 py-2 px-4 rounded-3xl ${hoverlangbutton ? " border-neutral-50" : " border-neutral-600"}`}><i class="fa-solid fa-globe"></i> English</button></div>
    </div>
  )
}

export default Sidebar
