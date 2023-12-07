import Link from "next/link";
import React from "react";

async function getRegularSaleData() {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/sale/web/category/6538d081e59098ac82de1d63`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const NavLink = async () => {
  const regularSale = await getRegularSaleData();
  // console.log("regularSale", regularSale);
  return (
    <div className="flex flex-[1.5] lg:gap-x-14 xl:gap-x-20 2xl:gap-x-32">
      {/* SALE  */}
      <ul className="flex flex-col gap-y-2">
        <p className="text-primary-color font-semibold">SALE</p>
        <div className="flex flex-col gap-y-2">
          <Link
            href={`/recommended-products`}
            // href={`/recommended-products?category=${elem.navCategoryTitle}&sale=${sale.saleTitle}`}
            className="hover:text-primary-color hover:underline underline-offset-2"
          >
            NEW ARRIVALS
          </Link>
          <Link
            href={`/recommended-products`}
            // href={`/recommended-products?category=${elem.navCategoryTitle}&sale=${sale.saleTitle}`}
            className="hover:text-primary-color hover:underline underline-offset-2"
          >
            READY TO SHIP
          </Link>
        </div>
      </ul>
      {/* SUBCATEGORY  */}
      <ul className="flex flex-col gap-y-2">
        <li className="text-primary-color font-semibold">SHOP BY CATEGORY</li>
        <ul className="flex flex-col gap-y-2">
          <Link
            className="hover:text-primary-color hover:underline underline-offset-2"
            href={`/products/categories`}
            // href={`/products/categories/${category.category}`}
          >
            DESIGNER WEAR
          </Link>
          <Link
            className="hover:text-primary-color hover:underline underline-offset-2"
            href={`/products/categories`}
            // href={`/products/categories/${category.category}`}
          >
            READY TO SHAREE
          </Link>
        </ul>
      </ul>
      {/* FESTIVAL  */}
      <ul className="flex flex-col gap-y-2">
        <li className="text-primary-color font-semibold">SHOP BY FESTIVAL</li>
        <ul className="flex flex-col gap-y-2">
          <Link
            className="hover:text-primary-color hover:underline underline-offset-2"
            href={`/products/categories`}
            // href={`/products/categories/${category.category}`}
          >
            ENGAGEMENT
          </Link>
          <Link
            className="hover:text-primary-color hover:underline underline-offset-2"
            href={`/products/categories`}
            // href={`/products/categories/${category.category}`}
          >
            NIKKAH
          </Link>
        </ul>
      </ul>
    </div>
  );
};

export default NavLink;
