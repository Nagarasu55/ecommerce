import React from "react";

const Footer = () => {
  return (
    <>
<div class="container-fluid" style={{ backgroundColor: "DarkSeaGreen"}}>
  <footer class="py-4">
    <div class="row">
      <div class="col-md-5 offset-md-1 mb-3">

      <h1>MOBILE-CART</h1>
        <p>
          Mobile-CART is one of the India's leading e-commerce market place for top mobiles brands  
          with over 10 million products across 25+ categories.Mobile-CART ia a large company with 1 million 
          shipments per month,40 million registered users,20 thousand sellers,18 
          state of the art warehouses.
        </p>
      </div>

      

      <div class="col-6 col-md-2 mb-3">
        <h5>Useful Links</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-dark">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-dark">My Account</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-dark">Order Tracking</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-dark">Terms</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-dark">FAQs</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
      <h5>Contact</h5>
        <div className="ContactItem">
           311,Guindy, Chennai-2.
        </div>
        <div className="ContactItem">
          +044 244344, 244355
        </div>
        <div className="ContactItem">
          mobilecart@gmail.in
        </div>
        <div class=" mt-3 mb-3">
        <img className="Payment"  src="https://i.ibb.co/Qfvn4z6/payment.png" alt="pay"/>
        </div>
        <div class=" mb-3" >
        <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-danger h2" href="#"><span className="fa fa-instagram me-4"></span></a></li>
        <li class="ms-3"><a class="link-primary h2" href="#"><span className="fa fa-twitter me-4"></span></a></li>
        <li class="ms-3"><a class="link-primary h2" href="#"><span className="fa fa-facebook me-4"></span></a></li>
      </ul>
      </div>

      </div>
    </div>
  </footer>
</div>
</>
);
}

export default Footer