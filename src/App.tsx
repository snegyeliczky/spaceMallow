import "./App.css";
import { Button, Dropdown, Space, Pagination, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { StyledHeader } from "./components/ui/Header";
import { usePayloadNationality } from "./hooks/usePayloadNationality";
import { useLaunchesForPayloadsQuery } from "./services/spaceXApi";
import { useState } from "react";

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

  console.log(launchData?.totalPages);

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
      {launchData?.docs.map((launch) => (
        <div key={launch.id}>{launch.name}</div>
      ))}
      <Pagination
        current={launchData?.page}
        total={launchData?.totalPages && launchData?.totalPages * 10}
        showSizeChanger={false}
        onChange={(page) => setPageCount(page)}
      />
    </div>
  );
}

export default App;
