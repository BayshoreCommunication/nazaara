import TopBar from "@/components/TopBar";
import Navigation from "@/components/paymentNav/Navigation";
import ProductContent from "@/components/shop/ProductContent";
import { FaBox } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const Products = () => {
  return (
    <main>
      <TopBar title={"SHOP"} icon={<FaBox />} />
      <Navigation
        link3Title={"Shop"}
        link3Icon={
          <span className="mb-0.5">
            <FaBagShopping />
          </span>
        }
      />
      <ProductContent />
    </main>
  );
};

export default Products;
