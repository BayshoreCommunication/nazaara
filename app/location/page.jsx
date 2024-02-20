import TopBar from "@/components/TopBar";
import { IoLocationSharp } from "react-icons/io5";

export const metadata = {
  title: "Location",
};

const LocationPage = () => {
  return (
    <div>
      <TopBar icon={<IoLocationSharp />} title={"OUR LOCATION"} />
      <div className="my-10 lg:w-[80%] mx-auto">
        <h2 className="heading-4 text-center mb-16 text-gray-700 mx-auto">
          VISIT OUR STORE DIRECTLY TODAY!
        </h2>
        <div className="">
          {/* <div className="flex flex-col lg:flex-row gap-14 items-center">
            <div className="w-[90%] lg:w-3/5">
              <iframe
                width="100%"
                height="300"
                title="PetersBurg"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=nazara,banani+(Nazara)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
              </iframe>
            </div>
            <div className="w-[90%] lg:w-2/5 flex flex-col gap-y-4 text-lg text-center">
              <h2 className="text-2xl font-semibold">BANANI SHOWROOM</h2>
              <p className="border-b-2 pb-2">
                Block H, Hs 47, Rd No. 11, Dhaka 1213
              </p>
              <div>
                <p>Working Hours: 11 am - 9.30 pm</p>
                <p>Sunday off</p>
              </div>
              <p>Phone: 01752-556120</p>
            </div>
          </div> */}
          <div className="flex flex-col lg:flex-row gap-x-24 gap-y-16 items-center justify-center">
            <div className="lg:hidden">
              <iframe
                width="100%"
                height="300"
                title="PetersBurg"
                // frameBorder="0"
                // scrolling="no"
                // marginHeight="0"
                // marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=nazara,dhanmondi+(Nazara)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>

            <div className="hidden lg:block">
              <iframe
                width="400"
                height="400"
                title="PetersBurg"
                // frameBorder="0"
                // scrolling="no"
                // marginHeight="0"
                // marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=nazara,dhanmondi+(Nazara)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
            <div className=" flex flex-col gap-y-4 text-lg text-center">
              <h2 className="text-2xl font-semibold">DHANMONDI SHOWROOM</h2>
              <p className="border-b-2 pb-2">
                House 22/B, Road 02 Dhanmondi R/A, Dhaka 1205
              </p>
              <div>
                <p>Working Hours: 11 am - 9.30 pm</p>
                <p>Tuesday off</p>
              </div>
              <p>Phone: 01752-556120</p>
            </div>
          </div>
          {/* <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-[90%] lg:w-3/5">
              <iframe
                width="100%"
                height="300"
                title="PetersBurg"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=nazara,banani+(Nazara)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
              </iframe>
            </div>
            <div className="w-[90%] lg:w-2/5 flex flex-col gap-y-4 text-lg text-center">
              <h2 className="text-2xl font-semibold">OFFICE</h2>
              <p className="border-b-2 pb-2">
                Block C, 1st Floor, House 111 Road 8, Dhaka 1213
              </p>
              <div>
                <p>Working Hours: 11 am - 8.00 pm</p>
                <p>Friday off</p>
              </div>
              <p>Phone: 01752-556120</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
