import React from "react";
import useFetch from "../Hooks/useFetch";
import {
  MagnifyingGlassIcon,
  Bars4Icon,
  ShoppingCartIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import MyLocation from "../Hooks/useLocation";
import { useSelector, useDispatch } from "react-redux";
import { changeSelection } from "../Slices/CatSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const categories = useFetch("https://fakestoreapi.com/products/categories");
  const { location } = MyLocation();
  const categorySelected = useSelector((state) => state.cat.selection);
  const cart = useSelector((state) => state.cart.items.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <header>
      {/* top part */}
      <div className="w-max-[1920px] lg:h-[60px] md:h-[50px] h-auto flex-wrap md:flex-nowrap bg-amazon_blue px-6 py-1 flex flex-shrink justify-around gap-3 md:gap-9 items-start">
        {/* logo */}
        <div
          className=" mx-2 w-max-[120px] h-max-[60] navBtns"
          onClick={() => navigate("/")}
        >
          <img
            className="py-1 object-contain h-12"
            src="https://pngimg.com/d/amazon_PNG11.png"
            alt="Amazon logo"
          />
        </div>
        {/* location for shipping */}
        <div className="navBtns hidden lg:flex">
          <MapPinIcon className="w-6 h-6" />
          <p className="line-clamp-2">
            Delivery to
            <br />
            {location.country}
          </p>
        </div>
        {/* search bar */}
        <div className="flex rounded-md md:h-[45px] h-full flex-grow overflow-hidden ">
          <select
            name="categories"
            defaultValue="electronics"
            defaultChecked="electronics"
            id="categories"
            className="w-[50px] sm:w-auto p-2 cursor-pointer"
            onChange={(e) => {
              dispatch(changeSelection(e.target.value));
            }}
          >
            <option value="all" id="all" name="all">
              All
            </option>
            {categories.response.map((category) => (
              <option
                selected={category === categorySelected ? true : false}
                key={category}
                id={category}
                name={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
          <input
            className="p-2 w-min-[50px] flex flex-grow focus:outline-none"
            type="text"
            placeholder="Search your Amazon product"
          />
          <div className="bg-[#e7b068] w-auto p-2 flex justify-center items-center transition-all duration-200 hover:bg-[#F3A847] cursor-pointer">
            <MagnifyingGlassIcon className={" w-6 h-6"} />
          </div>
        </div>
        {/* Language */}
        <div className="navBtns hidden lg:flex">
          <select
            name="lang"
            defaultValue={"EN"}
            id="lang"
            className="border-none bg-amazon_blue "
          >
            <option value="EN">EN</option>
            <option value="MK">MK</option>
          </select>
        </div>
        {/* Login */}
        <div className=" navBtns">
          <p>Hello, sign in</p>
        </div>
        {/* orders and returns */}
        <div className="navBtns hidden lg:flex">
          <p>Orders & returns</p>
        </div>
        {/* Cart */}
        <div className="navBtns" onClick={() => navigate("/cart")}>
          {cart > 0 && <p>{cart}</p>}
          <ShoppingCartIcon className="w-7 h-7" />
        </div>
      </div>
      {/* bottom part */}
      <div className="w-max-[1920px] scrollbar-hide p-1 flex items-center justify-start gap-7 h-[35px]  text-white overflow-x-scroll lg:overflow-hidden flex-shrink-0   bg-amazon_blue-light">
        {/* all */}
        <div>
          <Bars4Icon className="w-7 h-7 navBtns" />
        </div>
        {/* categories */}
        <div className="whitespace-nowrap navBtns">
          <p>Best Sellers</p>
        </div>
        <div className="whitespace-nowrap navBtns">
          <p>Today's Deals</p>
        </div>
        <div className="whitespace-nowrap navBtns">
          <p>Customer Service</p>
        </div>
        <div className="whitespace-nowrap navBtns">
          <p>New Releases</p>
        </div>
        <div className="whitespace-nowrap navBtns">
          <p>Find a Gift</p>
        </div>
        <div className="whitespace-nowrap navBtns">
          <p>Registry</p>
        </div>
        <div className="whitespace-nowrap navBtns">
          <p>Gift Cards</p>
        </div>
        <div className="whitespace-nowrap navBtns">
          <p>Amazon Basics</p>
        </div>
        <div className="whitespace-nowrap navBtns">
          <p>Sell</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
