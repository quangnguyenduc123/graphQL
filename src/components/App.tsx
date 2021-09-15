import React from 'react'
import pizzas from '../data/pizzas.json'
import Pizza from './Pizza'
import AppCSS from './App.module.css'
import PizzaSVG from '../svg/pizza.svg'
import Cart from './Cart'
import AppStateProvider from './AppState'
import SpecialOffer from './SpecialOffer'

const App = () => {
    const specialOfferPizza = pizzas.find((pizza)=> pizza.specialOffer)
    return (
        <AppStateProvider>
            <div className={AppCSS.cotainer}>
            <div className={AppCSS.header}>
                <PizzaSVG width={120} height={120} />
                <div className={AppCSS.siteTitle}>Delicious Pizza</div>
                <Cart></Cart>
            </div>
            {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza}></SpecialOffer>}
            <ul className={AppCSS.pizzaList}>{pizzas.map(pizza => {
                return <Pizza key={pizza.id} pizza={pizza}></Pizza>
            })}</ul>
        </div >
        </AppStateProvider>
    )
}
export default App