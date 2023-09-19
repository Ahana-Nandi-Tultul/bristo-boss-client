import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [carts, refetch] = useCart();
    // console.log(carts)
    const totalPrice = carts.reduce((sum, item) => item.price + sum, 0);
    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:3000/carts/${item._id}?email=bristo@boss.com`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
            .catch(error => console.log(error))
            }
          })
    }
    return (
        <div className="md:w-11/12 mx-auto w-full">  
            <div className="flex justify-between">
                <h2 className="text-3xl uppercase font-bold">Total orders: {carts.length}</h2>
                <h2 className="text-3xl uppercase font-bold">total price: ${totalPrice}</h2>
                <Link to="/dashboard/payment"><button className="btn bg-[#D1A054] text-white">Pay</button></Link>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {carts.map( (item, index) =>  <tr
      key={item._id}
      >
        <td>
          {index + 1}
        </td>
        <td>
          
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </td>
        <td>{item.name}</td>
        <td className="text-end">${item.price}</td>
        <td>
          <button className="btn btn-ghost bg-red-700 text-white" onClick={() => handleDelete(item)}><FaTrashAlt/></button>
        </td>
      </tr>)}
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyCart;