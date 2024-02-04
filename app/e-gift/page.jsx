import TopBar from "@/components/TopBar";
import Image from "next/image";
import { FaGift } from "react-icons/fa";

export const metadata = {
  title: "E-Gift",
};

const EGift = () => {
  return (
    <main>
      <TopBar icon={<FaGift />} title={"EGift Cards"} />
      <div className="main-container">
        <div className="my-10 flex flex-col lg:flex-row items-center gap-y-10">
          <div className="flex-1">
            <Image
              src="/images/e-gift-cart.png"
              width={1000}
              height={500}
              alt="Nazaara E-gift Cart"
              className="w-[34rem]"
            />
            <Image
              src="/images/e-gift-voucher.png"
              width={1000}
              height={500}
              alt="Nazaara E-gift Voucher"
              className="w-[34rem]"
            />
          </div>
          <div className="flex flex-1 flex-col gap-y-6 text-center text-gray-800">
            <h2 className="uppercase text-lg">
              LAST MINUTE GIFT EASIER THAN EVER
            </h2>
            <p className="uppercase text-sm font-medium">
              virtual gift cards make giving a last minute gift easier than
              ever. Just buy an eGift card on nazaara and send it via email.
            </p>
            <p className="uppercase text-lg">HOW TO ORDER</p>
            <p className="uppercase text-sm">
              to buy a Egift card contact us on our facebook page or you can
              also send a text on whatsapp.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EGift;
