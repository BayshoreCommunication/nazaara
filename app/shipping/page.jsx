import TopBar from "@/components/TopBar";
import { FaTruck } from "react-icons/fa";

export const metadata = {
  title: "Shipping",
};

const ShippingDelivery = () => {
  return (
    <main>
      <TopBar icon={<FaTruck />} title={"SHIPPING & DELIVERY"} />
      <div className="main-container mt-10 text-center flex flex-col items-center gap-y-6">
        <h1 className="text-xl font-medium text-gray-700">Delivery Time</h1>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-gray-300 py-1 px-8 text-sm">
            <p className="font-medium">Ready Size</p>
            <p>2-4 Days</p>
          </button>
          <button className="bg-gray-300 py-1 px-8 text-sm">
            <p className="font-medium">Unstitched</p>
            <p>2-4 Days</p>
          </button>
          <button className="bg-gray-300 py-1 px-8 text-sm">
            <p className="font-medium">Customized Size</p>
            <p>5-7 Days</p>
          </button>
        </div>
        <p>
          * For international orders, delivery timeline may fluctuate ± 2 weeks{" "}
          <br />
          **This is standard delivery timeline. However, based on the
          availability of slots, nature of order (normal/fast track) <br /> and
          season of order placement, the delivery time frame can vary.
        </p>
        <h2 className="text-xl font-medium text-gray-700">Customs & Duties</h2>
      </div>
      <div className="main-container mt-4">
        <p>
          {`Customs Duty is a tariff or tax imposed on goods when transported
          across international borders. The purpose of Customs Duty is to
          protect each country's economy, residents, jobs, environment, etc., by
          controlling the flow of goods, into and out of the country. Although
          the global customers order and purchase the goods online, the goods
          are still subject to an import procedure to clear the shipment through
          customs. Clearance depends on:`}
        </p>
        <ul className="mb-10 mt-4 ml-10 list-disc">
          <li>The country of origin</li>
          <li>The value including transport charges</li>
          <li>The quantity of goods</li>
        </ul>
      </div>
    </main>
  );
};

export default ShippingDelivery;
