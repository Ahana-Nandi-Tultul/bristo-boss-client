import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";

const Login = () => {
    const captchaRef = useRef();
    const [disabled, setDisabled] = useState(true)
    useEffect(()=> {
        loadCaptchaEnginge(6); 
    }, [])
    const handleLogin = event => {
        event.preventDefault();
    }
    const handleValidateCaptcha = e => {
        e.preventDefault();
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
   
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center  md:w-1/2 lg:text-left">
                <h1 className="text-5xl font-bold">Please Login!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
            
                    <label className="label">
                        <span className="label-text">Captcha</span>
                    </label>
                    <input type="text" placeholder="type captcha" ref={captchaRef} className="input input-bordered mb-2" />
                    <LoadCanvasTemplate />
                    <button className="btn btn-outline btn-xs" onClick={handleValidateCaptcha}>Validate</button>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <input type="submit" value="Login" className="btn btn-primary" disabled={disabled} />
                    </div>
                    <p><small>New Here? <Link to="/signup">Create an Account</Link></small></p>
                </form>
                </div>
            </div>
            </div>
        </>
    );
};

export default Login;