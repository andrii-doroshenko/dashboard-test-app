import styled from "styled-components";

export const Table = styled.table`
  margin-top: 2rem;
  display: block;
  width: 100%;
  font-weight: 500;
  border-collapse: collapse;

  @media screen and (min-width: 768px) {
    display: table;
  }
`;

export const Thead = styled.thead`
  display: block;
  position: relative;

  &::after {
    display: none;
    position: absolute;
    left: -40px;
    right: -40px;
    bottom: 0;
    content: "";
    height: 1px;
    background-color: #eee;
  }

  & tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  @media screen and (min-width: 768px) {
    display: table-header-group;

    & tr {
      position: static;
    }
  }
`;

export const Tr = styled.tr`
  display: block;
  margin-bottom: 1rem;
  padding-bottom: 1rem;

  @media screen and (min-width: 768px) {
    display: table-row;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const Th = styled.th`
  display: block;
  padding-bottom: 14px;
  font-weight: 500;
  color: #b5b7c0;
  /* word-wrap: break-word; */

  &:not(:last-child) {
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    display: table-cell;
  }
`;

export const Tbody = styled.tbody`
  display: block;
  line-height: 2;

  & tr {
    border-bottom: 1px solid #eee;
  }

  @media screen and (min-width: 768px) {
    display: table-row-group;
    line-height: 1.15;
  }
`;

export const Td = styled.td`
  display: flex;
  justify-content: space-between;
  &:nth-child(odd) {
    background-color: #f9fbff;
  }
  word-wrap: break-word;

  &::before {
    color: #b5b7c0;
  }

  &:nth-of-type(1):before {
    content: "Name:";
  }
  &:nth-of-type(2):before {
    content: "Company:";
  }
  &:nth-of-type(3):before {
    content: "Phone Number:";
  }
  &:nth-of-type(4):before {
    content: "Email:";
  }
  &:nth-of-type(5):before {
    content: "Country";
  }
  &:nth-of-type(6):before {
    content: "Status";
  }

  @media screen and (min-width: 768px) {
    display: table-cell;
    height: 70px;

    &:not(:last-child) {
      padding-right: 14px;
    }
    &:last-child {
      text-align: right;
    }
    &::before {
      display: none;
    }
    &:nth-child(odd) {
      background-color: #fff;
    }
  }
`;

export const TdStatus = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 29px;
  border-radius: 4px;

  color: ${(props) => (props.$isStatus ? "#008767" : "#DF0404")};
  border: ${(props) =>
    props.$isStatus ? "1px solid #00B087" : "1px solid #DF0404"};
  background: ${(props) =>
    props.$isStatus ? "rgba(22, 192, 152, 0.38)" : "#FFC5C5"};
`;
