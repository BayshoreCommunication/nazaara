import PaymentFailed from "@/components/Lottie/paymentFailed";

const page = () => {
  return (
    <div>
      <PaymentFailed />
      <div className="text-center text-gray-700 text-lg font-semibold -translate-y-10">
        <p>Unfortunately your payment is failed!</p>
        <p>Please try again!</p>
      </div>
    </div>
  );
};

export default page;
