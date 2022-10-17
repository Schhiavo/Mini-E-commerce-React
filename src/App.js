import React from 'react'
import Nav from './Nav' // importando função Nav de Nav.js
import './App.css' //importando a folha de estilo

const App = () => {
return (
  <div className="App">
  <Nav/>
   <main className = "App-content">
    <span>Empty</span>
   </main>
  </div>
)
} // criado função de seta

export default App; // exportando app para que ele seja usado em outro arquivo
