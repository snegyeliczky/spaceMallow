import { FC } from "react";
import { StyledLink, StyledLinkText } from "./ui/LaunchDetailLayout";

type Props = {
  link: string | undefined | null;
  name: string;
};
const ReadMoreLink: FC<Props> = ({ link, name }) => {
  return (
    link && (
      <StyledLinkText>
        <img src={`src/assets/${name.toLowerCase()}.png`} width={20} />
        <StyledLink href={link} target="_blank">
          {name}
        </StyledLink>
      </StyledLinkText>
    )
  );
};

export default ReadMoreLink;
