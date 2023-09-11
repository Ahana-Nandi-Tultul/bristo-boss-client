import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const {data : users = [], refetch} = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:3000/users')
        return res.json()
    });

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, make admin!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/users/admin/${user._id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify({})
                })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if(data.modifiedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            `${user.name} is admin now.`,
                            'success'
                          )
                        refetch();
                    }
                })
            }
          })
    }

    const handleDelete = (user) =>{
        
    }

    return (
        <>
        <Helmet>
                <title>Bristo Boss || All Users</title>
        </Helmet>
        <div className="w-full">
            <h2 className="text-3xl font-semibold text-center my-8">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) =>  <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user?.role === 'admin' ? 'Admin' :
                             <button className="btn btn-ghost bg-orange-600 text-white"
                             onClick={() => handleMakeAdmin(user)}><FaUserShield className="h-6 w-6"/></button>
                        }</td>
                            <td>
                            <button className="btn btn-ghost bg-red-700 text-white"
                             onClick={() => handleDelete(user)}><FaTrashAlt/></button>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default AllUsers;