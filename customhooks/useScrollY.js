// useScrollY.js
import { useCallback, useEffect, useState } from "react";

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    // setTimeout(() => {
    //   setScrollY(window.scrollY);
    // }, 100);
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return scrollY;
};

export default useScrollY;
