import { FC } from "react";
import { StyledMainCard } from "./ui/Card";
import { useLauncheQuery, useLaunchpadQuery } from "../services/spaceXApi";
import Link from "antd/es/typography/Link";
import { LeftOutlined } from "@ant-design/icons";
import {
  StyledContentContainer,
  StyledDetailHeader,
  StyledImage,
  StyledLink,
  StyledLinkContainer,
  StyledTextContainer,
} from "./ui/LaunchDetailLayout";

type Props = {
  selectLaunch: (id: string) => void;
  launchId: string;
};

const LaunchDetail: FC<Props> = ({ selectLaunch, launchId }) => {
  const { data: launchDetail } = useLauncheQuery({ id: launchId });
  const padId = launchDetail?.launchpad;
  const { data: launchPad } = useLaunchpadQuery({ id: padId ?? "" });

  return (
    <StyledMainCard>
      <StyledDetailHeader>
        <h2 onClick={() => selectLaunch("")}>
          <LeftOutlined /> Back to launches
        </h2>
        <div>
          <h1>{launchDetail?.name}</h1>
          <p>{launchDetail?.date_local}</p>
        </div>
      </StyledDetailHeader>
      <StyledContentContainer>
        <StyledImage src={launchDetail?.links.flickr.original[0]} />
        <StyledTextContainer>
          <div>
            <p>DESCRIPTION OF LAUNCH</p>
            <div>{launchDetail?.details}</div>
          </div>
          <div>
            <p>LOCATION</p>
            <div>{launchPad?.full_name}</div>
          </div>
          <div>
            <p>READ MORE</p>
            <StyledLinkContainer>
              <StyledLink href={launchDetail?.links?.webcast}>
                Youtube
              </StyledLink>
              <StyledLink href={launchDetail?.links.reddit.launch}>
                Reddit
              </StyledLink>
              <StyledLink href={launchDetail?.links.wikipedia}>
                Wikipedia
              </StyledLink>
            </StyledLinkContainer>
          </div>
        </StyledTextContainer>
      </StyledContentContainer>
    </StyledMainCard>
  );
};

export default LaunchDetail;
