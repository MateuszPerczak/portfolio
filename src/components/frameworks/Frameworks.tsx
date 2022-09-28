import type { FC } from "react";
import { memo } from "react";
import StyledFrameworks, { StyledFrameworksWrapper } from "./Frameworks.styles";
import Framework from "@components/framework/Framework";
import { frameworks } from "@data/frameworks";
import { frameworksWrapper } from "@animations/animations";

const Frameworks: FC = (): JSX.Element => {
  return (
    <StyledFrameworks>
      <h1>Used Frameworks</h1>
      <StyledFrameworksWrapper {...frameworksWrapper}>
        {frameworks.map(({ ...rest }, index) => {
          return <Framework key={`framework-${index}`} {...rest} />;
        })}
      </StyledFrameworksWrapper>
    </StyledFrameworks>
  );
};

export default memo(Frameworks);
