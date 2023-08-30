import ToogleButton from "./ToogleButton";
const sizes = [
  "34",
  "36",
  "38",
  "40",
  "42",
  "44",
  "46",
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
];

const Size = ({ setCurrentSize }) => {
  return (
    <div className="group relative z-10">
      <ToogleButton title="Size" />
      <div className="h-2 w-24"></div>
      <div className="hidden group-hover:block absolute top-11 bg-white w-96 rounded-lg box-shadow">
        <h4 className="text-center my-2 text-lg font-semibold">Size</h4>
        <hr />
        <div className="py-3 px-4 flex gap-2 flex-wrap">
          {sizes.map((elem, i) => (
            <button
              className="border border-gray-300 p-2 rounded-md hover:bg-gray-200 hover:border-gray-200"
              key={i}
              onClick={() => setCurrentSize(elem)}
            >
              {elem}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Size;
