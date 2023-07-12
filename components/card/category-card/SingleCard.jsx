import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleCard = () => {
  return (
    <div>
      <Link href="/" className="relative">
        <Image
          src="/images/category/bridal_top.png"
          alt="bridal_top"
          width={338}
          height={438}
          className="border-4 border-secondary-color brightness-75 hover:brightness-100 transition-all duration-500 w-full"
        />
        <div className="absolute bottom-10 w-full text-center">
          <p className="text-secondary-color text-lg font-semibold">CROP TOP</p>
          <p className="text-xs text-white">SHOP NOW</p>
        </div>
      </Link>
    </div>
  );
};

export default SingleCard;
