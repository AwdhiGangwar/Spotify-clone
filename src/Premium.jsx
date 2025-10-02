import React from 'react'
import Nav from './PremiumComponents/nav'
import Footer from './PremiumComponents/footer'
import MainBody from './PremiumComponents/MainBody'
const Premium = () => {
    return (
        <div>
            <div className='h-full flex flex-col w-full'>
                < Nav />
                <MainBody />
                < Footer />
            </div>
        </div>
    )
}

export default Premium
