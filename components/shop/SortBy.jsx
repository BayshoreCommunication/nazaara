import { BiSort } from "react-icons/bi";
import ShopButton from "./ShopButton";

const SortBy = () => {
  return (
    <div className="group relative">
      <button className="flex gap-1 items-center  bg-gray-200 py-2  lg:px-4 rounded-full font-medium min-w-full justify-center">
        <BiSort size={20} /> Sort By
      </button>
      <div className="h-2 w-24"></div>
      <div className="hidden group-hover:block absolute z-10 top-11 lg:right-0 bg-white w-80 left-0 lg:left-auto lg:w-96 rounded-lg box-shadow">
        <h4 className="text-center my-2 text-lg font-semibold">SortBy</h4>
        <hr />
        <div className="py-3 px-4 flex flex-col gap-y-3">
          <div>
            <form className="">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="w-full p-2 pl-10 text-sm text-gray-900 rounded-full bg-gray-100 outline-none h-8"
                  placeholder="Search Brand"
                  required
                />
              </div>
            </form>
          </div>
          <div className="flex gap-2 flex-wrap">
            <ShopButton text="F&F Store" />
            <ShopButton text="Fashionholic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortBy;
