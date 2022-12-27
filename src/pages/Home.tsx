import styled from "@emotion/styled";
import type { FC } from "react";

const StyledHome = styled.div`
  display: flex;
  flex: 1 0 100%;
`;

const Home: FC = (): JSX.Element => {
  return <StyledHome>Basic react component</StyledHome>;
};

export default Home;
