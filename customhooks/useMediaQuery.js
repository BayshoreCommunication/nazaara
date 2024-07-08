import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const documentChangeHandler = (event) => setMatches(event.matches);

    // Initial check
    setMatches(mediaQueryList.matches);

    // Add event listener
    mediaQueryList.addEventListener("change", documentChangeHandler);

    // Cleanup event listener
    return () => {
      mediaQueryList.removeEventListener("change", documentChangeHandler);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
