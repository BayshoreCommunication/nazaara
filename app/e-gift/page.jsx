import Image from "next/image";
import { FaGift } from "react-icons/fa";

const EGift = () => {
  return (
    <div>
      <h1 className="flex items-center justify-center gap-x-2 h-28 border-b-2 text-2xl font-medium text-gray-600">
        <FaGift />
        EGift Cards
      </h1>
      <div className="container my-10 flex flex-col items-center gap-y-8">
        <h1 className="text-2xl font-medium text-gray-600">JOIN OUR TEAM</h1>
        <div className="text-center">
          <p className="text-md font-medium text-gray-500">
            Send Your CV Today At <br /> anzaralifestyleltd@gmail.com
          </p>
        </div>
        <Image
          src="/images/career-nazara.png"
          width={613}
          height={278}
          alt="career nazaara"
        />
      </div>
    </div>
  );
};

export default EGift;
