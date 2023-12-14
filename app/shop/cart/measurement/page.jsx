import Navigation from "@/components/paymentNav/Navigation";
import CreateMeasurementForm from "@/components/shop/CreateMeasurementForm";

const Measurement = ({ searchParams }) => {
  console.log("serarchaparams", searchParams);
  return (
    <div className="main-container flex flex-col gap-y-6 my-6 lg:my-20">
      <Navigation />
      <p className="text-center text-gray-600">
        ***All measurements should be taken in inch
      </p>
      <CreateMeasurementForm searchParams={searchParams} />
    </div>
  );
};

export default Measurement;
