import React from 'react'
import "./Product.scss"
import { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    "/img/oladimeji-odunsi-aNj8Hvbrss8-unsplash.jpg",
    "/img/pexels-lucasmonteiro-1868471 (1).jpg"
  ];

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt='' onClick={e=>setSelectedImg(0)} />
          <img src={images[1]} alt='' onClick={e=>setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$99</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Et quibusdam asperiores corrupti nemo ut, dolore officia dolorum sit nisi, 
          sapiente laboriosam aliquid repudiandae repellendus non recusandae quae molestias, 
          accusantium similique.
          </p>
          <div className="quantity">
            <button onClick={() => setQuantity((prev) =>  (prev === 1 ? 1 : prev - 1))}>-</button>
              {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button className="add">
            <AddShoppingCartIcon /> ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteIcon /> ADD TO WISH LIST
            </div>
            <div className="item">
              <CompareArrowsIcon /> ADD TO COMPARE
            </div>
          </div>
      </div>
    </div>
  )
}

export default Product