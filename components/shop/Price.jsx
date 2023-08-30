import ShopButton from "./ShopButton";
import ToogleButton from "./ToogleButton";

const Price = () => {
  return (
    <div className="group relative z-10">
      <ToogleButton title="Price" />
      <div className="h-2 w-24"></div>
      <div className="hidden group-hover:block absolute top-11 bg-white w-96 rounded-lg box-shadow">
        <h4 className="text-center my-2 text-lg font-semibold">Price</h4>
        <hr />
        <div className="py-3 px-4 flex flex-col gap-y-3">
          <div className="flex gap-2 flex-wrap justify-between">
            <div className="border border-gray-300 p-2 rounded-md hover:bg-gray-200 hover:border-gray-200">
              Min: {0}
            </div>
            <div className="border border-gray-300 p-2 rounded-md hover:bg-gray-200 hover:border-gray-200">
              Max: {200000}
            </div>
          </div>
          <div className="relative">
            <label
              for="default-range"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price Range
            </label>
            <input
              type="range"
              className="w-full"
              min={0}
              max={300000}
              step={10}
              onChange={(event) => console.log("event", event.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
