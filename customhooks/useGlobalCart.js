import { useState, useEffect, useRef } from "react";

const useGlobalCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  // Close the cart when clicking outside
  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setIsCartOpen(false);
    }
  };

  // Close the cart when scrolling
  const handleScroll = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
    if (isCartOpen) {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isCartOpen]);

  return { isCartOpen, setIsCartOpen, cartRef };
};

export default useGlobalCart;
