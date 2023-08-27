import { BsBoxArrowUp, BsShield } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import PendingShipBadge from "../PendingShipBadge";
import { RxDotFilled } from "react-icons/rx";

const ProductDetailsComponent = ({ data, toggleDrawer }) => {
  const percentageReduction =
    ((data?.regularPrice - data?.salePrice) / data?.regularPrice) * 100;

  const percentageFloor = Math.floor(percentageReduction);

  const date = new Date();
  // console.log("pp", percentageFloor);
  return (
    <div className="flex flex-col gap-y-2 mt-4 lg:mt-0">
      {data && (
        <>
          <h3 className="font-bold text-2xl lg:text-xl">{data?.category}</h3>
          <p className="text-gray-500">{data?.sku}</p>
          <p className="flex items-center -ml-1 text-sm font-medium">
            <RxDotFilled size={30} color="green" />
            In Stock
          </p>
          {/* <p className="flex items-center -ml-1 text-sm">
              <RxDotFilled size={30} color="#820000" />
              Out of Stock
            </p> */}
          <div className="flex items-center gap-2">
            <p className="font-bold text-bold text-xl">
              BDT {data?.salePrice}/-
            </p>
            <p className="line-through text-sm font-medium">
              BDT {data?.regularPrice}/-
            </p>
            <PendingShipBadge text={`${percentageFloor}%`} />
          </div>
          <button
            className="text-blue-500 flex items-center gap-1"
            onClick={toggleDrawer}
          >
            <BsBoxArrowUp />
            Size Chart
          </button>
          <div className="flex items-center gap-2">
            {data?.size?.map((data) => (
              <button
                key={data}
                className="px-2 py-1 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-300 hover:text-gray-600 font-normal"
              >
                {data}
              </button>
            ))}
          </div>

          <h2 className="font-medium">Color</h2>
          <div className="flex items-center gap-2">
            {data?.variant?.map((data) => (
              <button
                key={data}
                className="px-2 py-1 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-300 hover:text-gray-600 font-normal"
              >
                {data?.color}
              </button>
            ))}
            <button className="px-2 py-1 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-300 hover:text-gray-600 font-normal">
              PINK
            </button>
          </div>

          <h2 className="font-medium">Quantity</h2>
          <div className="flex items-center">
            <button className=" text-gray-500 border border-gray-300  hover:bg-gray-300 hover:text-gray-600 font-bold w-8 h-8 text-xl">
              -
            </button>
            <p className="text-gray-500 border border-gray-300 font-normal w-8 h-8 flex justify-center items-center">
              1
            </p>
            <button className="text-gray-500 border border-gray-300  hover:bg-gray-300 hover:text-gray-600 font-bold w-8 h-8 text-xl">
              +
            </button>
          </div>

          <p className="flex items-center gap-1 justify-center bg-gray-100 py-1 text-sm font-medium">
            <TbTruckDelivery /> Estimated Shipping Date: 10,jun
          </p>

          <button className="w-full text-white flex justify-center items-center bg-gray-800 hover:bg-black gap-1 py-2 font-medium">
            <HiShoppingBag size={20} /> Add To Cart
          </button>

          {/* <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg mb-2"
        >
          <input type="checkbox" />
          <button className="collapse-title text-xl font-medium text-left">
            <span className="flex items-center">
              <FaFemale /> Product Description
            </span>
          </button>
          <div className="collapse-content">
            <p>
              <span>Outfit Type: </span>
              <span>Eastern</span>
            </p>
            <p>
              <span>Style: </span>
              <span>Frock</span>
            </p>
            <p>
              <span>Package Include: </span>
              <span>1 Piece -Top</span>
            </p>
            <p>
              <span>Fabric: </span>
              <span>OrganzaColor: BrownWork Technique: </span>
            </p>
            <ul>
              <li>{`Long Printed Organza frock style with Flair 160" round`}</li>
              <li>Dyed raw silk bottom</li>
              <li>Printed Organza Dupatta</li>
              <li>{`Model is wearing Small Size with the Height 5’5`}</li>
            </ul>
            <p>
              <span>Disclaimer: </span>
              <span>The color of the outfit may vary due to lighting</span>
            </p>
            <p>effect use in photography</p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg"
        >
          <input type="checkbox" />
          <button className="collapse-title text-xl font-medium text-left">
            <span className="flex items-center gap-1">
              <BsShield /> Customer Protection
            </span>
          </button>
          <div className="collapse-content">
            <div className="grid grid-cols-2 gap-2">
              <span className="flex items-center gap-1">
                <BsShield /> Worldwide Delivery
              </span>
              <span className="flex items-center gap-1">
                <BsShield /> Safe Payment
              </span>
              <span className="flex items-center gap-1">
                <BsShield /> Return Policy
              </span>
              <span className="flex items-center gap-1">
                <BsShield /> Nazaara Commitment
              </span>
            </div>
          </div>
        </div>
      </div> */}
        </>
      )}
    </div>
  );
};

export default ProductDetailsComponent;
