import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const DesktopFooter = () => {
  return (
    <div>
      <div className="hidden lg:block container text-white text-center lg:text-left">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div>
            <div>
              <Link
                href="/"
                className="flex items-center justify-center lg:justify-start mb-4 sm:mb-0"
              >
                <Image
                  src="/images/nazara-footer-logo.png"
                  alt="My Image"
                  width={220}
                  height={100}
                  className="ml-24 xl:ml-40 mt-8"
                />
                {/* <h2 className="text-3xl font bold text-white">Elite Spa</h2> */}
              </Link>
            </div>
            <div className="text-color-cus flex justify-center gap-x-6 mb-3 lg:mb-0 ml-24 xl:ml-40">
              <Link
                href="https://www.facebook.com/nazaara.official/"
                target="_blank"
                // className="border p-2 rounded-full"
              >
                <FaFacebook size={25} color="white" />
              </Link>
              <Link
                href="https://www.youtube.com/nazaara.official?fbclid=IwAR3axfJUOdbHRfuR93fXm-NNLaLK7n4CO0yEEpkHxD8Rzb00ko8yhVZlj-s"
                target="_blank"
                // className="border p-2 rounded-full"
              >
                <FaYoutube size={25} color="white" />
              </Link>
              <Link
                href="https://www.instagram.com/nazaara.official/?fbclid=IwAR305164AqRBu_pOQIImJKLP6poo2C_Ii4KH43lc9_BHr_PDGfQagzPZP9U"
                target="_blank"
                // className="border p-2 rounded-full"
              >
                <FaInstagram size={25} color="white" />
              </Link>
              <Link
                href="https://www.tiktok.com/@nazaara.official?fbclid=IwAR0rkTpZgt_8CGnL3K5ubsS_xXsfapdV7B9VPS-5TO0J_XS-EAx5tiIh4Iw"
                target="_blank"
              >
                <FaTiktok size={25} color="white" />
              </Link>
            </div>
          </div>

          {/* service 1 */}
          <div>
            <ul className="flex flex-col gap-y-1 lg:gap-y-3">
              <p className="text-white text-sm font-medium mb-2">
                CUSTOMER SERVICE
              </p>
              {/* <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                <Link href="/order-track">Track Your Order</Link>
              </li> */}

              <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                <Link href="/shipping">Shipping & Delivery</Link>
              </li>

              {/* <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                <Link href="/return-exchange">Return & Exchange</Link>
              </li> */}
              <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                <Link href="/faq">FAQ’S</Link>
              </li>
            </ul>
          </div>
          <hr className="lg:hidden  border-gray-500" />
          {/* service 2 */}
          <div>
            <ul className="flex flex-col gap-y-1 lg:gap-y-3">
              <p className="text-white text-sm font-medium mb-2">
                MORE FROM NAZAARA
              </p>
              <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                <Link href="/e-gift">E-Gift Cards</Link>
              </li>

              <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                <Link href="/career">We’re Hiring!</Link>
              </li>

              <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                <Link href="/location">Our Locations</Link>
              </li>
            </ul>
          </div>

          <hr className="lg:hidden my-5 border-gray-500" />

          {/* service 3 */}
          <ul className="flex flex-col gap-y-1 lg:gap-y-3">
            <p className="text-white text-sm font-medium mb-2">OUR COMPANY</p>
            {/* <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
              <Link href="/contact-us">Contact Us</Link>
            </li> */}

            <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
              <Link href="/about-us">About Us</Link>
            </li>

            <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
              <Link href="/terms-of-use">Terms Of Use</Link>
            </li>
            <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
              <Link href="/disclaimer">Disclaimer</Link>
            </li>
          </ul>
        </div>
        <hr className="mx-auto border-base-100 my-6" />
        <div className="flex justify-between items-center">
          <div>
            <span className="text-[13px] text-white">
              <div className="text-white mb-1">
                © Copyright 2023 NAZAARA LIFESTYLE LTD. All rights Reserved.
              </div>
              <div className="text-white">
                Design & Development by
                <Link
                  className=" ml-1"
                  href="https://bayshorecommunication.com/"
                  target="_blank"
                >
                  <span className="block lg:inline text-white underline underline-offset-2 mt-1 lg:mt-0">
                    Bayshore Communication
                  </span>
                </Link>
              </div>
            </span>
          </div>
          <div className="flex gap-2">
            <Image
              src="/images/visa.png"
              alt="My Image"
              width={42}
              height={35}
              className="brightness-50"
            />
            <Image
              src="/images/mastercard.png"
              alt="My Image"
              width={42}
              height={35}
              className="brightness-50"
            />
            <Image
              src="/images/paypal.png"
              alt="My Image"
              width={42}
              height={35}
              className="brightness-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopFooter;
