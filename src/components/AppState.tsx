import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import Cart from './Cart'

export interface CartItem {
    id: number, name: string, price: number, quantity: number
}

interface AppSateValue {
    cart: {
        items: CartItem[]
    }
}

const defaultStateValue: AppSateValue = {
    cart: {
        items: []
    }
}

export const AppStateContext = createContext(defaultStateValue)

export const AppDisptachContext = createContext<React.Dispatch<AddToCartAction> | undefined>(undefined)

export const useStateDispatch = () => {
    const dispatch = useContext(AppDisptachContext)
    if (!dispatch) {
        throw new Error('useSetState was called outside of the AppSetState provider')
    }
    return dispatch
}

interface Action<T> {
    type: T
}

interface AddToCartAction extends Action<'ADD_TO_CART'> {
    payload: {
        item: Omit<CartItem, 'quantity'>
    }
}


interface InitializeCartAction extends Action<'INIT'> {
    payload: {
        cart: AppSateValue['cart']
    }
}

const reducer = (
    state: AppSateValue,
    action: AddToCartAction | InitializeCartAction) => {
    if (action.type === 'ADD_TO_CART') {
        const itemToAdd = action.payload.item
        const itemExists = state.cart.items.find((item) => item.id === itemToAdd.id);
        return {
            ...state,
            cart: {
                ...state.cart,
                items: itemExists
                    ? state.cart.items.map((item) => {
                        if (item.id === itemToAdd.id) {
                            return { ...item, quantity: item.quantity + 1 };
                        }
                        return item;
                    })
                    : [
                        ...state.cart.items,
                        {
                            ...itemToAdd,
                            quantity: 1,
                        },
                    ],
            },
        };
    } else if (action.type === 'INIT') {
        return { ...state, cart: action.payload.cart }
    }

    return state
}

const AppStateProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultStateValue)

    useEffect(() => {
        console.log('INIT')
        const cart = window.localStorage.getItem('cart')
        if (cart) {
            dispatch({
                type: 'INIT',
                payload: { cart: JSON.parse(cart) }
            })
        }
    }, [])

    useEffect(() => {
        console.log('Write')
        window.localStorage.setItem('cart', JSON.stringify(state.cart))
        console.log(window.localStorage.getItem('cart'))
    }, [state.cart])

    return (
        <AppStateContext.Provider value={state}>
            <AppDisptachContext.Provider value={dispatch}>
                {children}
            </AppDisptachContext.Provider>
        </AppStateContext.Provider>
    )
}

export default AppStateProvider