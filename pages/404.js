import Head from "next/head";
import styled from "@emotion/styled";
import PageCenter from "../components/page/pageCenter";
import Card from "../components/card/card";
import CardText from "../components/card/cardText";

const ButtonWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-top: 10px;
  padding: 10px;
  gap: 10px;
  color: ${({ theme: { color } }) => {
    return color;
  }};
`;
const IconWrapper = styled.span`
  font-family: "Segoe Fluent Icons", sans-serif;
  font-size: 1.2rem;
`;

const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <PageCenter>
        <Card header="Page Not Found" icon="&#xEA92;">
          <CardText
            header="404"
            description="Yikes, it looks like the page you are looking for doesn't exist."
          />
          <ButtonWrapper href="/">
            <IconWrapper>&#xE10F;</IconWrapper>
            <span>Go to Homepage</span>
          </ButtonWrapper>
        </Card>
      </PageCenter>
    </>
  );
};

export default PageNotFound;
