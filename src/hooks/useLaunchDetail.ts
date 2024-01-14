import { useLauncheQuery, useLaunchpadQuery } from "../services/spaceXApi";

export const useLaunchDetail = (launchId: string) => {
  const { data: launchDetail, isLoading: isDetailLoading } = useLauncheQuery({
    id: launchId,
  });
  const padId = launchDetail?.launchpad;
  const { data: launchPad, isLoading: isPadLoading } = useLaunchpadQuery({
    id: padId ?? "",
  });

  const isLoading = isDetailLoading || isPadLoading;

  return { isLoading, launchDetail, launchPad };
};
