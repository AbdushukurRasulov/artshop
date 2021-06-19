import React from 'react'

const Footer = () => {
    return (
        <footer className="max-w-5xl mx-auto text-center md:text-left px-5 py-14">
            <a href="!#" className="logo block text-3xl text-brand-violet leading-8">
                Logo
            </a>

            <div className="md:flex items-center justify-between text-lg leading-6 space-y-4 md:space-y-0 py-4 md:py-9">
                <a href="!#" className="hidden md:block">Learn more</a>
                <a href="!#" className="block">About</a>
                <a href="!#" className="hidden md:block">Products</a>
                <a href="!#" className="block">Contact us</a>
            </div>
            <div className="flex items-center justify-center space-x-5 py-3">
                <a href="!#">
                    <img src="images/facebook.png" alt="" />
                </a>
                <a href="!#">
                    <img src="images/instagram.png" alt="" />
                </a>
                <a href="!#">
                    <img src="images/twitter.png" alt="" />
                </a>
            </div>
        </footer>
    )
}

export default Footer
