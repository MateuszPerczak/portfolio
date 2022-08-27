import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type SectionProps from "./Section.types";

const Section = styled(motion.section)<SectionProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  scroll-snap-align: center;
  background-color: ${({ theme: { color, background }, reverseColor }) =>
    reverseColor ? color : background};
  color: ${({ theme: { color, background }, reverseColor }) =>
    reverseColor ? background : color};
`;

export default Section;
