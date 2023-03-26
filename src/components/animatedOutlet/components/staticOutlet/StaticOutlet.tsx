import { type FC, useMemo } from "react";
import { useOutlet } from "react-router-dom";

const StaticOutlet: FC = (): JSX.Element => {
  const o = useOutlet();

  const outlet = useMemo(() => {
    return o;
  }, []);

  return <>{outlet}</>;
};

export default StaticOutlet;
