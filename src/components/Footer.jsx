import React from 'react'

const Footer = () => {
    return (
        <footer className="max-w-5xl mx-auto px-5 py-14">
            <a href="!#" className="logo block text-3xl text-brand-violet leading-8">
                Logo
            </a>

            <div className="flex items-center justify-between text-lg leading-6 py-9">
                <a href="!#">Learn more</a>
                <a href="!#">About</a>
                <a href="!#">Products</a>
                <a href="!#">Contact us</a>
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
