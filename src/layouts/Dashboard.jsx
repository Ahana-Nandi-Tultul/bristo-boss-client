import { FaHome, FaCalendarAlt, FaShoppingCart, FaUtensils, FaBook, FaUsers } from "react-icons/fa";
import { BiSolidMessageAltDots } from "react-icons/bi";
import { GiWallet, GiNotebook } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet></Outlet>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-72 min-h-full bg-[#D1A054] text-base-content space-y-2">
            {/* Sidebar content here */}
            {
                isAdmin ? <>
                <NavLink className="uppercase flex gap-2 text-lg items-center" to="/dashboard/home"><FaHome/> Admin Home</NavLink>
                <NavLink className="uppercase flex gap-2 text-lg items-center" to="/dashboard/reservation"><FaUtensils/> Add Items</NavLink>
                <NavLink className="uppercase flex gap-2 text-lg items-center" to="/dashboard/paymentHistory"><GiWallet/> Manage Items</NavLink>
                <NavLink className="uppercase flex gap-2 text-lg items-center" to="/dashboard/cart"><FaBook/> Manage Booking</NavLink>
                <NavLink className="uppercase flex gap-2 text-lg items-center" to="/dashboard/myReviews"><BiSolidMessageAltDots/> Add Review</NavLink>
                <NavLink className="uppercase flex gap-2 text-lg items-center" to="/dashboard/allUsers"><FaUsers/> All Users</NavLink>
                
                </> : 
                <>
                    <NavLink className="uppercase flex gap-2 text-lg items-center" to="/dashboard/home"><FaHome/> User Home</NavLink>
                    <NavLink className="uppercase flex gap-2 text-lg items-center" to="/dashboard/reservation"><FaCalendarAlt/> Reservation</NavLink>
                    <NavLink className="uppercase flex gap-2 text-lg items-center" to="/dashboard/paymentHistory"><GiWallet/> Payment History</NavLink>
                    <NavLink className="uppercase flex gap-2 text-lg items-center" to="/dashboard/cart"><FaShoppingCart/> MyCart</NavLink>
                    <NavLink className="uppercase flex gap-2 text-lg items-center" to="/dashboard/myReviews"><BiSolidMessageAltDots/> Add Review</NavLink>
                    <NavLink className="uppercase flex gap-2 text-lg items-center" to="/dashboard/myBooking"><GiNotebook/> My Booking</NavLink>
                </>
            }
            
            <div className="divider"></div>

            <NavLink className="uppercase flex gap-2 text-lg items-center" to="/"><FaHome/> Home</NavLink>
            <NavLink className="uppercase flex gap-2 text-lg items-center" to="/menu"><FaHome/> Menu</NavLink>
            <NavLink className="uppercase flex gap-2 text-lg items-center" to="/"><FaHome/> Shop</NavLink>
            <NavLink className="uppercase flex gap-2 text-lg items-center" to='/contact'><FaHome/> Contact</NavLink>

            </ul>
        
        </div>
        </div>
    );
};

export default Dashboard;