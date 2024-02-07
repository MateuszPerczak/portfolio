import { useEffect, useState } from "react";
import { debounceTime, fromEvent } from "rxjs";

const useMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const subscription = fromEvent(window, "resize")
      .pipe(debounceTime(200))
      .subscribe(() => setIsMobile(window.innerWidth < 768));
    return () => subscription.unsubscribe();
  }, []);

  return isMobile;
};
export default useMobile;
