import { FC } from "react";
import { Payload } from "../types";
import { StyledCard } from "./ui/Card";
import {
  StyledImageContainer,
  StyledStatus,
  StyledTextContainer,
} from "./ui/CardLayout";
import { dateParser } from "../utils/dateParser";

type Props = {
  launchDetail: Payload;
  selectLaunch: (id: string) => void;
};

const LaunchCard: FC<Props> = ({ launchDetail, selectLaunch }) => {
  return (
    <StyledCard
      key={launchDetail.id}
      onClick={() => {
        selectLaunch(launchDetail.launch.id);
      }}
    >
      <StyledImageContainer
        imageUrl={
          launchDetail.launch?.links?.flickr?.original?.length
            ? launchDetail.launch?.links?.flickr?.original[0]
            : "src/assets/logo.svg"
        }
      >
        <StyledStatus status={launchDetail?.launch?.success ?? false}>
          {launchDetail.launch?.success ? "success" : "faliur"}
        </StyledStatus>
      </StyledImageContainer>
      <StyledTextContainer>
        <h2>{launchDetail.name}</h2>
      </StyledTextContainer>
      <StyledTextContainer>
        <p>{dateParser(launchDetail?.launch?.date_local)}</p>
      </StyledTextContainer>
      <StyledTextContainer>
        <p>Crew Size:</p> <p>{launchDetail?.launch?.crew?.length}</p>
      </StyledTextContainer>
      <StyledTextContainer>
        <p>Payload Count:</p>
        <p>{launchDetail?.launch?.payloads?.length ?? 0}</p>
      </StyledTextContainer>
    </StyledCard>
  );
};

export default LaunchCard;
