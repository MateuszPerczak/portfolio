import type { FC } from "react";
import StyledFrameworks, { StyledFrameworksWrapper } from "./Frameworks.styles";
import { faReact, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Framework from "@components/framework/Framework";

const Frameworks: FC = (): JSX.Element => {
  return (
    <StyledFrameworks>
      <h1>Used Frameworks</h1>
      <StyledFrameworksWrapper>
        <Framework icon={faReact} text="React" href="https://pl.reactjs.org/" />
        <Framework
          icon={faCode}
          text="Emotion"
          href="https://emotion.sh/docs/introduction"
        />
        <Framework icon={faCode} text="Vite" href="https://vitejs.dev/" />
        <Framework
          icon={faFontAwesome}
          text="Fontawesome"
          href="https://fontawesome.com/"
        />
        <Framework
          icon={faCode}
          text="Framer Motion"
          href="https://www.framer.com/motion/"
        />
        <Framework icon={faCode} text="RxJS" href="https://rxjs.dev/" />
        <Framework
          icon={faCode}
          text="React Router Dom"
          href="https://reactrouter.com/en/main"
        />
      </StyledFrameworksWrapper>
    </StyledFrameworks>
  );
};

export default Frameworks;
