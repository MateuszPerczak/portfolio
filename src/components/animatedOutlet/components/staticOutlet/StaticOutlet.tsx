import { type FC, useMemo } from "react";
import { useOutlet } from "react-router-dom";

const StaticOutlet: FC = (): JSX.Element => {
  const outlet = useOutlet();

  const memoizedOutlet = useMemo(() => {
    return outlet;
  }, []);

  return <>{memoizedOutlet}</>;
};

export default StaticOutlet;
