import styled from "@emotion/styled";
import Head from "next/head";

const StyleWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const FloatingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px;
  width: 100%;
  border-radius: 4px;
  background: ${({ theme: { background } }) => {
    return background;
  }};
  color: ${({ theme: { color } }) => {
    return color;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
`;

const Button = styled.a`
  text-decoration: none;
  font-weight: 700;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  text-align: center;
  transition: background-color 150ms;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  background: ${({ theme: { background } }) => {
    return background;
  }};
  color: ${({ theme: { color } }) => {
    return color;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
  &:hover {
    background: ${({ theme: { backgroundDark } }) => {
      return backgroundDark;
    }};
  }
`;

const Section = styled.section`
  max-width: 450px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorType = styled.div`
  font-size: 7rem;
  font-weight: 700;
  line-height: 1;
`;

const TextWrapper = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  margin: 10px 0 0 0;
`;

const PageNotFound = () => {
  return (
    <StyleWrapper>
      <Head>
        <title>Page not found</title>
      </Head>
      <Section>
        <FloatingCard>
          <ErrorType>404</ErrorType>
          <TextWrapper>
            Yikes, it looks like the page you are looking for doesn&apos;t
          </TextWrapper>
        </FloatingCard>
        <Button href="/">Go back home</Button>
      </Section>
    </StyleWrapper>
  );
};

export default PageNotFound;
