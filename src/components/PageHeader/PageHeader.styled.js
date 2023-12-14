import styled from "styled-components";
import SearchIcon from "img/search-icon.svg";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding-top: 1rem;

  @media screen and (min-width: 768px) {
    padding-top: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Title = styled.div`
  text-align: center;

  & h2 {
    color: #000;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.22px;
  }

  & p {
    color: #16c098;
    font-size: 14px;
    font-weight: 400;
  }

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const Input = styled.input`
  position: relative;
  outline: none;
  width: 216px;
  padding: 10px 40px;
  font-size: 12px;
  background: url("${SearchIcon}") no-repeat 8px center;
  background-size: 16px;
  background-color: #f9fbff;
  border: none;
  border-radius: 10px;

  &::placeholder {
    color: #b5b7c0;
  }
`;
