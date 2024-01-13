import { useState } from "react";

const useLaunches = (initialNation: string) => {
  const [pageCount, setPageCount] = useState(1);
  const [usePayloadNationality, setPayloadNationality] =
    useState(initialNation);

  const { data: launchData } = useLaunchesForPayloadsQuery({
    nationality: usePayloadNationality,
    pageCount: pageCount,
  });

  return {
    launchData,
  };
};
