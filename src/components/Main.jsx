import React from 'react'
import Categories from "./Categories"
import { products } from "../data"

const Main = () => {
    var items = []
    for (var item in products) {
        items.push({
            category: item,
            products: products[item]
        })
    }

    return (
        <main className="bg-white rounded-70 lg:rounded-100 -mt-24">
            <div className="max-w-5xl mx-auto px-5">
                {/* MAIN HEADER */}
                <div className="flex flex-row items-center justify-between py-11">
                    <div className="flex items-center flex-row justify-center md:space-x-4">
                        <div>
                            <img src="images/avatar.png" alt="" className="w-24 h-24" />
                        </div>
                        <div>
                            <h3 className="text-xl lg:text-2xl font-semibold leading-8 lg:leading-10">
                                Katiebcartoons
                            </h3>
                            <div className="flex items-center">
                                <span>
                                    <svg className="w-5 lg:w-auto" width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.75 0C13.5844 0 17.5 3.83906 17.5 8.575C17.5 3.83906 21.4156 0 26.25 0C31.0844 0 35 3.83906 35 8.575C35 15.7128 27.9256 18.2306 18.3575 29.5925C18.2522 29.7173 18.1209 29.8176 17.9727 29.8864C17.8246 29.9552 17.6633 29.9908 17.5 29.9908C17.3367 29.9908 17.1754 29.9552 17.0273 29.8864C16.8791 29.8176 16.7478 29.7173 16.6425 29.5925C7.07437 18.2306 0 15.7128 0 8.575C0 3.83906 3.91562 0 8.75 0Z" fill="#FF9ED9" />
                                    </svg>
                                </span>

                                <span className="block lg:text-xl leading-6 lg:leading-8 ml-2">
                                    2435 supporters
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 ">
                        <a href="!#" className="w-36 lg:w-40 block bg-brand-violet lg:text-xl font-medium border border-black leading-6 lg:leading-8 rounded-full px-6 py-3 mt-4">
                            <div className="flex items-center">
                                <img src="images/donate.svg" alt="donation mag" className="w-4 lg:w-auto mr-3" />
                                Donate
                            </div>
                        </a>

                        <a href="!#" className="w-36 lg:w-40 block bg-white lg:text-xl font-medium text-center border border-black leading-6 lg:leading-8 rounded-full px-6 py-3 mt-4">
                            Follow
                        </a>
                    </div>
                </div>

                {

                    // 
                    items.map((item, i) => <Categories key={i} data={item} />)
                }

            </div>
        </main>
    )
}

export default Main
