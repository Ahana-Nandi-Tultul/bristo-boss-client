import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    const navLink = <>
        <li><Link className='uppercase'>Home</Link></li>
        <li><Link className='uppercase'>CONTACT us</Link></li>
        <li><Link className='uppercase'>DASHBOARD</Link></li>
        <li><Link className='uppercase'>Our Menu</Link></li>
        <li><Link className='uppercase'>Our Shop</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
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
                <div className="navbar-end">
                    <div className='hidden lg:flex'>

                        <ul className="menu menu-horizontal ms-auto px-1 ">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;