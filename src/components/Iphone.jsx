import React from 'react'
import { NavLink } from 'react-router-dom';
import IphoneData from '../IphoneData'
import iphonelogo from "./iphonelogo.png"

const Iphone = () => {

    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4" key={item.id} style={{width: "15rem", height:"25rem"}}>
                <img src={item.img} class="card-img-top" style={{width: "14rem", height:"14rem"}} alt={item.title}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{item.title}</h5>
                        <p className="lead">₹{item.price}</p>
                        <NavLink to={`/iphone/${item.id}`} class="btn btn-outline-success">See Product</NavLink>
                    </div>
</div>
                );
    }

                return (
                <div div class="pt-1" style={{ backgroundColor: "#ccf4ff", marginTop:"90px", marginBottom:"10px" }}>
         
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 text-center">
                        <center><img src={iphonelogo}  style={{width: "12rem", height:"5rem"}} alt="logo"/></center>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                            {IphoneData.map(cardItem)}
                        </div>
                    </div>
                </div>
                )
}

                export default Iphone
