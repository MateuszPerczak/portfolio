import { useState, useEffect } from "react";

const useWindowDimensions = () => {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = hasWindow
      ? window
      : { innerWidth: 0, innerHeight: 0 };
    return { width, height };
  };

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (!hasWindow) return;

    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [hasWindow]);

  return windowDimensions;
};

export default useWindowDimensions;
