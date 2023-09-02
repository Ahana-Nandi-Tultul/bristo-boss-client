import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";

const Signup = () => {
    const {createUser} = useContext(AuthContext)
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
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
                <input type="text" placeholder="name" name="name" 
                className="input input-bordered" {...register("name", { required: true })} />
                {errors.name && <p className="text-red-700">Name field is required</p>}
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name="email"
                 className="input input-bordered" {...register("email", { required: true })} />
                {errors.email && <p className="text-red-700">Email field is required</p>}

                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" 
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
            </form>
            </div>
        </div>
        </div>
    );
};

export default Signup;