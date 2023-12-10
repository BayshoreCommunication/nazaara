const ShopButton = ({ text }) => {
  return (
    <button className="px-2 py-1 rounded-md bg-primary-color hover:bg-primary-hover-color text-white">
      {text}
    </button>
  );
};

export default ShopButton;
