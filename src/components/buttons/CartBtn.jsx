import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
    // We get a state of addItems
    // Write the name of the file not the function
    const state = useSelector((state)=> state.addItem)
    return (
        <>
            <NavLink to="/cart">
                <span className="fa fa-shopping-cart fw-bold text-dark me-1"></span> ({state.length})
            </NavLink>
        </>
    )
}

export default CartBtn
