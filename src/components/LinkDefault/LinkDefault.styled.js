import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLinkDefault = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 250px;
  padding: 11px;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &.active,
  &:hover {
    color: #fff;
    background-color: #5932ea;
  }

  & > svg:first-child {
    margin-right: 14px;
  }

  & > svg:last-child {
    margin-left: auto;
  }
`;
