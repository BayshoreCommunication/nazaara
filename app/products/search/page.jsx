import SearchProduct from "@/components/SearchProduct/SearchProduct";
import TopBar from "@/components/TopBar";
import React from "react";
import { FaGift } from "react-icons/fa";

const SearchProductPage = () => {
  return (
    <main>
      <TopBar title={`Search Product`} icon={<FaGift />} />
      <div>
        <SearchProduct />
      </div>
    </main>
  );
};

export default SearchProductPage;
