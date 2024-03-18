import styled from "styled-components";

type ImageContainerProps = {
  imageUrl: string;
};

type StatusContainerProps = {
  status: boolean;
};

const StyledCardLayout = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0px;
`;

const StyledStatus = styled.div<StatusContainerProps>`
  background-color: ${(props) => (props.status ? "#05AD52" : "red")};
  height: fit-content;
  margin: 5px;
  padding: 2px;
  font-size: 10px;
  font-weight: bold;
  border-radius: 2px;
  color: ${(props) => (props.status ? "white" : "black")};
  text-align: center;
  display: flex;
`;

const StyledTextContainer = styled("div")`
  display: flex;
  margin: 10px 0px;
  justify-content: space-between;
`;

export { StyledCardLayout, StyledStatus, StyledTextContainer };
