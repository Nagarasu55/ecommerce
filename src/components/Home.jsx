import React from 'react'
import Trending from './Trending'
import offer1 from './offer1.jpg';
import offer2 from './offer2.jpg';
import offer3 from './offer3.jpg';
import offer4 from './offer4.jpg';

const Home = () => {
    return (
        
        <div class="pt-5 mt-5 ">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={offer1} class="d-block w-100" alt="IPhone" height="500px"/>
                        </div>
                        <div class="carousel-item">
                            <img src={offer2} class="d-block w-100" alt="IPhone" height="500px"/>
                        </div>
                            <div class="carousel-item">
                                <img src={offer3} class="d-block w-100" alt="IPhone" height="500px"/>
                        </div>
                        <div class="carousel-item">
                                <img src={offer4} class="d-block w-100" alt="IPhone" height="500px"/>
                        </div>
                 </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <Trending/>
                    </div>
                    )
}

                    export default Home
