import { useRef } from "react";
import { useState, useEffect } from "react";
import { items } from "components/Aside/items";
import { Squash as Hamburger } from "hamburger-react";
import { StyledLinkDefault } from "components/LinkDefault/LinkDefault.styled";
import styled from "styled-components";
import Avatar from "components/Avatar/Avatar";

export const AsideMobile = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const AsideMobileContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  background-color: #fff;
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: 0px 10px 60px 0px rgba(226, 236, 249, 0.5);
  transition: transform 300ms ease;

  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(101%)"};
  z-index: 1;
`;

export const BtnContainer = styled.div`
  position: absolute;
  padding: 15px;
  top: 0;
  right: 0;
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export const List = styled.ul`
  padding-top: 100px;
  width: 270px;
`;

export const BurgerLink = styled(StyledLinkDefault)`
  width: 100%;
`;

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = (e) => {
    if (!ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <>
      <AsideMobile ref={ref}>
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />

        {
          <AsideMobileContainer $isOpen={isOpen}>
            <BtnContainer>
              <Avatar />
              <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
            </BtnContainer>

            <List>
              {items.map(({ id, name, icon }) => {
                return (
                  <li key={id}>
                    <BurgerLink
                      onClick={() => setOpen((prev) => !prev)}
                      to={name.toLowerCase().replace(/\s+/g, "")}>
                      <span>{name}</span>
                      {icon}
                    </BurgerLink>
                  </li>
                );
              })}
            </List>
          </AsideMobileContainer>
        }
      </AsideMobile>
    </>
  );
};

export default NavMobile;
