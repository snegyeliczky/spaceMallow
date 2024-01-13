import "./App.css";
import { Button, Dropdown, Space, Pagination, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { StyledHeader } from "./components/ui/Header";
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

//   const { data: oneLaunch } = useLauncheQuery({
//     id: "5eb87cd9ffd86e000604b32a",
//   });

//   console.log(oneLaunch);

function App() {
  const { menuItems, handleMenuClick, selectedNationality } =
    usePayloadNationality();
  const [pageCount, setPageCount] = useState(1);

  const { data: launchData } = useLaunchesForPayloadsQuery({
    nationality: selectedNationality,
    pageCount: pageCount,
  });

  const handleSelect: MenuProps["onClick"] = (e) => {
    setPageCount(1);
    handleMenuClick(e);
  };

  const menuProps = {
    items: menuItems,
    onClick: handleSelect,
  };

  console.log(launchData);

  return (
    <div className="app">
      <StyledMainCard>
        <StyledHeader>
          <h1>Space X latest launches</h1>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                {selectedNationality}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </StyledHeader>
        <StyledCardLayout>
          {launchData?.docs.map((launch) => (
            <StyledCard key={launch.id}>
              <StyledImageContainer
                imageUrl={launch.launch?.links?.flickr.original[0]}
              >
                <StyledStatus status={launch.launch.success}>
                  {launch.launch.success ? "success" : "faliur"}
                </StyledStatus>
              </StyledImageContainer>
              <StyledTextContainer>
                <h2>{launch.name}</h2>
              </StyledTextContainer>
              <StyledTextContainer>
                <p>{launch.launch.date_local}</p>
              </StyledTextContainer>
              <StyledTextContainer>
                <p>Crew Size:</p> <p>{launch.launch.crew.length}</p>
              </StyledTextContainer>
              <StyledTextContainer>
                <p>Payload Count:</p> <p>{launch.launch.payloads.length}</p>
              </StyledTextContainer>
            </StyledCard>
          ))}
        </StyledCardLayout>
        <Pagination
          current={launchData?.page}
          total={launchData?.totalPages && launchData?.totalPages * 10}
          showSizeChanger={false}
          onChange={(page) => setPageCount(page)}
        />
      </StyledMainCard>
    </div>
  );
}

export default App;
