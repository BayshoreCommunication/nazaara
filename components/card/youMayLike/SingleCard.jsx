import PendingShipBadge from "@/components/PendingShipBadge";
import PercentageBadge from "@/components/PercentageBadge";
import ReadyToShipBadge from "@/components/ReadyToShipBadge";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleCard = () => {
  return (
    <div>
      <Link href="/products/1236">
        <div className="relative">
          <Image
            src="/images/products/you_may_like.png"
            alt="bridal_top"
            width={326}
            height={461}
            className="w-full rounded-[4px]"
          />
          <div className="absolute top-2 left-2">
            <PercentageBadge text="-30%" />
          </div>
        </div>
      </Link>
      <div className="w-full text-left bg-white my-4 ">
        <div className="flex items-center gap-2">
          <p className="text-md font-bold text-gray-700">BDT 5,380/-</p>
          <p className="text-sm font-semibold line-through text-gray-500">
            BDT 6,380/-
          </p>
        </div>
        <p className="text-xs font-semibold my-2 text-gray-500">
          DW-JP/00021 MAROON
        </p>
        <ReadyToShipBadge text="Ready to Ship" />
        {/* <PendingShipBadge text="Up to 2 weeks" /> */}
      </div>
    </div>
  );
};

export default SingleCard;
