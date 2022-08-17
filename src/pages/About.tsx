import PageHeader from "@/components/pageHeader/PageHeader";
import type { FC } from "react";

const About: FC = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <PageHeader header="O MNIE" />
    </div>
  );
};
export default About;
