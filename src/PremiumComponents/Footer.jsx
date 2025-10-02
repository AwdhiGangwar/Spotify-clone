import React, { useState } from 'react'

const Footer = () => {
    const [footer, setfooter] = useState(true)
    const handlecrossclick = () => {
        setfooter(false)
    }

    return (
        <div>
            {footer && <div className='h-[120px] bg-neutral-300 flex justify-between items-center px-14'>
                <div className='text-neutral-950 text-sm w-[800px]'>we and <span className='font-bold underline hover:no-underline'>our partners</span> use Cookies to personalise your experience , to show you ads based on your intrests , and for measurements and analytics perposes. By using our websites and services , you agree to our use of cookies as described in out <span className='font-bold underline hover:no-underline'>Cookie Policy.</span></div>
                <button onClick={handlecrossclick}><i className="fa-solid fa-x text-black text-xl"></i></button>
            </div>}
        </div>
    )
}

export default Footer
