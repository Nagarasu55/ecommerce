import React from 'react'

const Signup = () => {
    return (
        <div className='login'>
                <center>
                            <div class=" p-4  m-auto w-50 " id="form">
                            <h3 style={{ fontWeight: "bold" }}>Sign up</h3>
                            <form>
                                <div className="mb-3 w-50">
                                    <label htmlFor="exampleInput" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInput" />
                                </div>
                                <div className="mb-3 w-50">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3 w-50">
                                    <label htmlFor="exampleInputmobile" className="form-label">Mobile Number</label>
                                    <input type="num" className="form-control" id="exampleInputmobile" aria-describedby="mobilecontact" />
                                </div>
                                <div className="mb-3 w-50">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 w-50">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Conform Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                <span><input type="checkbox"/>By creating an account, I consent to the processing of my personal
                                   data in accordance with the <a href="#" className="agree">Privacy policy</a>
                                 </span>
                                </div>
                                <button type="submit" className="btn btn-success w-50 mt-5">Create account</button>
                            </form>
                        </div>
                   
            </center>
        </div>
    )
}

export default Signup
