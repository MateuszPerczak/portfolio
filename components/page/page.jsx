import styled from "@emotion/styled";
import PageHeader from "./pageHeader";
import PageContent from "./pageContent";

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const Page = ({ header, children, id }) => {
  return (
    <SectionWrapper id={id}>
      <PageHeader header={header} />
      <PageContent>{children}</PageContent>
    </SectionWrapper>
  );
};

export default Page;
