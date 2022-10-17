import React, {useState} from 'react'
import Nav from './Nav' // importando função Nav de Nav.js
import './App.css' //importando a folha de estilo

const App = () => {
  const [activeTab, setActiveTab] = useState('items'); // faz a navegação começar na lista "items"
return (
  <div className="App">
  <Nav
  activeTab = {activeTab}
  onTabChange = {setActiveTab}
  />
   <main className = "App-content">
    <Content tab={activeTab} />
   </main>
  </div>
)
} // criado função de seta

const Content = ({tab}) => {
  switch(tab){ //caso os valores de tab forem alternando, haverá as trocas determinadas nesse switch
    case 'items':
      return <span>the items</span>;
      case 'cart':
        return <span>the cart</span>;
        default:
          break;
  }
}

export default App; // exportando app para que ele seja usado em outro arquivo
