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

        <div className="relative border-2 border-black radius-md overflow-hidden">
            <img src={`images/${image}.png`} alt="" />

            <div className={`content ${color} flex items-center justify-between border-2 border-black radius-md absolute bottom-0 left-0 right-0 pt-3.5 pb-4.5 pl-9 pr-6`}>
                <div>
                    <p className="text-lg text-black font-medium leading-7">
                        {name}
                    </p>
                    <p className="text-sm leading-5">
                        from ${price}
                    </p>
                </div>

                <a href="!#" className="block bg-brand-violet text-black font-medium border-2 border-black leading-6 px-5 py-2">
                    View
                </a>
            </div>

            {
                count > 0
                    ?
                    (
                        <div className="w-11 h-11 bg-brand-yellow text-black font-semibold border-2 border-black absolute top-1/3 right-3 leading-10 text-center">
                            +{count} &gt;
                        </div>
                    ) : ('')
            }

        </div>
    )
}
export default Product
