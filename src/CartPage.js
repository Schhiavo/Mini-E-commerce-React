import React from 'react';

import PropTypes from 'prop-types'; //importando a biblioteca proptype que vai servir de auxilio nesse projeto. Para instalar a mesma, acesse o terminal e use o seguinte comando: "npm install proptypes"

import './CartPage.css';
import Item from './Item'

function CartPage({items, onAddOne, onRemoveOne}){
    return(
        <ul className="CartPage-items">
            {items.map(item =>
                <li key={item.id} className="CartPage-item">
                 <Item item ={item}>
                 <div className="CarItem-controls">
                    <button className="CarItem-removeOne"
                    onClick={()=>onRemoveOne(item)}>-</button>

                    <span className="CarItem-count">{item.count}</span>
                    <button className="CarItem-addOne" onClick = {()=>onAddOne(item)}>+</button>
                 </div>
                 </Item>
                </li>
                )}
        </ul>
    );
}

// Essa função recebe um array items, percorre e o mapeia.


CartPage.propTypes = {
items: PropTypes.array.isRequired,
onAddOne: PropTypes.func.isRequired,
onRemoveOne: PropTypes.func.isRequired
}; // função que garante que a função ItemPage receba apenas array

export default CartPage;