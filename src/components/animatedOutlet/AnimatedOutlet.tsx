import { FC, useState } from "react";
import { useOutlet } from "react-router-dom";

const AnimatedOutlet: FC = (): JSX.Element => {
  const o = useOutlet();
  const [outlet] = useState(o);
  return <>{outlet}</>;
};

export default AnimatedOutlet;
