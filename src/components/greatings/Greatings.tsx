import NextButton from "@components/nextButton/nextButton";
import type { FC } from "react";
import StyledGreatings from "./Greatings.styles";

const Greatings: FC = (): JSX.Element => {
  return (
    <StyledGreatings>
      <span>Hi 👋, I&apos;m Mateusz. I am a self-taught Web & Desktop Developer.</span>
      <NextButton to="/about" text="See more" />
    </StyledGreatings>
  );
};
export default Greatings;
