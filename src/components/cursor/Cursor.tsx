import type { FC } from "react";
import { useRef } from "react";
import useFollowPointer from "@/hooks/useFollowPointer";
import StyledCursor from "./Cursor.style";

const Cursor: FC = (): JSX.Element => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <StyledCursor
      animate={{ x, y }}
      ref={ref}
      transition={{ type: "spring", mass: 0.1, stiffness: 150, damping: 5 }}
    ></StyledCursor>
  );
};

export default Cursor;
