import "./App.css";
import { Button, Dropdown, Space, Pagination, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { StyledHeader, StyledSelectorButton } from "./components/ui/Header";
import { usePayloadNationality } from "./hooks/usePayloadNationality";
import { useLaunchesForPayloadsQuery } from "./services/spaceXApi";
import { useState } from "react";
import {
  StyledCardLayout,
  StyledImageContainer,
  StyledStatus,
  StyledTextContainer,
} from "./components/ui/CardLayout";
import { StyledCard, StyledMainCard } from "./components/ui/Card";
import LaunchDetail from "./components/LaunchDetail";
import { dateParser } from "./utils/dateParser";
import { itemRender } from "./utils/paginationItemRenderer";

function App() {
  const { menuItems, handleMenuClick, selectedNationality } =
    usePayloadNationality();
  const [pageCount, setPageCount] = useState(1);
  const [selectedLaunch, setSelectedLaunch] = useState("");

  const { data: launchData } = useLaunchesForPayloadsQuery({
    nationality: selectedNationality,
    pageCount: pageCount,
  });

  const selectLaunch = (id: string) => {
    setSelectedLaunch(id);
  };

  const handleSelect: MenuProps["onClick"] = (e) => {
    setPageCount(1);
    handleMenuClick(e);
  };

  const menuProps = {
    items: menuItems,
    onClick: handleSelect,
  };

  return (
    <div className="app">
      {selectedLaunch ? (
        <LaunchDetail selectLaunch={selectLaunch} launchId={selectedLaunch} />
      ) : (
        <StyledMainCard>
          <StyledHeader>
            <h1>Space X latest launches</h1>
            <Dropdown menu={menuProps}>
              <StyledSelectorButton>
                <Space>
                  {selectedNationality}
                  <DownOutlined />
                </Space>
              </StyledSelectorButton>
            </Dropdown>
          </StyledHeader>
          <StyledCardLayout>
            {launchData?.docs.map((launchDetail) => (
              <StyledCard
                key={launchDetail.id}
                onClick={() => {
                  console.log(launchDetail.launch.id);
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
                  <StyledStatus status={launchDetail.launch.success}>
                    {launchDetail.launch.success ? "success" : "faliur"}
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
                  <p>Payload Count:</p>{" "}
                  <p>{launchDetail.launch.payloads.length}</p>
                </StyledTextContainer>
              </StyledCard>
            ))}
          </StyledCardLayout>
          <Pagination
            current={launchData?.page}
            total={launchData?.totalPages && launchData?.totalPages * 10}
            showSizeChanger={false}
            onChange={(page) => setPageCount(page)}
            itemRender={itemRender}
          />
        </StyledMainCard>
      )}
    </div>
  );
}

export default App;
