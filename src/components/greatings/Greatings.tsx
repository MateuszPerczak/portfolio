import NextButton from "@components/nextButton/NextButton";
import type { FC } from "react";
import StyledGreatings from "./Greatings.styles";

const Greatings: FC = (): JSX.Element => {
  return (
    <StyledGreatings>
      <span>Hi 👋, I&apos;m Mateusz. I am a self-taught Web & Desktop Developer.</span>
      <NextButton to="/about" text="More about me" />
    </StyledGreatings>
  );
};
export default Greatings;
