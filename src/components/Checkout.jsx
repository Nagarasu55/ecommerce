import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const state = useSelector((state) => state.addItem)

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">₹{item.price}</span>
            </li>
        );
    }

    return (
        <>
            <div className="container p-5 " id="form" style={{ backgroundColor: "#ccf4ff", marginTop:"130px", marginBottom:"50px" }}>
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (INR)</span>
                                <strong>₹{total}</strong>
                            </li>
                        </ul>

                        
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" novalidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="mobileno" className="form-label">Mobile Number</label>
                                    <div className="input-group has-validation">
                                        <input type="num" className="form-control" id="mobileno" placeholder="mobileno" required="" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email </label>
                                    <input type="email" className="form-control" id="email" placeholder="name@name.com" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Landmark" className="form-label">Landmark</label>
                                    <input type="text" className="form-control" id="landmark" placeholder="Near Railway station" required="" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address 1st line</label>
                                    <input type="text" className="form-control" id="address" placeholder="Street Name" required="" />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Address 2nd line <span className="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" id="address2" placeholder="Kodampakkam(P.O),Chennai-2" />
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <input type="text" className="form-control" id="country" placeholder="India" />
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <input type="text" className="form-control" id="state" placeholder="Tamil Nadu" />
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="123456" required="" />
                                </div>
                            </div>

                            <hr className="my-4" />

                            <hr className="my-4" />

                            <h4 className="mb-3">Payment</h4>

                            <div className="my-3">
                                <div className="form-check">
                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                                    <label className="form-check-label" htmlFor="credit">Credit card</label>
                                </div>
                                <div className="form-check">
                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="debit">Debit card</label>
                                </div>
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="paypal">Cash on delivery</label>
                                </div>
                            </div>

                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label htmlFor="cc-number" className="form-label">Credit card number</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                </div>
                            </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-info btn-lg" type="submit">Order now</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
