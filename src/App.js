import React, {useState} from 'react'
import Nav from './Nav' // importando função Nav de Nav.js
import './App.css' //importando a folha de estilo
import ItemPage from './ItemPage';
import {items} from './static-data';
import CartPage from './CartPage'

const App = () => {
  const [activeTab, setActiveTab] = useState('items'); // faz a navegação começar na lista "items"

  const [cart, setCart] = useState([]); //nova variavel de estado e uma função de atualização de estado

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item])
  } // função responsável por chamar a função de atualização de estado do carrinho

  return (
  <div className="App">
  <Nav
  activeTab = {activeTab}
  onTabChange = {setActiveTab}
  />
   <main className = "App-content">
    <Content 
    tab={activeTab} 
    onAddToCart={addToCart} 
    cart = {summarizeCart(cart)}/>
   </main>
  </div>
)
} // criado função de seta

const Content = ({tab, onAddToCart, cart}) => {
  switch(tab){ //caso os valores de tab forem alternando, haverá as trocas determinadas nesse switch
    case 'items':
      return <ItemPage items={items} onAddToCart={onAddToCart}/>;
      case 'cart':
        return <CartPage items={cart} />;
        default:
          break;
  }
}

const summarizeCart = (cart) => {
const groupItems = cart.reduce((summary,item)=>{
  summary[item.id] = summary[item.id] || {
    ...item,
    count: 0
  }
  summary[item.id].cout++;
  return summary;
}, {});
return Object.values(groupItems);
}


export default App; // exportando app para que ele seja usado em outro arquivo
