import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t">
      <Link href={``}>Refund Policy</Link>
      <Link href={``}>Shipping Policy</Link>
      <Link href={``}>Privacy Policy</Link>
      <Link href={``}>Terms of use</Link>
    </div>
  );
};

export default Footer;
