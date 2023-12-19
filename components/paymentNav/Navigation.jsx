import Link from "next/link";
import { FaAngleRight, FaHome } from "react-icons/fa";

const Navigation = ({
  link1Title,
  link1Href,
  link1Icon,
  link2Title,
  link2Href,
  link2Icon,
  link3Title,
  link3Icon,
}) => {
  return (
    <div className="flex gap-2 items-center text-gray-700 font-semibold text-sm main-container mt-6">
      <Link
        href={link1Href || "/"}
        className="hover:text-primary-color flex items-center gap-1 capitalize"
      >
        {link1Icon || (
          <span className="mb-0.5">
            <FaHome />
          </span>
        )}
        {link1Title || "Home"}
      </Link>
      <FaAngleRight color="gray" />
      {link2Title && (
        <>
          <Link
            href={link2Href || "/"}
            className="hover:text-primary-color flex items-center gap-1 capitalize"
          >
            {link2Icon}
            {link2Title || "Home"}
          </Link>
          <FaAngleRight color="gray" />
        </>
      )}
      <div className="text-gray-600 font-medium flex items-center gap-1">
        {link3Icon}
        <span className="capitalize">{link3Title || "Home"}</span>
      </div>
    </div>
  );
};

export default Navigation;
