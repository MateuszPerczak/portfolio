import type { Link } from "@/assets/projects";
import type { MotionProps } from "framer-motion";

type ProjectProps = {
  header: string;
  description: string;
  libraries: string;
  links: Link[];
} & MotionProps;

export default ProjectProps;
