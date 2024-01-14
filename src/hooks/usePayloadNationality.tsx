import { useState } from "react";
import { usePayloadsNationalitiesQuery } from "../services/spaceXApi";
import { MenuProps } from "antd";
import { createNationList } from "../utils/createNationList";

export const usePayloadNationality = () => {
  const { data: nationData } = usePayloadsNationalitiesQuery();
  const [selectedNationality, setSelectedNationality] =
    useState("United States");

  const nationList = nationData?.docs;
  const uniqueNations = createNationList(nationList);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setSelectedNationality(e.key);
  };

  const menuItems: MenuProps["items"] = uniqueNations.map((nation) => ({
    label: nation,
    key: nation,
  }));

  return {
    selectedNationality,
    menuItems,
    handleMenuClick,
  };
};
