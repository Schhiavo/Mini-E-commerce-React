import React from 'react';

import PropTypes from 'prop-types'; //importando a biblioteca proptype que vai servir de auxilio nesse projeto. Para instalar a mesma, acesse o terminal e use o seguinte comando: "npm install proptypes"

import './CartPage.css';
import Item from './Item'

function CartPage({items, onAddToCart}){
    return(
        <ul className="CartPage-items">
            {items.map(item =>
                <li key={item.id} className="CartPage-item">
                 <Item item ={item}/>
                </li>
                )}
        </ul>
    );
}

// Essa função recebe um array items, percorre e o mapeia.


CartPage.propTypes = {
items: PropTypes.array.isRequired
} // função que garante que a função ItemPage receba apenas array

export default CartPage;