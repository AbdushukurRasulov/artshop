import React from 'react'

const Header = () => {
    return (
        <div className="bg-brand-yellow pb-24">
            <div className="max-w-5xl relative text-center mx-auto py-16 px-5">
                <h2 className="text-4xl font-semibold uppercase leading-normal">
                    Creators: want your own artshop?
                </h2>
                <p className="text-2xl leading-10">
                    Sign up for our waitlist
                </p>
                <a href="!#" className="inline-block bg-brand-pink text-xl font-medium border border-black leading-8 rounded-full px-6 py-3 mt-4">
                    Learn more
                </a>

                <button type="button" aria-label="Close Header" className="absolute top-8 right-4 focus:outline-none">
                    <img src="images/close.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Header
