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
        <div className="w-[1920] bg-amazon_blue">
          {/* top part */}
          {/* logo */}
          <div>
            <img
              src="https://pngimg.com/d/amazon_PNG11.png"
              alt="Amazon logo"
            />
          </div>
          {/* location for shipping */}
          <div></div>
          {/* search bar */}
          <div>
            <select name="" id="">
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="books">Books</option>
              <option value="clothes">Clothes</option>
              <option value="shoes">Shoes</option>
            </select>
            <input type="text" placeholder="Search your Amazon product" />
            <button>
              <MagnifyingGlassIcon className={" w-4 h-4"} />
            </button>
          </div>
          {/* Language */}
          <div></div>
          {/* Login */}
          <div></div>
          {/* orders and returns */}
          <div></div>
          {/* Cart */}
          <div></div>
        </div>
      </header>
      ;
      {/* {movies?.map((movie) => {
        return <p key={movie?.id}>{movie?.name || movie?.original_title}</p>;
      })} */}
    </>
  );
}

export default App;
