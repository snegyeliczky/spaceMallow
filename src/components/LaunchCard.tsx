import { FC } from "react";
import { Payload } from "../types";
import { StyledCardContainer } from "./ui/Card";
import { StyledStatus, StyledTextContainer } from "./ui/CardLayout";
import { dateParser } from "../utils/dateParser";
import { Card } from "@mrshmllw/smores-react";

type Props = {
  launchDetail: Payload;
  selectLaunch: (id: string) => void;
};

const LaunchCard: FC<Props> = ({ launchDetail, selectLaunch }) => {
  return (
    <StyledCardContainer>
      <Card
        visualHeight="194px"
        tag={
          <StyledStatus status={launchDetail?.launch?.success ?? false}>
            {launchDetail.launch?.success ? "success" : "faliur"}
          </StyledStatus>
        }
        title={launchDetail.name}
        cardOnClickAction={() => {
          selectLaunch(launchDetail.launch.id);
        }}
        visual={
          launchDetail.launch?.links?.flickr?.original?.length
            ? launchDetail.launch?.links?.flickr?.original[0]
            : "src/assets/starlink.jpeg"
        }
      >
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
      </Card>
    </StyledCardContainer>
  );
};

export default LaunchCard;
