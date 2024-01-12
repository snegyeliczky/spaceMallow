import logo from "./assets/logo.svg";
import "./App.css";
import {
  useLauncheQuery,
  useLaunchesForPayloadsQuery,
  usePayloadsNationalitiesQuery,
} from "./services/spaceXApi";
import { Button, Dropdown, Space, message } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

function App() {
  const { data } = usePayloadsNationalitiesQuery();
  const { data: launchData } = useLaunchesForPayloadsQuery({
    nationality: "United States",
  });
  const { data: oneLaunch } = useLauncheQuery({
    id: "5eb87cd9ffd86e000604b32a",
  });

  console.log(oneLaunch);

  console.log(launchData);

  const nationList = data?.docs;
  const uniqueNations = [
    ...new Set(nationList?.flatMap((nationality) => nationality.nationalities)),
  ];

  console.log(uniqueNations);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const items: MenuProps["items"] = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="app">
      <img src={logo} className="logo" alt="Vite logo" />
      <Dropdown menu={menuProps}>
        <Button>
          <Space>
            Button
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <header className="header">
        <h2>Welcome to the Frontend Technical Test</h2>
        <p>Please check the README before you start.</p>
      </header>
    </div>
  );
}

export default App;
