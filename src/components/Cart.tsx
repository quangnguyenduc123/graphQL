import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import CartCSS from './Cart.module.css'

interface Props { }

interface State {
    isOpen: boolean
}

class Cart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if ((e.target as HTMLElement).nodeName === 'SPAN') {
        }
        this.setState((prevSate) => ({ isOpen: !prevSate.isOpen }))
    }

    render() {
        return (
            <div className={CartCSS.cartContainer}>
                <button
                    className={CartCSS.button} type="button"
                    onClick={this.handleClick}
                >
                    <FiShoppingCart />
                    <span>2 pizzas</span>
                </button>
                <div
                    className={CartCSS.cartDropDown}
                    style={{
                        display: this.state.isOpen ? 'block' : 'none'
                    }}
                >
                    <ul>
                        <li>
                            Napoletana
                        </li>
                        <li>
                            Marinara
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Cart