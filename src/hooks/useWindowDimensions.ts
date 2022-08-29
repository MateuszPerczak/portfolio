import { useState, useEffect } from "react";
import { fromEvent, throttleTime } from "rxjs";

const useWindowDimensions = () => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  };

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const subscription = fromEvent(window, "resize")
      .pipe(throttleTime(200))
      .subscribe(() => {
        setWindowDimensions(getWindowDimensions());
      });

    return () => subscription.unsubscribe();
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
