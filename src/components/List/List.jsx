import React from 'react'
import "./List.scss"
import Card from '../Card/Card'

const List = () => {

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
    <div className='list'>{data?.map(item=>(
        <Card item={item} key={item.id}/>
    ))}
    </div>
  )
}

export default List