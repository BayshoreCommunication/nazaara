"use client";
import { useState } from "react";
import TopBar from "@/components/TopBar";
import { FaMinus, FaPlus } from "react-icons/fa";
import axios from "axios";
// import CustomizeData from "@/components/customizeData/CustomizeData";

const Page = async () => {
  const url = `http://localhost:8000/api/v1/customization/64d9fb77f3a7ce9915b44b6f`;
  // const data = await CustomizeData(url);

  const [data, setData] = useState({});
  axios
    .get(url)
    .then((response) => {
      // Handle the successful response
      setData(response.data);
    })
    .catch((error) => {
      // Handle errors
      console.error("Error:", error);
    });

  console.log("datasss", data);

  const [toggle, setToggle] = useState({
    value1: false,
    value2: false,
    value3: false,
    value4: false,
    value5: false,
    value6: false,
  });

  const handleToggleClick = (buttonId) => {
    if (buttonId === "value1") {
      setToggle((prevState) => ({
        ...prevState,
        [buttonId]: !prevState[buttonId],
        value2: false,
        value3: false,
        value4: false,
        value5: false,
        value6: false,
      }));
    } else if (buttonId === "value2") {
      setToggle((prevState) => ({
        ...prevState,
        [buttonId]: !prevState[buttonId],
        value1: false,
        value3: false,
        value4: false,
        value5: false,
        value6: false,
      }));
    } else if (buttonId === "value3") {
      setToggle((prevState) => ({
        ...prevState,
        [buttonId]: !prevState[buttonId],
        value1: false,
        value2: false,
        value4: false,
        value5: false,
        value6: false,
      }));
    } else if (buttonId === "value4") {
      setToggle((prevState) => ({
        ...prevState,
        [buttonId]: !prevState[buttonId],
        value1: false,
        value2: false,
        value3: false,
        value5: false,
        value6: false,
      }));
    } else if (buttonId === "value5") {
      setToggle((prevState) => ({
        ...prevState,
        [buttonId]: !prevState[buttonId],
        value1: false,
        value2: false,
        value3: false,
        value4: false,
        value6: false,
      }));
    } else {
      setToggle((prevState) => ({
        ...prevState,
        [buttonId]: !prevState[buttonId],
        value1: false,
        value2: false,
        value3: false,
        value4: false,
        value5: false,
      }));
    }
  };

  // console.log("data hoola", data.ceodata);

  return (
    <>
      <TopBar />
      <div className="my-10 container">
        <h2 className="heading-3 text-center mb-10 text-gray-700">
          FREQUENTLY ASKED QUESTIONS BY CUSTOMERS
        </h2>
        <div className="w-4/5 mx-auto flex flex-col gap-y-8">
          <div className="bg-primary-color text-white px-2 py-4 rounded-lg">
            <button
              className="flex items-center"
              onClick={() => handleToggleClick("value1")}
            >
              {toggle.value1 ? <FaMinus /> : <FaPlus />}
              <span className="ml-3">HOW SHOULD I CHOOSE MY SIZE?</span>
            </button>

            {toggle.value1 && (
              <div className="ml-7 mt-6">
                Purchasing from Nazara is reliable and effortless! Click on the
                home button to navigate through the website. Browse through
                categories to explore and find what you are looking for. Once
                you have been directed to the product you wish to purchase, fill
                in the form with your name, number & email address. Our fashion
                consultant will get back to you for further guidance and
                assistance.
              </div>
            )}
          </div>

          <div className="bg-primary-color text-white px-2 py-4 rounded-lg">
            <button
              className="flex items-center"
              onClick={() => handleToggleClick("value2")}
            >
              {toggle.value1 ? <FaMinus /> : <FaPlus />}
              <span className="ml-3">HOW SHOULD I CHOOSE MY SIZE?</span>
            </button>
            {toggle.value2 && (
              <div className="ml-7 mt-6">
                All products are sold according to different sizing. As sizes
                vary between PRODUCTs, for a hassle free shopping experience we
                have provided each PRODUCTS size chart separately that you can
                easily find on every products page.
              </div>
            )}
          </div>

          <div className="bg-primary-color text-white px-2 py-4 rounded-lg">
            <button
              className="flex items-center"
              onClick={() => handleToggleClick("value3")}
            >
              {toggle.value3 ? <FaMinus /> : <FaPlus />}
              <span className="ml-3">
                THE COLORS SHOWN OF THE PRODUCTS ON WEBSITE ARE ACCURATE OR NOT?
              </span>
            </button>
            {toggle.value3 && (
              <div className="ml-7 mt-6">
                We have made every possible effort to display the colors of the
                products accurately. However, the possibility of difference
                between the actual color and the display color might exist
                because of various types of screens & displays.
              </div>
            )}
          </div>

          <div className="bg-primary-color text-white px-2 py-4 rounded-lg">
            <button
              className="flex items-center"
              onClick={() => handleToggleClick("value4")}
            >
              {toggle.value4 ? <FaMinus /> : <FaPlus />}
              <span className="ml-3">WHAT ARE YOUR SHIPPING CHARGES?</span>
            </button>

            {toggle.value4 && (
              <div className="ml-7 mt-6">
                Shipping charges vary depending on the destination of the order.
              </div>
            )}
          </div>

          <div className="bg-primary-color text-white px-2 py-4 rounded-lg">
            <button
              className="flex items-center"
              onClick={() => handleToggleClick("value5")}
            >
              {toggle.value5 ? <FaMinus /> : <FaPlus />}
              <span className="ml-3">
                DO YOU OFFER DISCOUNTS TO NAZAARA CUSTOMERS?
              </span>
            </button>

            {toggle.value5 && (
              <div className="ml-7 mt-6">
                From time to time, we run promotions on our website & FACEBOOK
                PAGE. You can check our website or you can sign up for our
                weekly newsletter to stay updated.
              </div>
            )}
          </div>

          <div className="bg-primary-color text-white px-2 py-4 rounded-lg">
            <button
              className="flex items-center"
              onClick={() => handleToggleClick("value6")}
            >
              {toggle.value6 ? <FaMinus /> : <FaPlus />}
              <span className="ml-3">
                HOW DO I CONTACT CUSTOMER SERVICES TEAM?
              </span>
            </button>

            {toggle.value6 && (
              <div className="ml-7 mt-6">
                We are here to help you. If you have any problems or questions,
                please contact our Customer Services team via email
                anzaralifestyleltd@gmail.com . Our team will get back to you as
                soon as possible. yOU CAN ALSO CONTACT AT OUR HOTLINE NUMBER
                01752-556120
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
