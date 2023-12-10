import styled from "styled-components";

export const Header = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Table = styled.table`
  width: 100%;
  font-weight: 500;
  border-collapse: collapse;
  margin-bottom: 30px;
`;

export const Thead = styled.thead`
  position: relative;

  &::after {
    position: absolute;
    left: -40px;
    right: -40px;
    bottom: 0;
    content: "";
    height: 1px;
    background-color: #eee;
  }
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding-bottom: 14px;
  font-weight: 500;
  color: #b5b7c0;
  word-wrap: break-word;

  &:not(:last-child) {
    text-align: left;
  }
`;

export const Tbody = styled.tbody`
  & tr {
    border-bottom: 1px solid #eee;
  }
`;

export const Td = styled.td`
  height: 70px;
  word-wrap: break-word;

  &:not(:last-child) {
    padding-right: 14px;
  }

  &:last-child {
    text-align: right;
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
