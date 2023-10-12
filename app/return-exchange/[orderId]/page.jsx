"use client";
import { Util } from "@/util";
import Image from "next/image";
import { TbArrowsExchange } from "react-icons/tb";
import ImageUploading from "react-images-uploading";
import { SlCloudUpload } from "react-icons/sl";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ReturnAndExchange = ({ params }) => {
  const [issue, setIssue] = useState("");
  // const [images, setImages] = useState([]);

  const user = Util();
  const userId = user?._id;
  // const orderId = params?.orderId;

  //image uploading
  // const maxNumber = 6;

  // const onChangeHandle = (imageList) => {
  //   // Handle image list change if needed
  //   setImages(imageList);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload images to Cloudinary
      // const formData = new FormData();
      // images.forEach((image) => {
      //   formData.append("file", image.file);
      //   formData.append("upload_preset", process.env.UPLOAD_PRESET);
      // });

      // const cloudinaryResponse = await axios.post(
      //   process.env.API_BASE_URL,
      //   formData
      // );

      // // Extract image URLs from Cloudinary response
      // const imageUrls = cloudinaryResponse.data.resources.map(
      //   (resource) => resource.secure_url
      // );

      // Send form data along with image URLs to your server-side API
      const response = await axios.post(
        `${process.env.API_URL}/api/v1/return-exchange`,
        // {
        //   user_id: userId,
        //   order: orderId,
        //   issue,
        //   // imageUrl: imageUrls,
        // }
        {
          user_id: userId,
          order: params.orderId,
          issue: issue,
        }
      );

      // Handle your API response as needed
      // console.log("data", { userId, orderId, issue });
      // console.log("API Response:", response.data);
      toast.success(
        "Your issue is recorded. Our authority will reach you soon."
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // console.log("data", { userId, orderId, issue });

  return (
    <div>
      <h1 className="flex items-center justify-center gap-x-2 h-28 border-b-2 text-xl font-medium text-gray-600">
        <TbArrowsExchange />
        RETURN & EXCHANGE
      </h1>
      <div className="container mt-10 flex flex-col items-center gap-y-6">
        <h1 className="text-2xl font-medium text-gray-600">
          ELIGIBILITY CRITERIA
        </h1>
        <div className="w-[90%] lg:w-[70%] mx-auto">
          <ol className="list-decimal space-y-3">
            <li>
              NO MONEY REFUND, MONEY CAN BE ADJUSTED WITH ANOTHER PURCHASE
              (WITHIN 7 DAYS)
            </li>
            <li>DELIVERED PRODUCTS CANNOT BE EXCHANGED.</li>
            <li>
              DRESS CAN BE BOOKED FOR A MAXIMUM OF 2 MONTHS (60 DAYS) WITH 50%
              BOOKING MONEY. AFTER 2 MONTHS, THE ORDER WILL BE CANCELLED AND THE
              BOOKING AMOUNT WILL BE NON-REFUNDABLE & NON- ADJUSTABLE.
            </li>
            <li>
              BOOKED DRESS CANNOT BE CANCELLED, BUT EXCHANGE IS POSSIBLE (WITHIN
              60 DAYS MAXIMUM).
            </li>
            <li>
              TOTAL VALUE OF THE BILL HAS TO BE MET WHILE EXCHANGING THE BOOKED
              PRODUCT. (NOT JUST THE BOOKING AMOUNT)
            </li>
          </ol>
        </div>
      </div>
      <div className="container my-10">
        <form
          onSubmit={handleSubmit}
          className="lg:w-[60%] mx-auto text-gray-700"
        >
          <div className="flex gap-x-4">
            <div className="w-full">
              <label>UserID:</label>
              <input
                className="block w-full text-gray-600 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none cursor-not-allowed"
                disabled
                type="text"
                placeholder="Order ID"
                value={userId}
              />
            </div>
            <div className="w-full">
              <label>OrderID:</label>
              <input
                className="block w-full text-gray-600 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none cursor-not-allowed"
                disabled
                type="text"
                placeholder="Order ID"
                value={params.orderId}
              />
            </div>
          </div>
          <div className="w-full">
            <label>Issue:</label>
            <textarea
              name=""
              id=""
              onChange={(e) => setIssue(e.target.value)}
              cols="30"
              rows="10"
              placeholder="Your Issue"
              className="block w-full outline outline-1 outline-gray-300 rounded-sm bg-gray-50 px-4 py-2"
            ></textarea>
          </div>

          {/* <ImageUploading
            multiple
            // value={variant[variantIndex]?.imageUrl || []}
            onChange={(e) => onChangeHandle(e)}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper flex gap-5">
                <div className="pr-10 border-r-[1px] border-gray-300">
                  <button
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                    className="upload-image-background"
                  >
                    +
                  </button>
                  <br />
                  <button
                    onClick={onImageRemoveAll}
                    className="w-[100px] py-1 mt-2 bg-secondary text-white font-normal rounded-md"
                  >
                    Remove All
                  </button>
                </div>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <Image
                      src={image["data_url"]}
                      alt="product_image"
                      width={100}
                      height={100}
                    />
                    <div className="mt-1 flex justify-end gap-2">
                      <button onClick={() => onImageUpdate(index)}>
                        <SlCloudUpload size={20} />
                      </button>
                      <button onClick={() => onImageRemove(index)}>
                        <IoIosRemoveCircleOutline size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading> */}

          <div className="flex justify-center">
            <button
              type="submit"
              className="border-4 border-primary-color hover:border-transparent bg-primary-color text-white px-16 mt-4 py-1 font-medium rounded-sm hover:bg-primary-hover-color transition-colors duration-500 flex items-center gap-1"
            >
              {" "}
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReturnAndExchange;
