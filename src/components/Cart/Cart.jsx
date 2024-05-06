import React from 'react'
import './Cart.scss'
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

    const data = [
        {
            id:1,
            img: "/img/pexels-black-bird-859122-1954861.jpg",
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
        }
    ]

  return (
    <div className='cart'>
        <h1>Products In Your Cart</h1>
        {data?.map(item=>(
            <div className='item' key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <div className="price">1 x ${item.price}</div>
                </div>
                <DeleteIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$1234</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>EMPTY CART</span>
    </div>
  )
}

export default Cart