import useFetch from "./Hooks/useFetch";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import MyLocation from "./Hooks/useLocation";

function App() {
  const { products, loading } = useFetch();
  const { location } = MyLocation();
  console.log(location);

  return (
    <>
      <header>
        {/* top part */}
        <div className="w-max-[1920px] lg:h-[60px] md:h-[50px] h-auto flex-wrap md:flex-nowrap bg-amazon_blue px-6 py-1 flex flex-shrink justify-around gap-3 md:gap-9 items-start">
          {/* logo */}
          <div className=" mx-2 w-max-[120px] h-max-[60] navBtns">
            <img
              className="py-1 object-contain h-12"
              src="https://pngimg.com/d/amazon_PNG11.png"
              alt="Amazon logo"
            />
          </div>
          {/* location for shipping */}
          <div className="navBtns hidden lg:flex">
            <p className="line-clamp-2">
              Delivery to
              <br />
              {location.country}
            </p>
          </div>
          {/* search bar */}
          <div className="flex rounded-md md:h-[45px] h-full flex-grow overflow-hidden  ">
            <select
              name="categories"
              defaultValue={"all"}
              id="categories"
              className="w-[50px] p-2 cursor-pointer"
            >
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="books">Books</option>
              <option value="clothes">Clothes</option>
              <option value="shoes">Shoes</option>
            </select>
            <input
              className="p-2 w-96 flex flex-grow focus:outline-none"
              type="text"
              placeholder="Search your Amazon product"
            />
            <button className="bg-[#e7b068] w-[45px] p-2 flex justify-center items-center transition-all duration-200 hover:bg-[#F3A847]">
              <MagnifyingGlassIcon className={" w-6 h-6"} />
            </button>
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
          <div className="navBtns">
            <p>Cart</p>
          </div>
        </div>
        {/* bottom part */}
        <div className="w-max-[1920px] h-[30px] flex  gap-9 text-white overflow-x-scroll    bg-amazon_blue-light">
          {/* all */}
          <div>{/* sandwich icon */}|||</div>
          {/* categories */}
          <p>Best Sellers</p>
          <p>Today's Deals</p>
          <p>Customer Service</p>
          <p>New Releases</p>
          <p>Find a Gift</p>
          <p>Registry</p>
          <p>Gift Cards</p>
          <p>Amazon Basics</p>
          <p>Sell</p>
        </div>
      </header>

      {/* {movies?.map((movie) => {
        return <p key={movie?.id}>{movie?.name || movie?.original_title}</p>;
      })} */}
    </>
  );
}

export default App;
