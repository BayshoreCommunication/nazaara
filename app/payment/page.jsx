import Navigation from "@/components/paymentNav/Navigation";

export const metadata = {
  title: "Payment",
};

const Payment = () => {
  return (
    // <div className="payment-container flex gap-10">
    //   <div className="py-20 flex-1">
    //     <Image
    //       src="/images/payment-logo.png"
    //       alt="My Image"
    //       width={260}
    //       height={200}
    //       className="mb-2"
    //     />
    //     <Navigation />
    //     <div className="mt-8">
    //       <form className="w-full flex flex-col gap-y-9">
    //         <div className="border rounded-md p-4 flex flex-col">
    //           <div className="flex justify-between border-b pb-2">
    //             <p className="text-gray-600 flex-1">Contact</p>
    //             <p className="text-start flex-1">Nj Milon</p>
    //             <button>Change</button>
    //           </div>
    //           <div className="flex justify-between border-b pb-2">
    //             <p className="text-gray-600 flex-1">Email</p>
    //             <p className="text-start flex items-center flex-1">
    //               njmilon1@gmail.com
    //             </p>
    //             <button>Change</button>
    //           </div>
    //           <div className="flex justify-between border-b pb-2">
    //             <p className="text-gray-600 flex-1">Ship To</p>
    //             <p className="text-start flex items-center flex-1">
    //               Dhaka, Dhaka 1212, Bangladesh
    //             </p>
    //             <button>Change</button>
    //           </div>
    //           <div className="flex justify-between border-b pb-2">
    //             <p className="text-gray-600 flex-1">Method</p>
    //             <p className="text-start flex-1">Standard Shipping</p>
    //             <p>change</p>
    //           </div>
    //         </div>

    //         <div className="flex gap-5 items-center">
    //           {/* <Link href={`/measurement`}>
    //             <Button text="Continue to Measurement" />
    //           </Link> */}
    //           <Link href={`/measurement`} className="flex gap-1 items-center">
    //             <AiOutlineRollback /> Return to Mesurement
    //           </Link>
    //         </div>
    //         <div>
    //           <Image
    //             src="/images/payment.png"
    //             alt="payment"
    //             width={600}
    //             height={500}
    //           />
    //         </div>
    //       </form>

    //       <div className="pt-4 border-t-2 border-gray-200 mt-10 flex gap-x-4 text-gray-500 text-sm">
    //         <Link href="/return-exchange">Refund Policy</Link>
    //         <Link href="/shipping">Shipping Policy</Link>
    //         <Link href="/privacy-policy">Privacy Policy</Link>
    //         <Link href="/terms-of-use">Terms of use</Link>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex-1 bg-primary-color">
    //     <div className="text-white payment-container-end mt-20 ml-10 text-sm">
    //       <div className="flex justify-between items-center pb-7 border-b mb-7">
    //         <div className="flex gap-4 items-center relative">
    //           <Image
    //             src="/images/products/details.png"
    //             alt="bridal_top"
    //             width={60}
    //             height={40}
    //             className="rounded-sm w-[4rem] h-[4.8rem]"
    //           />
    //           <div className="flex justify-center items-center bg-white rounded-full w-5 h-5 absolute -top-[8px] left-[50px]">
    //             <p className="text-primary-color text-xs font-semibold">1</p>
    //           </div>
    //           <div>
    //             <p>Lehenga</p>
    //             <p>XL</p>
    //           </div>
    //         </div>
    //         <p>BDT 2300/-</p>
    //       </div>
    //       <div className="flex justify-between items-center pb-7 border-b mb-7">
    //         <div className="flex gap-4 items-center relative">
    //           <Image
    //             src="/images/products/details.png"
    //             alt="bridal_top"
    //             width={60}
    //             height={40}
    //             className="rounded-sm w-[4rem] h-[4.8rem]"
    //           />
    //           <div className="flex justify-center items-center bg-white rounded-full w-5 h-5 absolute -top-[8px] left-[50px]">
    //             <p className="text-primary-color text-xs font-semibold">1</p>
    //           </div>
    //           <div>
    //             <p>Lehenga</p>
    //             <p>XL</p>
    //           </div>
    //         </div>
    //         <p>BDT 2300/-</p>
    //       </div>
    //       <div className="flex gap-x-4 border-b border-gray-600 pb-7">
    //         <input
    //           className="appearance-none bg-transparent block text-white border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-white w-4/5"
    //           type="text"
    //           placeholder="Apply Discount Coupon"
    //         />
    //         <button className="text-gray-600 bg-white px-2 py-1 rounded-md w-1/5">
    //           Apply
    //         </button>
    //       </div>

    //       <div className="mt-7 border-b border-gray-600 pb-7">
    //         <div className="flex justify-between items-center mb-3">
    //           <p>Sub Total</p>
    //           <p>BDT 5000/-</p>
    //         </div>
    //         <div className="flex justify-between items-center">
    //           <p>Shipping</p>
    //           <p>BDT 50/-</p>
    //         </div>
    //       </div>

    //       <div className="flex justify-between items-center mt-3">
    //         <p>Total</p>
    //         <p>BDT 5050/-</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="main-container my-10">
      <Navigation />
      <div className="w-full h-[60vh] flex justify-center items-center text-2xl font-semibold">
        Coming Soon! Waiting for Payment Gateway...
      </div>
    </div>
  );
};

export default Payment;
