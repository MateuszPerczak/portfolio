import styled from "@emotion/styled";

const StyledProject = styled.section`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
  width: calc(100% - 2rem);
  height: 300px;
  max-width: 1000px;
  border-radius: 0.4rem;
  overflow: hidden;
  background-color: ${({ theme: { project } }) => project};
`;

// export const ProjectHeader = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   @media (max-width: 768px) {
//     flex-direction: row;
//     align-items: flex-end;
//     justify-content: space-between;
//     padding: 1rem;
//   }
//   @media (max-width: 350px) {
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-between;
//   }
//   justify-content: center;
//   flex: 0 1 30%;
//   font-size: 1rem;
//   font-weight: bold;
//   background-color: #212121;
// `;

// export const ProjectContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 0 1 70%;
//   padding: 1rem;
// `;

// export const ProjectHeaderWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 1rem;
// `;

export default StyledProject;
