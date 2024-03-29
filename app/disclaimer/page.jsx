import TopBar from "@/components/TopBar";
import Link from "next/link";
import { AiFillExclamationCircle } from "react-icons/ai";

export const metadata = {
  title: "Disclaimer",
};

const DisclaimerPage = () => {
  return (
    <main>
      <TopBar icon={<AiFillExclamationCircle />} title={"DISCLAIMER"} />
      <div className="my-10">
        <div className="main-container text-gray-700">
          <h2 className="heading-4">Disclaimer for Anzara Lifestyle Ltd.</h2>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Interpretation</p>
            <p>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Definitions</p>
            <p>For the purposes of this Disclaimer:</p>
            <ul>
              <li className="list-disc list-inside">
                Company (referred to as either the Company, We, Us or Our in
                this Disclaimer) refers to Anzara Lifestyle Ltd., Block C, 1st
                Floor, House 111 Road 8, Dhaka 1213.
              </li>
              <li className="list-disc list-inside">
                Service refers to the Website.
              </li>
              <li className="list-disc list-inside">
                You means the individual accessing the Service, or the company,
                or other legal entity on behalf of which such individual is
                accessing or using the Service, as applicable.
              </li>
              <li className="list-disc list-inside">
                Website refers to Nazaara, accessible from
                https://www.nazaaralifestyle.com
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Disclaimer</p>
            <p className="mb-2">
              The information contained on the Service is for general
              information purposes only.
            </p>
            <p className="mb-2">
              The Company assumes no responsibility for errors or omissions in
              the contents of the Service.
            </p>
            <p className="mb-2">
              In no event shall the Company be liable for any special, direct,
              indirect, consequential, or incidental damages or any damages
              whatsoever, whether in an action of contract, negligence or other
              tort, arising out of or in connection with the use of the Service
              or the contents of the Service. The Company reserves the right to
              make additions, deletions, or modifications to the contents on the
              Service at any time without prior notice.
            </p>
            <p>
              The Company does not warrant that the Service is free of viruses
              or other harmful components.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">
              External Links Disclaimer
            </p>
            <p className="mb-2">
              The Service may contain links to external websites that are not
              provided or maintained by or in any way affiliated with the
              Company.
            </p>
            <p>
              Please note that the Company does not guarantee the accuracy,
              relevance, timeliness, or completeness of any information on these
              external websites.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">
              Errors and Omissions Disclaimer
            </p>
            <p className="mb-2">
              The information given by the Service is for general guidance on
              matters of interest only. Even if the Company takes every
              precaution to insure that the content of the Service is both
              current and accurate, errors can occur. Plus, given the changing
              nature of laws, rules and regulations, there may be delays,
              omissions or inaccuracies in the information contained on the
              Service.
            </p>
            <p>
              The Company is not responsible for any errors or omissions, or for
              the results obtained from the use of this information.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Fair Use Disclaimer</p>
            <p className="mb-2">
              The Company may use copyrighted material which has not always been
              specifically authorized by the copyright owner. The Company is
              making such material available for criticism, comment, news
              reporting, teaching, scholarship, or research.
            </p>
            <p className="mb-2">
              The Company believes this constitutes a fair use of any such
              copyrighted material as provided for in Copyright Act, 2000 of the
              Peoples Republic of Bangladesh Copyright law.
            </p>
            <p>
              If You wish to use copyrighted material from the Service for your
              own purposes that go beyond fair use, You must obtain permission
              from the copyright owner.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">
              Views Expressed Disclaimer
            </p>
            <p className="mb-2">
              The Service may contain views and opinions which are those of the
              authors and do not necessarily reflect the official policy or
              position of any other author, agency, organization, employer or
              company, including the Company.
            </p>
            <p>
              Comments published by users are their sole responsibility and the
              users will take full responsibility, liability and blame for any
              libel or litigation that results from something written in or as a
              direct result of something written in a comment. The Company is
              not liable for any comment published by users and reserves the
              right to delete any comment for any reason whatsoever..
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">
              No Responsibility Disclaimer
            </p>
            <p className="mb-2">
              The information on the Service is provided with the understanding
              that the Company is not herein engaged in rendering legal,
              accounting, tax, or other professional advice and services. As
              such, it should not be used as a substitute for consultation with
              professional accounting, tax, legal or other competent advisers.
            </p>
            <p>
              In no event shall the Company or its suppliers be liable for any
              special, incidental, indirect, or consequential damages whatsoever
              arising out of or in connection with your access or use or
              inability to access or use the Service.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">
              Use at Your Own Risk Disclaimer
            </p>
            <p className="mb-2">
              All information in the Service is provided as is, with no
              guarantee of completeness, accuracy, timeliness or of the results
              obtained from the use of this information, and without warranty of
              any kind, express or implied, including, but not limited to
              warranties of performance, merchantability and fitness for a
              particular purpose.
            </p>
            <p>
              The Company will not be liable to You or anyone else for any
              decision made or action taken in reliance on the information given
              by the Service or for any consequential, special or similar
              damages, even if advised of the possibility of such damages.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Contact Us</p>
            <p className="mb-2">
              If you have any questions about this Disclaimer, You can contact
              Us: By email: anzaralifestyleltd@gmail.com
            </p>
            <p className="mb-2">
              By visiting this page on our website:
              <Link href="/contact-us">
                https://www.nazaaralifestyle.com/contact-us
              </Link>
            </p>
            <p>By phone number: +8801752556120</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DisclaimerPage;
