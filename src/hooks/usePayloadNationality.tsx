import { useState } from "react";
import { usePayloadsNationalitiesQuery } from "../services/spaceXApi";
import { MenuProps } from "antd";

export const usePayloadNationality = () => {
  const { data: nationData } = usePayloadsNationalitiesQuery();
  const [selectedNationality, setSelectedNationality] =
    useState("United States");

  const nationList = nationData?.docs;
  const uniqueNations = [
    ...new Set(nationList?.flatMap((nationality) => nationality.nationalities)),
  ];

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
