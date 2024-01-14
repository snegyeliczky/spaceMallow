import { payloadNationalities } from "../types";

export const createNationList = (
  nationList: payloadNationalities[] | undefined
) => {
  if (!nationList) {
    return [];
  }
  const uniqueList = [
    ...new Set(nationList?.flatMap((nationality) => nationality.nationalities)),
  ];
  return uniqueList.filter((item) => item !== "");
};
