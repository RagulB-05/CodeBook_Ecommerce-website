import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../sections/Search";
import DropdownLoggedin from "../elements/DropdownLoggedin";
import DropdownLoggedout from "../elements/DropdownLoggedout";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"));
  const { cartList } = useCart();
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-10 rounded-b-md">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-10" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex items-center relative">
            <span
              onClick={() => {
                setDarkMode(!darkMode), setSearchBar(false), setDropdown(false);
              }}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"
            ></span>
            <span
              onClick={() => {
                setSearchBar(!searchBar), setDropdown(false);
              }}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span
                onClick={() => {
                  setSearchBar(false), setDropdown(false);
                }}
                className="text-2xl bi bi-cart-fill relative"
              >
                <span className="text-white text-sm absolute -top-1 left-3 bg-rose-500 px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              onClick={() => {
                setSearchBar(false), setDropdown(!dropdown);
              }}
              className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
            ></span>
            {dropdown &&
              (token ? (
                <DropdownLoggedin
                  setDropdown={setDropdown}
                  dropdown={dropdown}
                />
              ) : (
                <DropdownLoggedout
                  setDropdown={setDropdown}
                  dropdown={dropdown}
                />
              ))}
          </div>
        </div>
      </nav>
      {searchBar && <Search setSearchBar={setSearchBar} />}
    </header>
  );
};

export default Header;
