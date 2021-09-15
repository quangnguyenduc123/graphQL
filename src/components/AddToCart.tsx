import React from 'react'
import { CartItem, useStateDispatch } from './AppState';

export interface AddToCartProps {
    addToCart: (item: Omit<CartItem, 'quantity'>) => void
}

export function withAddToCart<OrginialProps extends AddToCartProps>(
    ChildComponent: React.ComponentType<OrginialProps>
) {
    const AddToCartHOC = (props: Omit<OrginialProps, keyof AddToCartProps>) => {
        const dispatch = useStateDispatch();
        const handleAddToCartClick: AddToCartProps['addToCart'] = (item) => {
            dispatch({
                type: 'ADD_TO_CART',
                payload: {
                    item
                }
            })
        };
        return <ChildComponent
            {...props as OrginialProps}
            addToCart={handleAddToCartClick}
        >

        </ChildComponent>
    }

    return AddToCartHOC
}

export const WithAddtoCartProps: React.FC<{
    children: (props: AddToCartProps) => JSX.Element
}> = ({ children }) => {
    const dispatch = useStateDispatch();
    const addToCart: AddToCartProps['addToCart'] = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                item
            }
        })
    };
    return children({ addToCart })
}

export const useAddToCart = () => {
    const dispatch = useStateDispatch();
    const addToCart: AddToCartProps['addToCart'] = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                item
            }
        })
    };

    return addToCart
}