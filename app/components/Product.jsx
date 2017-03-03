import React from 'react'

const ProductInfo = (props) => {
  const product = props.selectedProduct
    return (
      <div id="product">
        { product ?
          <div>
            <h1>{ product.title }</h1>
            <div className="photodisplay">
              <img src={ `${product.imgUrls[0]}` } />
              <div className="photodisplay">
                <img className="imgthumb" src={ `${product.imgUrls[1]}` } />
                <br />
                <img className="imgthumb" src={ `${product.imgUrls[1]}` } />
                <br />
                <img id="lastimg" className="imgthumb" src={ `${product.imgUrls[1]}` } />
              </div>
            </div>
            <br />
            <br />
            <p>{ product.description }</p>
            <br />
            <h4>Price: ${ product.currentPrice.toFixed(2) }</h4>
            <br />
          </div>
          : <h1>No Product!</h1>
      }
    </div>
  )
}

export default ProductInfo
