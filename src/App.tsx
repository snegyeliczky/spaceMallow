import "./App.css";
import { Dropdown, Space, Pagination, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { StyledHeader, StyledSelectorButton } from "./components/ui/Header";
import { usePayloadNationality } from "./hooks/usePayloadNationality";
import { useLaunchesForPayloadsQuery } from "./services/spaceXApi";
import { useState } from "react";
import { StyledCardLayout } from "./components/ui/CardLayout";
import { StyledMainCard } from "./components/ui/Card";
import { itemRender } from "./utils/paginationItemRenderer";
import LaunchCard from "./components/LaunchCard";
import { useNavigate } from "react-router-dom";

function App() {
  const { menuItems, handleMenuClick, selectedNationality } =
    usePayloadNationality();
  const [pageCount, setPageCount] = useState(1);
  const navigate = useNavigate();

  const { data: launchData } = useLaunchesForPayloadsQuery({
    nationality: selectedNationality,
    pageCount: pageCount,
  });

  const selectLaunch = (id: string) => {
    console.log(id);
    navigate(`/launch/${id}`);
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
            <LaunchCard
              launchDetail={launchDetail}
              selectLaunch={selectLaunch}
            />
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
    </div>
  );
}

export default App;
