import styled from "@emotion/styled";


const StyledPageHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: clamp(0.8rem, 2vw, 1.2rem);
    padding: 32px;
    border-radius: 10px;
    border: 1px solid ${({ theme: { border } }): string => border};
    box-shadow: 0 0 5px ${({ theme: { shadow } }): string => shadow};
`;


export default StyledPageHeader;