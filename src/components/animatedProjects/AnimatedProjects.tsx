import StyledAnimatedProjects from "./AnimatedProjects.styles";
import AnimatedProject from "./components/animatedProject/AnimatedProject";

const AnimatedProjects = (): JSX.Element => {
  const data = new Array(5).fill(0);

  return (
    <StyledAnimatedProjects>
      <span className="project-title">A small selection of my work</span>
      <div className="projects-wrapper">
        {data.map((_, index) => (
          <AnimatedProject key={index} />
        ))}
      </div>
    </StyledAnimatedProjects>
  );
};

// const Project = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1 0;
//   gap: 20px;
//   align-items: center;

//   .projects-header {
//     font-size: 2rem;
//     font-weight: bold;
//   }
//   .projects-wrapper {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
//     gap: 10px;
//     max-width: 800px;
//     width: 100%;
//   }
//   .project {
//     display: flex;
//     flex: 1;
//     padding: 10px 20px;
//     /* background-color: #212121; */
//     border-radius: 5px;
//     aspect-ratio: 3/2;
//     border: 1px solid ${({ theme: { border } }): string => border};
//     background-color: ${({ theme: { background } }): string => background};
//     &:hover {
//       background-color: ${({ theme: { border } }): string => border};
//     }
//     transition: background-color 200ms;
//   }
// `;

export default AnimatedProjects;
