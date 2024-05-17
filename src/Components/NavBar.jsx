import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import useAuth from "../Hooks/useAuth";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

const NavBar = () => {
  const { logOut, user, loading } = useAuth();
  const [photo, setPhoto] = useState(null);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleLogout = () => {
    logOut().then(() => {
      toast.success("Logout Successful", {
        position: "top-center",
      });
    });
  };

  useEffect(() => {
    if (user && user.photoURL) {
      setPhoto(user.photoURL);
    } else {
      setPhoto("https://i.ibb.co/S6FCDcL/image.png");
    }
  }, [loading]);

  useEffect(() => {
    themeEnabler()
  }, [theme]);

  const themeEnabler =()=> {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }


  return (
    <div className="navbar bg-[#295C7B] dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden bg-teal-500 hover:bg-teal-600 px-3"
          >
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
            className="menu menu-sm dropdown-content mt-3 z-[55] p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className="block py-2 px-4 hover:bg-teal-500 hover:text-white"
              >
                Home
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to="/all-books"
                    className="block py-2 px-4 hover:bg-teal-500 hover:text-white"
                  >
                    Books List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/add-book"
                    className="block py-2 px-4 hover:bg-teal-500 hover:text-white"
                  >
                    Add Your Book
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/borrowed-books"
                    className="block py-2 px-4 hover:bg-teal-500 hover:text-white"
                  >
                    Borrowed Books
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <NavLink
          to="/"
          className="text-base font-bold text-white dark:text-white uppercase ml-4"
        >
          Library Hub
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 text-white uppercase font-bold space-x-6">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-4 bg-teal-500 text-white rounded-lg"
                  : "block py-2 px-4 hover:bg-teal-500 hover:text-white rounded-lg"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-4 bg-teal-500 text-white rounded-lg"
                  : "block py-2 px-4 hover:bg-teal-500 hover:text-white rounded-lg"
              }
              to={"/all-books"}
            >
              Books List
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  to="/add-book"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-4 bg-teal-500 text-white rounded-lg"
                      : "block py-2 px-4 hover:bg-teal-500 hover:text-white rounded-lg"
                  }
                >
                  Add A Book
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/borrowed-books"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-4 bg-teal-500 text-white rounded-lg"
                      : "block py-2 px-4 hover:bg-teal-500 hover:text-white rounded-lg"
                  }
                >
                  Borrowed Books
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end space-x-1 md:space-x-4 lg:space-x-4">
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={(e) => {
                setTheme(e.target.checked ? "dark" : "light");
              }}
              checked={theme === "light" ? false : true}
              className="hidden"
            />
            <img src={sun} alt="light" className="w-8 h-8 swap-on" />
            <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>
        {user ? (
          <>
            <button
              onClick={handleLogout}
              className="text-white btn bg-teal-500 border-0 hover:bg-teal-600 hover:border-0"
            >
              Logout
            </button>
            <Tooltip id="my-tooltip" className="z-50" />
            <div className="avatar online">
              <div
                className="w-12 rounded-full z-55"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName || "Unnamed"}
                data-tooltip-place="bottom-end"
              >
                {photo && <img src={photo} alt="User Avatar" />}
              </div>
            </div>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="text-white btn bg-teal-500 border-0 hover:bg-teal-600 hover:border-0"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="text-white btn bg-teal-500 border-0 hover:bg-teal-600 hover:border-0"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
