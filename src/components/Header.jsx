import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  fixed-top navbar-light " style={{ backgroundColor: "DarkSeaGreen", marginBottom: 10 }}>
                <div className="container-fluid py-2">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                  
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">

                    <h2 className=" text-primary mx-auto fw-bold">MOBILE-CART</h2>
                    <NavLink className="navbar-brand mx-auto fw-bold" aria-current="page" to="/ecommerce"><span className="fa fa-home me-1"></span></NavLink> 

                        <ul className="navbar-nav mx-auto fw-bold mb-2 mb-lg-0">
                            
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/vivo">VIVO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/oppo">OPPO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/oneplus">ONEPLUS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/iphone">IPHONE</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/xiaomi">XIAOMI</NavLink>
                            </li> 
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">Signup</NavLink>
                            </li>
                        </ul>
                        <span className="mx-auto "><CartBtn/></span>
                        <form class="d-flex ">
                           <input class="form-control me-2 px-5" type="search" placeholder="Search by brand or model" aria-label="Search"/>
                            <button class="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
