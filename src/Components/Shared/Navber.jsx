import { Link, NavLink } from "react-router-dom";
import defaultUserPhoto from '../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navber = () => {
    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/career'}>Career</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
    </>

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            })
    };

    return (
        <div className="navbar bg-base-100 w-full mx-0 px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex justify-center items-center">
                    <div className="w-fit p-2 rounded-full hover:cursor-pointer hover:bg-gray-100">
                        <img className="rounded-full w-10 h-10" alt="User-logo" src={defaultUserPhoto} />
                    </div>
                </div>
                {
                    user ?
                        <button onClick={handleLogOut} className="btn bg-[#1E1E1E] text-white text-lg px-8 rounded-sm">Log out</button> :
                        <Link to={'/login'}><button className="btn bg-[#1E1E1E] text-white text-lg px-8 rounded-sm">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navber;