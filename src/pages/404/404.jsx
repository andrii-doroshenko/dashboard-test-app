import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  font-family: "Arial", sans-serif;
`;

const NotFoundTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const NotFoundText = styled.p`
  color: #555;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const GoBackLink = styled(NavLink)`
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    color: #fff;
    background-color: #5932ea;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
      <NotFoundText>The page you are looking for does not exist.</NotFoundText>
      <GoBackLink to="/">Go back to Home</GoBackLink>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
