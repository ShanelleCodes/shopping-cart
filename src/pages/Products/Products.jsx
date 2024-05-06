import React from 'react'
import "./Products.scss"
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import { useState } from "react";

const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(200)
  const [sort, setSort] = useState(null)


  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type='checkbox' id='1' value={1} />
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className="inputItem">
            <input type='checkbox' id='2' value={2} />
            <label htmlFor='2'>Accessories</label>
          </div>
          <div className="inputItem">
            <input type='checkbox' id='3' value={3} />
            <label htmlFor='3'>Tops</label>
          </div>
        </div>

        <div className="filterItem">
          <h2>Filter by Price</h2>
            <div className="inputItem">
              <span>0</span>
              <input type='range' min={0} max={200} onChange={(e)=> setMaxPrice(e.target.value)}/>
              <span>{maxPrice}</span>
            </div>
        </div>

        <div className="filterItem">
          <h2>Sort By</h2>
            <div className="inputItem">
              <input type='radio' id="asc" value='asc' name='price' onChange={(e) => setSort("asc")}/>
              <label htmlFor='asc'>Price (Low to High)</label>
            </div>
            <div className="inputItem">
              <input type='radio' id="desc" value='desc' name='price' onChange={(e) => setSort("desc")}/>
              <label htmlFor='desc'>Price (High to Low)</label>
            </div>
        </div>
      </div>
      <div className="right">
      <img
          className="catImg"
          src="/img/pexels-clint-maliq-1590638-20153996.jpg"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products