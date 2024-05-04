import { maxWitdhDevice } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  background-color: #facc15;
`;

export const Header = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 60px;
  margin: 0px auto;
  padding: 0 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${maxWitdhDevice.mobileL} {
    height: 65px;

    justify-content: center;
  }
`;

export const LogoImage = styled.div`
  @media ${maxWitdhDevice.mobileL} {
    margin: 7px 0 0 0;
  }
`;

export const Navbar = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: row;

  @media ${maxWitdhDevice.mobileL} {
    display: none;
  }
`;

export const NavbarItem = styled.li`
  margin: 0px 0px 0px 100px;
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: black;
  font-size: 16px;
`;
