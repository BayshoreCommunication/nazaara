import ContactForm from "@/components/contact/ContactForm";
import TopBar from "@/components/TopBar";
import { AiFillMessage } from "react-icons/ai";

export const metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <div>
      <TopBar icon={<AiFillMessage />} title={"CONTACT US"} />
      <section className="bg-white">
        <div className="py-8 lg:py-10 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-2xl tracking-tight font-semibold text-center text-gray-900">
            WE ARE HERE FOR YOU
          </h2>
          <p className="mb-3 lg:mb-4 text-center text-gray-600 sm:text-xl lg:text-lg">
            HOUSE 22/B, ROAD 02, DHANMONDI, DHAKA 1205
          </p>
          <p className="mb-8 lg:mb-10 font-light text-center text-gray-600 sm:text-xl lg:text-lg">
            For further assistance, please call us at{" "}
            <span className="font-semibold">01752-556120</span> between (11AM -
            8PM)
          </p>
          {/* import form component here  */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;
