import TopBar from "@/components/TopBar";
import ProductContent from "@/components/shop/ProductContent";
import { FaBox } from "react-icons/fa";

const Products = () => {
  return (
    <main>
      <TopBar title={"SHOP"} icon={<FaBox />} />
      <ProductContent />
    </main>
  );
};

export default Products;
