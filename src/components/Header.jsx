import React from 'react'

const Header = () => {
    return (
        <div className="bg-brand-yellow pb-24">
            <div className="max-w-5xl relative text-center mx-auto py-16 px-5">
                <h2 className="sm:text-2xl lg:text-4xl font-semibold uppercase leading-6 sm:leading-normal">
                    Creators: want your own artshop?
                </h2>
                <p className="sm:text-2xl leading-6 sm:leading-10">
                    Sign up for our waitlist
                </p>
                <a href="!#" className="block sm:inline-block bg-brand-pink lg:text-xl font-medium border-2 border-black leading-6 sm:leading-8 rounded-full sm:px-6 py-2 mt-4">
                    Learn more
                </a>

                <button type="button" aria-label="Close Header" className="hidden lg:block absolute top-8 right-4 focus:outline-none">
                    <img src="images/close.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Header
