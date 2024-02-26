import "./App.css";
import { Dropdown, Space, Pagination, MenuProps } from "antd";
import { DownOutlined, RetweetOutlined } from "@ant-design/icons";
import { StyledHeader, StyledSelectorButton } from "./components/ui/Header";
import { usePayloadNationality } from "./hooks/usePayloadNationality";
import { useLaunchesForPayloadsQuery } from "./services/spaceXApi";
import { useState } from "react";
import { StyledCardLayout } from "./components/ui/CardLayout";
import { StyledMainCard } from "./components/ui/Card";
import { itemRender } from "./utils/paginationItemRenderer";
import LaunchCard from "./components/LaunchCard";
import { useNavigate } from "react-router-dom";
import FilterModal, { FilterValidationType } from "./components/FilterModal";
import { Skeleton } from "antd";
import { Button } from "@mrshmllw/smores-react";

function App() {
  const { menuItems, handleMenuClick, selectedNationality } =
    usePayloadNationality();
  const [pageCount, setPageCount] = useState(1);
  const navigate = useNavigate();
  const [launchNameFilter, setLaunchNameFilter] = useState("");
  const [pagination, setPagination] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const { data: rawLaunchData, isLoading: isLaunchLoading } =
    useLaunchesForPayloadsQuery({
      nationality: selectedNationality,
      pageCount: pageCount,
      pagination: pagination,
    });

  const setModal = (status: boolean) => {
    setShowModal(status);
  };

    const setFilter = ({ launchName }: FilterValidationType) => {
      setPagination(false);
      setLaunchNameFilter(launchName);
      !isLaunchLoading && setShowModal(false);
    };

    const resetFilter = () => {
      setLaunchNameFilter("");
      setPagination(true);
    };

  const launchData = {
    ...rawLaunchData,
    docs: rawLaunchData?.docs.filter((launchDetail) =>
      launchDetail.name.includes(launchNameFilter)
    ),
  };

  const selectLaunch = (id: string) => {
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
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <FilterModal
              setFilter={setFilter}
              isLaunchLoading={isLaunchLoading}
              setModal={setModal}
              showModal={showModal}
            />
            <Button fallbackStyle style={{ border: 0 }} onClick={resetFilter}>
              <RetweetOutlined />
            </Button>
            <div style={{ paddingLeft: 20 }}>
              <Dropdown menu={menuProps}>
                <StyledSelectorButton>
                  <Space>
                    {selectedNationality}
                    <DownOutlined />
                  </Space>
                </StyledSelectorButton>
              </Dropdown>
            </div>
          </div>
        </StyledHeader>
        <StyledCardLayout>
          {isLaunchLoading ? (
            <Skeleton active />
          ) : (
            launchData?.docs?.map((launchDetail) => (
              <LaunchCard
                launchDetail={launchDetail}
                selectLaunch={selectLaunch}
              />
            ))
          )}
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
