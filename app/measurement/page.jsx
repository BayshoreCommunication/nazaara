import Button from "@/components/Button";
import Navigation from "@/components/Navigation/Navigation";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineRollback } from "react-icons/ai";

const Measurement = () => {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-y-6 my-20">
      <div className="">
        <Image
          src="/images/payment-logo.png"
          alt="My Image"
          width={260}
          height={200}
        />
        <Navigation />
      </div>
      <p className="text-center text-gray-600">
        ***All measurements should be taken in inch
      </p>
      <div className="flex flex-col lg:flex-row gap-6 justify-center">
        <div className="flex-1 border rounded-lg">
          <div className="flex flex-col gap-2 border-b py-4">
            <h3 className="text-primary-color font-medium text-center">
              TOPS (IN INCH)
            </h3>
            <div className="flex gap-6 items-center justify-center">
              <div class="flex items-center ">
                <input
                  id="blouse"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-primary-color bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="blouse"
                  class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  Blouse
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="kameez"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="kameez"
                  class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  Kameez
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="gown"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="gown"
                  class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
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
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="waist">
                waist
              </label>
              <input
                type="number"
                id="waist"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Hip">
                Hip
              </label>
              <input
                type="number"
                id="Hip"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="End">
                End
              </label>
              <input
                type="number"
                id="End"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Shoulder">
                Shoulder
              </label>
              <input
                type="number"
                id="Shoulder"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Arm Hole">
                Arm Hole
              </label>
              <input
                type="number"
                id="Arm Hole"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Sleeve Length">
                Sleeve Length
              </label>
              <input
                type="number"
                id="Sleeve Length"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Muscle">
                Muscle
              </label>
              <input
                type="number"
                id="Muscle"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Hand Opening">
                Hand Opening
              </label>
              <input
                type="number"
                id="Hand Opening"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Length">
                Length
              </label>
              <input
                type="number"
                id="Length"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Slit">
                Slit
              </label>
              <input
                type="number"
                id="Slit"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Neck Deep F">
                Neck Deep F
              </label>
              <input
                type="number"
                id="Neck Deep F"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Neck Deep B">
                Neck Deep B
              </label>
              <input
                type="number"
                id="Neck Deep B"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Half Body">
                Half Body
              </label>
              <input
                type="number"
                id="Half Body"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
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
              <div class="flex items-center">
                <input
                  id="Skirt"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-primary-color bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="Skirt"
                  class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  Skirt
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="Palazzo"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="Palazzo"
                  class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  Palazzo
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="Pant"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="Pant"
                  class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  Pant
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="Gharara"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="Gharara"
                  class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  Gharara
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mx-10 gap-x-10 gap-y-2 py-4">
            <div>
              <label className="block text-gray-600" htmlFor="Length">
                Length
              </label>
              <input
                type="number"
                id="Length"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="waist">
                Waist
              </label>
              <input
                type="number"
                id="waist"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Hip">
                Hip
              </label>
              <input
                type="number"
                id="Hip"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="End">
                End
              </label>
              <input
                type="number"
                id="End"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Thigh">
                Thigh
              </label>
              <input
                type="number"
                id="Thigh"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Knee">
                Knee
              </label>
              <input
                type="number"
                id="Knee"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="Leg Opening">
                Leg Opening
              </label>
              <input
                type="number"
                id="Leg Opening"
                className="border rounded-md focus:outline-none pl-2 text-gray-500 py-0.5"
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
      <p className="text-sm">
        By clicking Continue to Payment, you agree to our{" "}
        <Link
          className="text-primary-color border-b border-primary-color"
          href="terms-of-use"
        >
          Terms & Conditions
        </Link>
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-5 items-center">
          <Link href={`/payment`}>
            <Button text={`Continue to Payment`} />
          </Link>
          <Link href={`/information`} className="flex gap-1 items-center">
            <AiOutlineRollback /> Return to Information
          </Link>
        </div>
        <Link className="text-gray-500 font-medium" href={`payment`}>
          Skip Now
        </Link>
      </div>
      <div className="pt-4 border-t-2 border-gray-200 mt-4 flex gap-x-4 text-gray-500 text-sm">
        <Link href="/return-exchange">Refund Policy</Link>
        <Link href="/shipping">Shipping Policy</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-use">Terms of use</Link>
      </div>
    </div>
  );
};

export default Measurement;
