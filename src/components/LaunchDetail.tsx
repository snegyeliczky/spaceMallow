import { FC } from "react";
import { StyledMainCard } from "./ui/Card";
import { LeftOutlined } from "@ant-design/icons";
import {
  StyledContentContainer,
  StyledDetailHeader,
  StyledImage,
  StyledLinkContainer,
  StyledTextContainer,
} from "./ui/LaunchDetailLayout";
import { dateParser } from "../utils/dateParser";
import { Skeleton } from "antd";
import { useLaunchDetail } from "../hooks/useLaunchDetail";
import ReadMoreLink from "./ReadMoreLink";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mrshmllw/smores-react";

const LaunchDetail: FC = () => {
  const { launchId } = useParams();
  const navigate = useNavigate();
  const { isLoading, launchDetail, launchPad } = useLaunchDetail(
    launchId ?? ""
  );

  return isLoading ? (
    <Skeleton active />
  ) : (
    <StyledMainCard>
      <StyledDetailHeader>
        <Button
          onClick={() => navigate("/")}
          fallbackStyle
          style={{ border: 0 }}
        >
          <LeftOutlined /> Back to launches
        </Button>
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
              : "/src/assets/starlink.jpeg"
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
              <ReadMoreLink
                link={launchDetail?.links?.webcast}
                name="Youtube"
              />
              <ReadMoreLink
                link={launchDetail?.links.reddit.launch}
                name="Reddit"
              />
              <ReadMoreLink
                link={launchDetail?.links.wikipedia}
                name="Wikipedia"
              />
            </StyledLinkContainer>
          </div>
        </StyledTextContainer>
      </StyledContentContainer>
    </StyledMainCard>
  );
};

export default LaunchDetail;
