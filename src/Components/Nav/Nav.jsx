import styled from "@emotion/styled";
import NavSpacer from "./NavSpacer";
import NavItem from "./NavItem";
import NavHamburger from "./NavHamburger";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";
import routesToComponnetsMapper from "../../Routes/routesToComponnetsMapper";

const StyledNav = styled(animated.nav)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  user-select: none;
  @media (max-width: 500px) {
    z-index: 3;
  }
  background: ${({ theme: { backgroundDark } }) => {
    return backgroundDark;
  }};
  border-right: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const transition = useSpring({
    width: isOpen ? "250px" : "60px",
    config: {
      mass: 1.1,
      tension: 300,
    },
  });

  const { t } = useTranslation("nav");

  return (
    <StyledNav style={transition}>
      <NavHamburger onClick={() => setOpen(!isOpen)} isOpen={isOpen} />
      <NavItem
        icon="&#xE13D;"
        content={t("aboutMe")}
        to={routesToComponnetsMapper.aboutMe.route}
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <NavItem
        icon="&#xE7BE;"
        content={t("skills")}
        to={routesToComponnetsMapper.skills.route}
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <NavItem
        icon="&#xE821;"
        content={t("experience")}
        to={routesToComponnetsMapper.experience.route}
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <NavItem
        icon="&#xE74C;"
        content={t("projects")}
        to={routesToComponnetsMapper.projects.route}
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <NavItem
        icon="&#xE715;"
        content={t("contact")}
        to={routesToComponnetsMapper.contact.route}
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <NavSpacer />
      <NavItem
        icon="&#xE115;"
        content={t("settings")}
        to={routesToComponnetsMapper.settings.route}
        isOpen={isOpen}
        setOpen={setOpen}
      />
    </StyledNav>
  );
};

export default Nav;
