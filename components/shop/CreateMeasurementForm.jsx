"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { sizeCharthandleContact } from "../serverAction/sizeChartAction";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const CreateMeasurementForm = ({ searchParams }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  // const ref = useRef(null);
  async function clientAction(formData) {
    //reset form
    // ref.current?.reset();
    //client side validation
    const result = await sizeCharthandleContact(formData, searchParams);

    // console.log("result,", result);
    if (result?.error) {
      //show error
      toast.error(result.error, { duration: 4000 });
    } else {
      setIsSuccess(true);
      toast.success(result.message, { duration: 4000 });
    }
  }

  useEffect(() => {
    if (isSuccess) {
      redirect("/shop/cart");
    }
  }, [isSuccess]);

  return (
    <form action={clientAction}>
      <div className="flex flex-col lg:flex-row gap-6 justify-center">
        <div className="flex-1 border rounded-lg">
          <div className="flex flex-col gap-2 border-b py-4">
            <h3 className="text-primary-color font-medium text-center">
              TOPS (IN INCH)
            </h3>
            <div className="flex gap-6 items-center justify-center">
              <div className="flex items-center ">
                <input
                  id="blouse"
                  type="radio"
                  name="topsRadio"
                  required
                  value="blouse"
                  className="w-4 h-4"
                />
                <label
                  htmlFor="blouse"
                  className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  Blouse
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="kameez"
                  type="radio"
                  required
                  name="topsRadio"
                  value="kameez"
                  className="w-4 h-4"
                />
                <label
                  htmlFor="kameez"
                  className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  Kameez
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="gown"
                  type="radio"
                  required
                  name="topsRadio"
                  value="gown"
                  className="w-4 h-4"
                />
                <label
                  htmlFor="gown"
                  className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  Gown
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mx-10 gap-x-10 gap-y-2 py-4">
            <div>
              <label className="block text-gray-600" htmlFor="chest">
                Chest
              </label>
              <input
                type="number"
                id="chest"
                name="tChest"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="waist">
                Waist
              </label>
              <input
                type="number"
                id="waist"
                name="tWaist"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Hip">
                Hip
              </label>
              <input
                type="number"
                id="Hip"
                name="tHip"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="End">
                End
              </label>
              <input
                type="number"
                id="End"
                name="tEnd"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Shoulder">
                Shoulder
              </label>
              <input
                type="number"
                id="Shoulder"
                name="tShoulder"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Arm Hole">
                Arm Hole
              </label>
              <input
                type="number"
                id="Arm Hole"
                name="tArmHole"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Sleeve Length">
                Sleeve Length
              </label>
              <input
                type="number"
                id="Sleeve Length"
                name="tSleeve"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Muscle">
                Muscle
              </label>
              <input
                type="number"
                id="Muscle"
                name="tMuscle"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Hand Opening">
                Hand Opening
              </label>
              <input
                type="number"
                id="Hand Opening"
                name="tHandOpening"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Length">
                Length
              </label>
              <input
                type="number"
                id="Length"
                name="tLength"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Slit">
                Slit
              </label>
              <input
                type="number"
                id="Slit"
                name="tSlit"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Neck Deep F">
                Neck Deep (F)
              </label>
              <input
                type="number"
                id="Neck Deep F"
                name="tNeckF"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Neck Deep B">
                Neck Deep (B)
              </label>
              <input
                type="number"
                id="Neck Deep B"
                name="tNeckB"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Half Body">
                Half Body
              </label>
              <input
                type="number"
                id="Half Body"
                name="tHalfBody"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
          </div>
        </div>

        {/* bottom inch  */}
        <div className="flex-1 border rounded-lg">
          <div className="flex flex-col gap-2 border-b py-4">
            <h3 className="text-primary-color font-medium text-center">
              BOTTOM (IN INCH)
            </h3>
            <div className="flex gap-6 items-center justify-center">
              <div className="flex items-center">
                <input
                  id="Skirt"
                  type="radio"
                  name="bottomRadio"
                  value="skirt"
                  className="w-4 h-4"
                />
                <label
                  htmlFor="Skirt"
                  className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  Skirt
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="Palazzo"
                  type="radio"
                  name="bottomRadio"
                  value="palazzo"
                  className="w-4 h-4"
                />
                <label
                  htmlFor="Palazzo"
                  className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  Palazzo
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="Pant"
                  type="radio"
                  name="bottomRadio"
                  value="pant"
                  className="w-4 h-4"
                />
                <label
                  htmlFor="Pant"
                  className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  Pant
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="Gharara"
                  type="radio"
                  name="bottomRadio"
                  value="gharara"
                  className="w-4 h-4"
                />
                <label
                  htmlFor="Gharara"
                  className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  Gharara
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mx-10 gap-x-10 gap-y-2 py-4">
            <div>
              <label className="block text-gray-600" htmlFor="bLength">
                Length
              </label>
              <input
                type="number"
                id="bLength"
                name="bLength"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="bwaist">
                Waist
              </label>
              <input
                type="number"
                id="bwaist"
                name="bWaist"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="bHip">
                Hip
              </label>
              <input
                type="number"
                id="bHip"
                name="bHip"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="bThigh">
                Thigh
              </label>
              <input
                type="number"
                id="bThigh"
                name="bThigh"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="bKnee">
                Knee
              </label>
              <input
                type="number"
                id="bKnee"
                name="bKnee"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="bLegOpening">
                Leg Opening
              </label>
              <input
                type="number"
                id="bLegOpening"
                name="bLegOpening"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5 w-full"
              />
            </div>
          </div>
        </div>

        {/* note  */}
        <div className="flex-1 border rounded-lg flex flex-col">
          <div className="flex flex-col gap-2 border-b py-4">
            <h3 className="text-primary-color font-medium text-center">NOTE</h3>
          </div>
          <div className="w-full p-4 rounded-lg h-full">
            <textarea
              name="note"
              className="border w-full h-full p-2 box-border outline-none resize-none"
              placeholder="Type your note here"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full mt-4">
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-center lg:justify-start flex-1">
          <button
            type="submit"
            className="border-4 border-primary-color hover:border-transparent bg-primary-color text-white px-6 py-2 font-medium rounded-lg hover:bg-primary-hover-color transition-colors duration-500"
          >
            Save Measurement
          </button>
        </div>
        <div className="flex flex-1 justify-center lg:justify-end mt-2 lg:mt-0 text-gray-600 font-medium">
          <Link href={`/shop/cart`}>Skip Measurement</Link>
        </div>
      </div>
    </form>
  );
};

export default CreateMeasurementForm;
