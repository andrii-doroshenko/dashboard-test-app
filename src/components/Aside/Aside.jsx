import logo from "img/logo.svg";
import { ReactComponent as ArrowIcon } from "img/aside-icons/chevron-right-icon.svg";
import { items } from "./items";
import {
  Version,
  LogoContainer,
  Title,
  SectionAside,
  Nav,
  NavItem,
} from "./Aside.styled";
import LinkDefault from "components/LinkDefault/LinkDefault";
import Avatar from "components/Avatar/Avatar";

export default function Aside() {
  return (
    <SectionAside>
      <LogoContainer>
        <img src={logo} width="37" height="37" alt="logo" />
        <Title>
          Dashboard<Version>v.01</Version>
        </Title>
      </LogoContainer>

      <Nav>
        <ul>
          {items.map(({ id, name, icon }) => (
            <NavItem key={id}>
              <LinkDefault to={name}>
                {icon}
                {name}
                <ArrowIcon stroke="currentColor" />
              </LinkDefault>
            </NavItem>
          ))}
        </ul>
      </Nav>

      <Avatar />
    </SectionAside>
  );
}
