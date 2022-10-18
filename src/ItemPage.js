import React from 'react';

import PropTypes from 'prop-types'; //importando a biblioteca proptype que vai servir de auxilio nesse projeto. Para instalar a mesma, acesse o terminal e use o seguinte comando: "npm install proptypes"

import './ItemPage.css';

function ItemPage({items}){
    return(
        <ul className="ItemPage-items">
            {items.map(item =>
                <li key={item.id} className="ItemPage-item">
                    {item.name}
                </li>
                )}
        </ul>
    );
}

// Essa função recebe um array items, percorre e o mapeia.


ItemPage.propTypes = {
items: PropTypes.array.isRequired
} // função que garante que a função ItemPage receba apenas array

export default ItemPage;