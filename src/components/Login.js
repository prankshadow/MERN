import React from "react";
import leftContainerImage from '../Images/leftContainerImage.png'

function Login() {
    return (
        <div className="container login-container my-5">
            <div className="row">
                <div className="col-md-7 col-sm-12 login-img">
                    <img src={leftContainerImage} alt="leftContainerImage"></img>
                </div>
                <div className="col-md-5 col-sm-12 px-5 formBox">
                    <div className="card shadow">
                        <div className="card-body px-5">
                            <h4 className="card-title text-center fw-bold my-3">Log In</h4>
                            <form className="mt-3">
                                <div className="mb-3">
                                    <input type="email" className="p-2 form-control input-bg mb-2" placeholder="Phone number, username or email" />
                                    <input type="password" className="p-2 form-control input-bg mb-2" placeholder="Password" />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary rounded-1 logIn-button">Log In</button>
                                </div>
                                <div className="my-4">
                                    {/* <hr className="text-muted" /> */}
                                    <h6 className="text-muted text-center or-head"><span className="or-span">OR</span></h6>
                                    {/* <hr className="text-muted" /> */}
                                </div>
                                <div className="mt-3 mb-5 d-grid box-2 border rounded">
                                    {/* <button type="submit" className="btn btn-outline-secondary">
                                        <span className="signup-button">Don't have an account?</span>
                                        <span className="ms-1 link-primary fw-bold signup-button">Sign Up</span>
                                    </button> */}
                                    <div className="my-2 signup-text">
                                        Don't have account? <a href="/"><span>Signup</span></a>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;