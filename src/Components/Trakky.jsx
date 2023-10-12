import React from 'react'

function Trakky() {
    return (
        <>
            <div className="container text-center  my-3">
                <h1><span style="font-family:cursive; font-weight:400;">Trakky</span> Academy</h1>
                <div className="container text-center border border-light my-3 w-75 pb-3">
                    <div className="row ">
                        <a className="text-light col-6 mx-auto btn">Sign IN
                        </a>
                        <a className="text-dark col-6 mx-auto bg-light btn rounded-0">
                            Sign UP
                        </a>
                    </div>
                    <div className="container my-3">
                        <h2 className="my-3">Create A New Account</h2>
                        <p className="">Witness The Revaluaton Of Grooming Industry</p>
                        <button className="btn btn-light "><img width="30" height="30" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" /> Continue With Google</button>
                    </div>
                    <div className="mx-auto w-50">
                        <form>
                            <input className="form-control my-2 " style={{ background: "#5a47ab", color: "white" }} type="text" defaultValue="User Name" />
                            <input className="form-control my-2" style={{ background: "#5a47ab", color: "white" }} type="text" defaultValue="Email Id" />
                            <input className="form-control my-2" style={{ background: "#5a47ab", color: "white" }} type="text" defaultValue="Contact Number" />
                            <div className="input-group mb-2">
                                <select className="form-select" style={{ background: "#5a47ab", color: "white" }} id="inputGroupSelect01">
                                    <option selected>City</option>
                                    <option value="1">Ahemadabad</option>
                                    <option value="2">Mumbai</option>
                                    <option value="3">Jaipur</option>
                                </select>
                            </div>
                            <input className="form-control my-2" style={{ background: "#5a47ab", color: "white" }} type="text" value="OTP" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trakky