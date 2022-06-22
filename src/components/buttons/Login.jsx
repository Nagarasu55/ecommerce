import React from 'react'

const Login = () => {
    return (
         <div  className='login'>
         <center>
                        <div class=" p-4  m-auto w-50 " id="form">
                            <h3 style={{ fontWeight: "bold" }}>Login</h3><br/>
                         
                            <form>
                                <div className="mb-3 w-50">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Username or Email or Mobile number</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3 w-50">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                                 </div>                                
                                        <button type="submit" className="btn btn-success w-50 mb-3">Submit</button>
                                </form>
                                       <a href="#" className="Linklog">DO NOT YOU REMEMBER THE PASSWORD?</a><br/>
                                       <a href="#" className="Linklog">CREATE A NEW ACCOUNT</a>
                         
                         </div> 
                </center>
                </div>
                    )
}

                    export default Login
