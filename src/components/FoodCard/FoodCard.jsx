import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FoodCard = ({item}) => {
    const {_id, name, recipe, image, price} = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = item => {
        const orderItem = {menuItemId: _id, name, image, price, email: user?.email}
        if(user){
            fetch(`http://localhost:3000/carts?email=${user?.email}`, {
                method : "POST",
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food is added to your food cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
            .catch(error => console.log(error))
        }
        else{
            navigate('/login', {state: {from : location}})
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 rounded-lg px-4">${price}</p>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center">
            <button onClick={() => handleAddToCart(item)} className="btn border-b-4
             border-b-yellow-600 hover:bg-black hover:text-white hover:border-b-yellow-600">Add To Card</button>

            </div>
        </div>
        </div>
    );
};

export default FoodCard;