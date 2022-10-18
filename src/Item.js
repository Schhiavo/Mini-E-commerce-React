import React from 'react'
import PropTypes from 'prop-types'
import './Item.css';

const Item = ({item, onAddToCart}) => {

   <div className="Item">
    <div className="Item-left">
     <div className="Item-image"></div>
     <div className="Item-title">
        {item.name}
     </div>
     <div className="Item-description">
      {item.description}
     </div>
    </div>
    <div className="Item-right">
     <div className="Item-price">
        ${item.price}
     </div>
     <div>
        <button className="Item-addToCart" onClick={onAddToCart}>
            Add to cart
        </button>
     </div>
    </div>
   </div>

} // função que recebe um item e um método como parâmetro, separa os objetos do item em divs e adiciona um botão que será acionado ao click e chamará o método onAddToCart 

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func.isRequired
}; //proptype para garantir que item é um objeto e onAddToCart é uma função

export default Item;