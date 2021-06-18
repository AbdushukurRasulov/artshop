import React from 'react'
import Product from "./Product"

const Categories = ({ data: { category, products } }) => {

    return (
        <div className="pb-14">
            <div className="flex items-center justify-between">
                <p className="text-xl font-medium capitalize leading-8">
                    {category}
                </p>

                <button type="button" aria-label="View All" className="font-medium border-b-4 border-brand-pink leading-6">
                    View All &gt;&gt;&gt;
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-17 md:gap-10 py-9">
                {
                    products.map((item, i) => <Product key={i} product={item} category={category} />)
                }
            </div>
        </div>
    )
}

export default Categories
