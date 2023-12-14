import React from "react";
import { StyledLinkDefault } from "./LinkDefault.styled";

export default function LinkDefault({ to, children }) {
  return (
    <StyledLinkDefault to={to.toLowerCase().replace(/\s+/g, "")}>
      {children}
    </StyledLinkDefault>
  );
}
