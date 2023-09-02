import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
    const {createUser, updateUserInfo} = useContext(AuthContext)
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            // const loggedUser = result.user;
            updateUserInfo(data.name, data.photoURL)
            .then(() => {})
            .catch(error => console.log(error))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You have created your account successfully.',
                showConfirmButton: false,
                timer: 1500
              })
            // console.log(loggedUser);
            navigate('/');
        })
        .catch(error => console.log(error))
    };
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Please Signup</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card  md:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" 
                className="input input-bordered" {...register("name", { required: true })} />
                {errors.name && <p className="text-red-700">Name field is required</p>}
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">PhotoURL</span>
                </label>
                <input type="text" placeholder="Photo URL" 
                className="input input-bordered" {...register("photoURL", { required: true })} />
                {errors.photoURL && <p className="text-red-700">Photo URL field is required</p>}
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email"
                 className="input input-bordered" {...register("email", { required: true })} />
                {errors.email && <p className="text-red-700">Email field is required</p>}

                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" 
                className="input input-bordered" {...register("password", 
                { required: true,
                minLength: 8,
                maxLength: 20,
                pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} />
                {errors.password && <p className="text-red-700">Password field is required.Password must have
                one Uppercase, one Special character, one Lowercase</p>}

                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <input type="submit" value="Sign Up" className="btn btn-primary"/>
                </div>
                <p><small>Already Have an Account? Please <Link to="/login" className="text-primary">Login</Link></small></p>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Signup;