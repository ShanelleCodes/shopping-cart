import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id:1,
            img: "/img/pexels-black-bird-859122-1954861.jpg",
            img2: "/img/pexels-gazelle-rahmani-1286134-2540150.jpg",
            title: "Long sleeve graphic shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id:2,
            img: "/img/pexels-black-bird-859122-1954861.jpg",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id:3,
            img: "/img/pexels-black-bird-859122-1954861.jpg",
            title: "Skirt",
            oldPrice: 19,
            price: 12,
        },
        {
            id:4,
            img: "/img/pexels-black-bird-859122-1954861.jpg",
            img2: "/img/pexels-gazelle-rahmani-1286134-2540150.jpg",
            title: "Hat",
            oldPrice: 19,
            price: 12,
        },
    ]

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Inventore dolores nulla optio quia, quo voluptates porro 
                fugit nam dolorum iste sed eum ratione dignissimos doloribus 
                libero quam fugiat minima in.
            </p>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts