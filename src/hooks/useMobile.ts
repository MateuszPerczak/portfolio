import { useEffect, useState } from "react";

const useMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const updateIsMobile = (): void => setIsMobile(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  return isMobile;
};
export default useMobile;
