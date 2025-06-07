import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product,inCart,handleCartToggle }) => {
  const {name,price,inStock}=product
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* TODO: Implement Add to Cart button functionality */}
      <button onClick={()=> handleCartToggle(product)} disabled={!inStock}>
        {inCart ? 'remove from cart' : 'add to cart'}
      </button>
    </div>
  )
}

export default ProductCard
