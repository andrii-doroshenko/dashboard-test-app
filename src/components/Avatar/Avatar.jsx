import avatarImage from "img/avatar.jpeg";
import styled from "styled-components";

const AvatarContainer = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;

  & > div {
    padding-left: 12px;
  }
`;

const AvatarHeader = styled.p`
  font-weight: 500;
  margin: 0 0 5px 0;
`;

const PreHeader = styled.p`
  margin: 0;
  font-size: 12px;
  color: #757575;
`;

export default function Avatar() {
  return (
    <AvatarContainer>
      <img src={avatarImage} width="42" height="42" alt="avatar" />
      <div>
        <AvatarHeader>Evano</AvatarHeader>
        <PreHeader>Project Manager</PreHeader>
      </div>
    </AvatarContainer>
  );
}
