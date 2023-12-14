import { Outlet } from "react-router-dom";
import Aside from "components/Aside/Aside";
import styled from "styled-components";
import NavMobile from "components/NavMobile/NavMobile";
import { useEffect, useState } from "react";

export const MainContainer = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
  }
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Section = styled.section`
  margin-top: 10px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 36px;
  }
`;

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`;

export const Greeting = styled.p`
  /* margin: 0 0 51px 0; */
  font-size: 24px;
  font-weight: 500;
  /* vertical-align: middle; */
`;

export default function Layout() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width < 1024;

  return (
    <>
      <main>
        <MainContainer>
          {isMobile ? <NavMobile /> : <Aside />}

          <Section>
            <Container>
              <Greeting>
                Hello Evano{" "}
                <span role="img" aria-label="Waving Hand">
                  👋🏼
                </span>
              </Greeting>

              <Outlet />
            </Container>
          </Section>
        </MainContainer>
      </main>
    </>
  );
}
