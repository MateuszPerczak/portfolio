import type { Project } from "@/assets/projects";
import type { MotionProps } from "framer-motion";

type ProjectProps = Omit<Project, "id"> & MotionProps;

export default ProjectProps;
