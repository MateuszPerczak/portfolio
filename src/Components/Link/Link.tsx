import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from "react";
import StyledLink from "././Link.style";

type LinkProps = PropsWithChildren<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
>;

const Link: FC<LinkProps> = ({ ...rest }): JSX.Element => {
  return <StyledLink {...rest} target="_blang" rel="noopener noreferrer" />;
};

export default Link;
