import { useContext } from 'react';
import {FaGoogle} from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            fetch('http://localhost:3000/users', {
                method: "POST",
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify({name: loggedUser.displayName ,email : loggedUser.email})
            })
            .then(res => res.json())
            .then((data) => {
                    // console.log(data)
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
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
             <div className="divider"></div>
             <div className='w-full text-center my-4'>
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                    <FaGoogle/>
                </button>
             </div>
        </div>
    );
};

export default SocialLogin;