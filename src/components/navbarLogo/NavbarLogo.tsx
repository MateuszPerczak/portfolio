import StyledNavbarLogo from "./NavbarLogo.styles";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const NavbarLogo = () => {
  const { width } = useWindowDimensions();

  return (
    <StyledNavbarLogo>{width > 800 ? "<Mateusz Perczak />" : "<MP />"}</StyledNavbarLogo>
  );
};

export default NavbarLogo;
