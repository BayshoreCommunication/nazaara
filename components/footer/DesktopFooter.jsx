import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import sslCommerceBanner from "../../public/images/sslcommerz-banner.png";

const DesktopFooter = () => {
  return (
    <div>
      <div className="hidden lg:block main-container text-white text-center lg:text-left">
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
                href="https://www.youtube.com/@nazaara.official"
                target="_blank"
                // className="border p-2 rounded-full"
              >
                <FaYoutube size={25} color="white" />
              </Link>
              <Link
                href="https://www.instagram.com/nazaara.official"
                target="_blank"
                // className="border p-2 rounded-full"
              >
                <FaInstagram size={25} color="white" />
              </Link>
              <Link
                href="https://www.tiktok.com/@nazaara.official"
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

              <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                <Link href="/return-exchange">Return & Refund Policy</Link>
              </li>
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
              <Link href="/terms-of-use">Terms of Use</Link>
            </li>

            <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
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
        <div className="flex gap-20 xl:gap-28 2xl:gap-60 items-center justify-between overflow-x-hidden">
          <div className="flex-shrink-0">
            <div className="text-[13px] text-white">
              <span className="text-white mb-1">
                © Copyright 2023 | ANZARA LIFESTYLE LTD.
              </span>
              <div className="text-white">
                Design & Develop by
                <Link
                  className=" ml-1"
                  href="https://bayshorecommunication.com/"
                  target="_blank"
                >
                  <span className=" text-white font-semibold hover:underline underline-offset-4 mt-1 lg:mt-0">
                    Bayshore Communication
                  </span>
                </Link>
              </div>
            </div>
            <hr className="my-2 border-gray-500 opacity-50" />
            <div className="text-sm mt-2">
              <p>Trade License :</p>
              <p>TRAD/DSCC/026507/2022</p>
            </div>
          </div>
          <div>
            <Image
              // src={sslCommerceBanner}
              src={"/images/sslcommerz-banner.png"}
              alt="SSL commerce banner"
              width={1200}
              height={30}
              className="w-full h-auto"
            />
          </div>
        </div>
        {/* <hr className="my-5 border-gray-500" /> */}
        {/* <Image
          // src={sslCommerceBanner}
          src={"/images/sslcommerz-banner.png"}
          alt="SSL commerce banner"
          width={1080}
          height={20}
          className=""
        /> */}
      </div>
    </div>
  );
};

export default DesktopFooter;
