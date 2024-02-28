import TopBar from "@/components/TopBar";
import { MdPrivacyTip } from "react-icons/md";

export const metadata = {
  title: "Privacy-Policy",
};

const Privacy = () => {
  return (
    <main>
      <TopBar icon={<MdPrivacyTip />} title={"Privacy Policy"} />
      <div className="my-10">
        <div className="main-container text-gray-700">
          <h2 className="heading-4">Privacy Policy of ANZARA LIFESTYLE LTD</h2>
          <div className="mb-6">
            <p className="mb-2">
              The Privacy Policy of ANZARA LIFESTYLE LTD pertains to the
              personal information gathered from our customers and job
              applicants, whether obtained through our website
              www.nazaaralifestyle.com or through various interactions at our
              stores in Bangladesh. This policy outlines the details regarding
              the collection, utilization, disclosure, and overall management of
              the information we acquire from customers and job applicants. We
              prioritize safeguarding the privacy of your personal information
              and offer choices for you to control and limit how we use this
              data.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">
              Information Collected by ANZARA LIFESTYLE LTD
            </p>
            <p className="mb-2">We collect personal information when you:</p>
            <ul>
              <li className="list-disc list-inside">
                Purchase, order, return or exchange products and services
              </li>
              <li className="list-disc list-inside">
                Track your order through www.ANZARA LIFESTYLE LTD.net
              </li>
              <li className="list-disc list-inside">
                Sign up for ANZARA LIFESTYLE LTD newsletter
              </li>
              <li className="list-disc list-inside">
                Send or purchase a gift card
              </li>
              <li className="list-disc list-inside">Register on our website</li>
              <li className="list-disc list-inside">
                Apply for a position at ANZARA LIFESTYLE LTD through Career page
                or other third party job portals
              </li>
              <li className="list-disc list-inside">
                Participate in a promotion or survey
              </li>
              <li className="list-disc list-inside">
                Contact us with a comment, question or complaint
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Shopping</p>
            <p className="mb-2">
              {`When making cash purchases at our stores, there's no requirement for you to furnish any personal information. However, if you opt to use a credit or debit card for your transactions, we will gather pertinent details related to the card and also obtain your signature to facilitate payment processing. Furthermore, when you submit written suggestions, complaints, or inquiries via email or complaint/suggestion forms, we collect relevant information associated with these communications.`}
            </p>
            <p className="mb-2">www.nazaaralifestyle.com</p>
            <p className="mb-2">
              <span className="text-gray-800 font-medium">
                i. Registered shoppers:
              </span>{" "}
              If you sign-up for an account we save basic information about you
              and purchase history. This enables you to track your order.
            </p>
            <p>
              <span className="text-gray-800 font-medium">
                ii. Guest shopper:
              </span>{" "}
              If you sign-up for newsletter, we may collect personal details
              such as your name, email address and/or mobile number. We use this
              information to communicate with you and provide you with useful
              services and special offers.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Phone and Email Orders</p>
            <p className="mb-2">
              ANZARA LIFESTYLE LTD store or www.nazaaralifestyle.com accepts
              orders placed over phone or email. We will never ask for
              credit/debit card or any other sensitive information via email or
              phone. Please do not provide this information over the phone or
              via fax.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Career</p>
            <p className="mb-2">
              When you apply for a specific or suitable position through
              www.nazaaralifestyle.com, you may provide us with personal
              information about yourself, such as that contained in a resume or
              similar employment-related materials. The information provided is
              saved in ANZARA LIFESTYLE LTD’s internal server and might be saved
              no more than one year. We use this information for the purpose of
              processing and responding to your enquiry or job application. We
              will not sell your details to any third party or share unless
              required by law. We only keep your personal information as long as
              necessary for the purposes collected, or as otherwise required by
              law.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Newsletter</p>
            <p className="mb-2">
              Individuals who subscribe to our newsletter receive advanced
              notifications about sales, new products, store openings, and other
              updates from ANZARA LIFESTYLE LTD. Email addresses provided are
              strictly used internally for the purpose of delivering these
              electronic newsletters. We value your privacy and adhere to your
              rights; therefore, we do not sell or rent your email address to
              other companies without your explicit consent. If you wish to
              discontinue receiving our emails, you can easily unsubscribe by
              clicking the designated link at the bottom of our newsletter.
            </p>
            <p>
              Upon signing up for our newsletter, you may also choose to provide
              optional information such as your name, postal code, and product
              interests. This additional personal information may be utilized to
              improve and expand our product and service offerings.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">
              Visit or Register on www.nazaaralifestyle.com
            </p>
            <p>
              {`
              Registration is not mandatory for visiting www.nazaaralifestyle.com. However, to access specific services, you have the option to create an account by supplying your chosen email address and password. The personal information you furnish during the account creation or update, as well as at the checkout on our website (including but not limited to name, address, mobile number, email address, billing address, shipping address, and credit card details), is securely stored in electronic files on our web server and internal systems located in Bangladesh.`}
            </p>
            <p>
              {`
              The information provided during registration is exclusively utilized to fulfill and manage the services you have requested. Additionally, it may be used for other purposes to which you have given your consent.`}
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Promotions and Surveys</p>
            <p className="mb-2">
              {`Engaging in promotions or responding to surveys may involve the collection of your name, address, mobile number, and email address. This information is gathered to facilitate the administration of your participation in the promotion. In the case of surveys, the data is used to contact you for follow-up questions.`}
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">
              Customer Service through Contact Us (page)
            </p>
            <p className="mb-2">
              When reaching out to our customer service representatives with
              questions, feedback, or comments, you might be requested to
              provide identifying information like your name, address, and
              telephone number. This information is gathered to verify your
              identity and facilitate a prompt response to your inquiries or
              feedback. Additionally, we may retain this information for future
              assistance. Your feedback, suggestions, and comments are valuable
              to us, and we may utilize them to monitor and enhance our
              products, website, or services, which could include implementing
              improvements through training modules, for example.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Website Analytics</p>
            <p className="mb-2">
              {`You are welcome to explore www.nazaaralifestyle.com without disclosing your identity or providing personal information. Nevertheless, we automatically collect the IP addresses of our website visitors, along with related data like page requests, browser type, operating system, and average time spent on the site. This information is utilized to monitor and enhance the performance of our website.`}
            </p>
            <p>
              {`To gather product and purchase information, we employ cookies and similar technologies from the pages you visit. Cookies are small pieces of data stored on your computer to recognize you upon your return, aiding us in better understanding your usage patterns on www.nazaaralifestyle.com. This helps us continually refine and improve the website for our customers. You have the option to disable cookies by adjusting your browser preferences, although it's important to note that this may limit access to certain features on the website. The information gathered through cookies may be combined with other identifiable personal information from our records and other sources, used for future marketing initiatives, and to enhance our website presentation and your overall shopping experience.`}
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Social Media</p>
            <p className="mb-2">
              We may provide you with the chance to interact with our content on
              third-party social networking websites, plug-ins, and
              applications. When you choose to engage with our content through
              these platforms, you may grant us access to specific information
              linked to your social media account (such as your name, username,
              email address, profile picture, and gender). This access is
              utilized to deliver the content and is integral to the functioning
              of the website, plug-in, or application.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Information We Share</p>
            <p className="mb-2">
              We may share or grant access to your personal information with
              affiliated entities that provide services on our behalf. These
              services include data processing, online payment handling, product
              and service delivery, website hosting, email communications, as
              well as conducting promotions and surveys, all aimed at improving
              the functionality and user experience of www.nazaaralifestyle.com.
              All service providers working with us are required to maintain the
              confidentiality and security of your personal information, using
              it strictly in compliance with applicable privacy laws. These
              providers are not authorized to use your information for any
              purposes other than assisting us in delivering products and
              services, or as mandated by relevant laws. Your personal data may
              be stored and processed in Bangladesh and in other third-party
              locations, including courier services and mobile marketing
              entities.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">{`Legal Obligations`}</p>
            <p className="mb-2">
              Please note that ANZARA LIFESTYLE LTD is required to disclose your
              personal information if compelled by a valid search warrant, legal
              inquiry, or order. In circumstances involving a breach of
              agreement, violation of the law, or as mandated by legal
              requirements in Bangladesh, we may also share your information
              with investigative bodies.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">
              Security of Personal Details
            </p>
            <p className="mb-2">
              Ensuring the safeguarding of your privacy is our top priority. We
              have instituted practical administrative, technical, and physical
              measures to reduce the risk of loss, theft, unauthorized access,
              use, modification, and disclosure of the personal information
              within our custody and control. These security measures involve
              limiting access to personal information to employees and
              authorized service providers who necessitate it for the purposes
              outlined in our Privacy & Security Policy.
            </p>
            <p className="mb-2">
              To further enhance the security of online access to specific
              personal information, we may implement password protection
              measures. It is strongly recommended that you avoid sharing your
              password with anyone, as we will never request it through
              unsolicited communications.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Policy Changes</p>
            <p>
              The Privacy Policy of www.nazaaralifestyle.com may undergo
              periodic updates to accommodate new, unforeseen uses not
              previously disclosed. Any modifications will be posted here for
              your reference.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Update Your Profile</p>
            <p>
              If you wish to access, modify, or correct the profile information
              we have about you, please contact us. To safeguard your privacy,
              we will take reasonable steps to verify your identity before
              granting access or making corrections. Alternatively, you can
              easily update your account details by logging in to
              www.nazaaralifestyle.com and selecting the Login option.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
