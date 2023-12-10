import { Outlet } from "react-router-dom";
import Aside from "components/Aside/Aside";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
`;

export const Section = styled.section`
  width: 100%;
  padding-left: 70px;
  padding-right: 70px;
  margin-top: 36px;
`;

export const Greeting = styled.p`
  margin: 0 0 51px 0;
  font-size: 24px;
  font-weight: 500;
  vertical-align: middle;
`;

export default function Layout() {
  return (
    <>
      <main>
        <MainContainer>
          <Aside />
          <Section>
            <Greeting>Hello Evano 👋🏼 ,</Greeting>
            <Outlet />
          </Section>
        </MainContainer>
      </main>
    </>
  );
}
