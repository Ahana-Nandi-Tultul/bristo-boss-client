import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';

const Navber = () => {
    const {user, logout} = useContext(AuthContext)
    const [carts] = useCart();
    const [isAdmin] = useAdmin(); 
    
    // console.log(carts)
    const handleLogout = () => {
        logout()
        .then(() => {
            localStorage.removeItem('access-token-Bristo');
        })
        .catch(error => console.log(error))
    }
    const navLink = <>
        <li><Link className='uppercase' to="/">Home</Link></li>
        <li><Link className='uppercase' to="/menu">Menu</Link></li>
        <li><Link className='uppercase' to="/order/salad">Order Food</Link></li>
        {
            isAdmin ?  <li><Link className='uppercase' to="/dashboard/adminhome">Dashboard</Link></li> :
            <li><Link className='uppercase' to="/dashboard/userhome">Dashboard</Link></li>

        }
        <li><Link className='uppercase' to="/dashboard/cart">
        <button className="btn btn-xs">
            <FaShoppingCart className='w-6 h-6'></FaShoppingCart>
            <div className="badge badge-secondary">+{carts?.length || 0}</div>
        </button>
        </Link></li>
        
        {
            user ? <>
           
            <button onClick={handleLogout} className="btn btn-ghost btn-xs">Logout</button>
            </> : <>
            <li><Link className='uppercase' to="/login">Login</Link></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-black opacity-70 fixed z-10 text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLink}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl up">BISTRO BOSS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal ms-auto px-1 ">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navber;