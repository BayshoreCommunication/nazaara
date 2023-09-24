import Image from "next/image";
import { FaGift } from "react-icons/fa";

const EGift = () => {
  return (
    <div className="container">
      <h1 className="flex items-center justify-center gap-x-2 h-28 border-b-2 text-2xl font-medium text-gray-800">
        <FaGift />
        EGift Cards
      </h1>
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
        <div className="flex flex-1 flex-col gap-y-6 text-center">
          <h2 className="uppercase text-lg">
            LAST MINUTE GIFT EASIER THAN EVER
          </h2>
          <p className="uppercase text-sm font-medium">
            virtual gift cards make giving a last minute gift easier than ever.
            Just buy an eGift card on nazaara and send it via email.
          </p>
          <p className="uppercase text-lg">HOW TO ORDER</p>
          <p className="uppercase text-sm">
            to buy a Egift card contact us on our facebook page or you can also
            send a text on whatsapp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EGift;
