import type { FC } from "react";
import { memo } from "react";
import StyledFrameworks, { StyledFrameworksWrapper } from "./Frameworks.styles";
import Framework from "@components/framework/Framework";
import { framerowks } from "@data/frameworks";

const Frameworks: FC = (): JSX.Element => {
  return (
    <StyledFrameworks>
      <h1>Used Frameworks</h1>
      <StyledFrameworksWrapper>
        {framerowks.map(({ id, ...rest }) => {
          return <Framework key={id} {...rest} />;
        })}
      </StyledFrameworksWrapper>
    </StyledFrameworks>
  );
};

export default memo(Frameworks);
