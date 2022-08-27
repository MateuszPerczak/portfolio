import { useState, RefObject, useEffect } from "react";

const useFollowPointer = (ref: RefObject<HTMLElement>) => {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;
    if (!window) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current;
      if (element) {
        const x = clientX - element.offsetLeft - element.offsetWidth / 2;
        const y =
          clientY - (element.offsetTop - element.offsetHeight / 2) + window.pageYOffset;
        setPoint({ x, y });
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
};

export default useFollowPointer;
