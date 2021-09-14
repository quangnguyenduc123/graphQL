import React from 'react'
import pizzas from '../data/pizzas.json'
import Pizza from './Pizza'
import AppCSS from './App.module.css'

const App = () => {
    return (
        <div className={AppCSS.cotainer}>
            <ul>{pizzas.map(pizza => {
                return <Pizza key={pizza.id} pizza={pizza}></Pizza>
            })}</ul>
        </div >
    )
}
export default App