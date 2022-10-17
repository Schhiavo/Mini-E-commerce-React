import React from 'react'

const Nav = () => {

    return (
        <nav className="App-nav">
         <ul>
            <li className="App-nav-item">
                <button>Items</button>
            </li>
            <li className="App-nav-item">
                <button>Cart</button>
            </li>
         </ul>
        </nav>
    )

}// função que retorna uma barra de navegação com uma lista não ordenada de dois botões para Itens e Carrinho

export default Nav;