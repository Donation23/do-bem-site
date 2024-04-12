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
`;

export const Logo = styled.img``;

export const Navbar = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: row;
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
