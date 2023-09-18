import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const {login} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    useEffect(()=> {
        loadCaptchaEnginge(6); 
    }, [])
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            Swal.fire({
                title: 'You have logged in.',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              navigate(from, {replace: true});
        })
        .catch(error => console.log(error))
    }
    const handleValidateCaptcha = e => {
        e.preventDefault();
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)  === true) {
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
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control">
            
                    <label className="label">
                        <span className="label-text">Captcha</span>
                    </label>
                    <input type="text" onBlur={handleValidateCaptcha} placeholder="type captcha" 
                     className="input input-bordered mb-2" />
                    <LoadCanvasTemplate />
                    </div>
                    
                    <div className="form-control mt-6">
                    <input type="submit" value="Login" className="btn btn-primary" disabled={disabled} />
                    </div>
                    <p><small>New Here? <Link to="/signup" className="text-primary">Create an Account</Link></small></p>
                </form>
                <SocialLogin></SocialLogin>
                </div>
            </div>
            </div>
        </>
    );
};

export default Login;