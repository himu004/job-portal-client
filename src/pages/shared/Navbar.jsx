import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import { IoMdLogOut } from "react-icons/io";
import logo from "../../assets/job-portal-logo.svg";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);


  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign out successfully");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "User Signed Out Successfully",
        })
      })
      .catch((error) => {
        console.log("Sign out error", error);
      });
  }

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
    </>
  );
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">
        <img className="w-10" src={logo} alt="Logo" />
          Job Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <>
            <button 
            onClick={handleSignOut}
            className="btn btn-outline btn-info btn-sm">
              Sign Out
              <IoMdLogOut className="text-red-500 text-lg" />
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className="btn btn-outline btn-info btn-sm">
              Register
            </Link>
            <Link to="/signin" className="btn btn-outline btn-error btn-sm">
              Sign in
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
