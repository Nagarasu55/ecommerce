import React from 'react'
import { NavLink } from 'react-router-dom';
import TrendingData from '../TrendingData'

const Trending = () => {

    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4" key={item.id} style={{width: "15rem", height:"25rem"}}>
                <img src={item.img} class="card-img-top" style={{width: "12rem", height:"14rem"}} alt={item.title}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{item.title}</h5>
                        <p className="lead">₹{item.price}</p>
                        <NavLink to={`/trending/${item.id}`} class="btn btn-outline-success">See Product</NavLink>
                    </div>
</div>
                );
    }

                return (
                <div style={{ backgroundColor: "#ccf4ff", marginTop:10, marginBottom:10 }}>
                    <div className="container py-5" >
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 style={{ fontWeight: "bold" }}>Trending Smartphones</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="container" >
                        <div className="row justify-content-around">
                            {TrendingData.map(cardItem)}
                        </div>
                    </div>
                </div>
                )
}

                export default Trending
