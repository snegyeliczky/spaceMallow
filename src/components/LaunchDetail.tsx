import { FC } from "react";
import { StyledMainCard } from "./ui/Card";

type Props = {
  selectLaunch: (id: string) => void;
};

const LaunchDetail: FC<Props> = ({ selectLaunch }) => {
  return (
    <StyledMainCard>
      <h2 onClick={() => selectLaunch("")}>Back to launches</h2>
    </StyledMainCard>
  );
};

export default LaunchDetail;
