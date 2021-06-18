import React from 'react'

const Navbar = () => {
    return (
        <header className="bg-brand-yellow sm:bg-white">
            <nav className="max-w-5xl mx-auto px-5 py-6 sm:py-4">
                <div className="flex items-center justify-between">
                    <a href="!#" className="logo block text-2xl md:text-3xl text-brand-violet leading-8">
                        Logo
                    </a>

                    <button type="button" aria-label="Toggle Right" className="md:hidden space-y-2">
                        <div className="w-8 h-0.5 bg-black"></div>
                        <div className="w-8 h-0.5 bg-black"></div>
                        <div className="w-8 h-0.5 bg-black"></div>
                    </button>

                    <div className="hidden md:flex items-center text-lg font-semibold leading-7 ml-auto">
                        <a href="!#" className="px-4">
                            About
                        </a>
                        <a href="!#" className="px-4">
                            Products
                        </a>
                        <a href="!#" className="px-4">
                            Artshop
                        </a>
                        <a href="!#" className="pl-4">
                            <img src="images/instagram.svg" alt="" />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
