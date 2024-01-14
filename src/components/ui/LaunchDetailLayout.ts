import styled from "styled-components";

const StyledDetailHeader = styled("div")`
  display: flex;
  margin-bottom: 20px;
  gap: 25%;
  @media (max-width: 728px) {
    flex-direction: column;
  }
`;

const StyledContentContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const StyledImage = styled("img")`
  max-width: 729px;
  border-radius: 12px;
`;

const StyledTextContainer = styled("div")`
  max-width: 336px;
  display: grid;
  gap: 20px;
  text-align: left;
  height: fit-content;
  padding-bottom: 20px;
`;

const StyledLinkContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledLink = styled("a")`
  color: black;
  font-weight: 700;
`;

const StyledLinkText = styled("div")`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export {
  StyledDetailHeader,
  StyledContentContainer,
  StyledImage,
  StyledTextContainer,
  StyledLinkContainer,
  StyledLink,
  StyledLinkText,
};
