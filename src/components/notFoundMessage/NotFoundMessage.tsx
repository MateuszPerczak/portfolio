import Exclamation from "@icons/exclamation.svg?react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

import StyledNotFoundMessage, {
  StyledDescription,
  StyledExclamation,
  StyledLabel,
  StyledLink,
} from "./NotFoundMessage.styles";
import {
  exclamationVariants,
  notFoundMessageVariants,
  textVariants,
} from "./NotFoundMessage.variants";

const NotFoundMessage = (): JSX.Element => {
  const navigate = useNavigate();

  const goBack = (): void => navigate("/", { replace: true });

  return (
    <StyledNotFoundMessage
      initial="initial"
      animate="animate"
      variants={notFoundMessageVariants}
    >
      <StyledExclamation variants={exclamationVariants}>
        <Exclamation />
      </StyledExclamation>
      <StyledLabel variants={textVariants}>404 Page not found</StyledLabel>
      <StyledDescription variants={textVariants}>
        It looks like the page you are looking for does not exist. Make sure the page url
        is correct. How about going back to the home page?
      </StyledDescription>
      <StyledLink variants={textVariants} onClick={goBack}>
        <span>Home page</span>
      </StyledLink>
    </StyledNotFoundMessage>
  );
};

export default memo(NotFoundMessage);
