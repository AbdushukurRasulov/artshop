import React from 'react'

const Navbar = () => {
    return (
        <header className="bg-white">
            <nav className="max-w-5xl mx-auto px-5 py-3">
                <div className="flex items-center">
                    <a href="!#" className="logo block text-3xl text-brand-violet leading-8">
                        Logo
                    </a>

                    <button type="button" aria-label="Toggle Right" className="lg:hidden">
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>

                    <div className="flex items-center text-lg font-semibold leading-7 ml-auto">
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
