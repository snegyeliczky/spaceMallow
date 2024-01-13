import { FC } from "react";
import { StyledMainCard } from "./ui/Card";
import { useLauncheQuery, useLaunchpadQuery } from "../services/spaceXApi";
import { LeftOutlined } from "@ant-design/icons";
import {
  StyledContentContainer,
  StyledDetailHeader,
  StyledImage,
  StyledLink,
  StyledLinkContainer,
  StyledLinkText,
  StyledTextContainer,
} from "./ui/LaunchDetailLayout";
import { dateParser } from "../utils/dateParser";
import { Flex, Skeleton } from "antd";

type Props = {
  selectLaunch: (id: string) => void;
  launchId: string;
};

const LaunchDetail: FC<Props> = ({ selectLaunch, launchId }) => {
  const { data: launchDetail, isLoading: isDetailLoading } = useLauncheQuery({
    id: launchId,
  });
  const padId = launchDetail?.launchpad;
  const { data: launchPad, isLoading: isPadLoading } = useLaunchpadQuery({
    id: padId ?? "",
  });

  const isLoading = isDetailLoading || isPadLoading;

  return isLoading ? (
    <Skeleton active />
  ) : (
    <StyledMainCard>
      <StyledDetailHeader>
        <h2 onClick={() => selectLaunch("")}>
          <LeftOutlined /> Back to launches
        </h2>
        <div>
          <h1>{launchDetail?.name}</h1>
          <p>{dateParser(launchDetail?.date_local)}</p>
        </div>
      </StyledDetailHeader>
      <StyledContentContainer>
        <StyledImage
          src={
            launchDetail?.links.flickr.original?.length
              ? launchDetail?.links.flickr.original[0]
              : "src/assets/starlink.jpeg"
          }
        />
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
              <StyledLinkText>
                <img src="src/assets/youtube.png" width={20} />
                <StyledLink href={launchDetail?.links?.webcast ?? "/"}>
                  Youtube
                </StyledLink>
              </StyledLinkText>
              <StyledLinkText>
                <img src="src/assets/reddit.png" width={20} />
                <StyledLink href={launchDetail?.links.reddit.launch ?? "/"}>
                  Reddit
                </StyledLink>
              </StyledLinkText>
              <StyledLinkText>
                <img src="src/assets/wikipedia.png" width={20} />
                <StyledLink href={launchDetail?.links.wikipedia ?? "/"}>
                  Wikipedia
                </StyledLink>
              </StyledLinkText>
            </StyledLinkContainer>
          </div>
        </StyledTextContainer>
      </StyledContentContainer>
    </StyledMainCard>
  );
};

export default LaunchDetail;
