import { PaginationProps } from "antd";

export const itemRender: PaginationProps["itemRender"] = (
  _,
  type,
  originalElement
) => {
  if (type === "prev") {
    return "";
  }
  if (type === "next") {
    return "";
  }
  return originalElement;
};
