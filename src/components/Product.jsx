import React from 'react'

const Product = ({ product: { name, count, price, image }, category }) => {

    console.log(category)
    var color = ''

    if (category === 't-shirts') {
        color = 'bg-brand-pink'
    } else {
        color = 'bg-brand-green'
    }

    return (

        <div className="relative border border-black radius-sm lg:radius-md overflow-hidden">
            <img src={`images/${image}.png`} alt="" />

            <div className={`content ${color} flex items-center justify-between border border-black radius-sm lg:radius-md absolute bottom-0 left-0 right-0 py-2 lg:pt-3.5 lg:pb-4.5 pl-9 pr-6`}>
                <div>
                    <p className="lg:text-lg text-black font-medium leading-7">
                        {name}
                    </p>
                    <p className="text-sm leading-5">
                        from ${price}
                    </p>
                </div>

                <a href="!#" className="hidden lg:block bg-brand-violet text-black font-medium border-2 border-black leading-6 px-5 py-2">
                    View
                </a>
            </div>

            {
                count > 0
                    ?
                    (
                        <div className="w-7 h-7 lg:w-11 lg:h-11 text-sm lg:text-base bg-brand-yellow text-black font-semibold border-2 border-black absolute top-1/3 right-3 leading-6 lg:leading-10 text-center">
                            +{count} &gt;
                        </div>
                    ) : ('')
            }

        </div>
    )
}
export default Product
