import { type FC, useState } from "react";
import { useOutlet } from "react-router-dom";

const StaticOutlet: FC = (): JSX.Element => {
  const o = useOutlet();
  const [outlet] = useState(o);
  return <>{outlet}</>;
};

export default StaticOutlet;
