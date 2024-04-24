import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  background-color: #facc15;

  margin-top: 100px;
`;

export const Footer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 250px;
  margin: 0px auto;
  padding: 0 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoldText = styled.span`
  font-weight: bold;

  font-size: 24px;
  /* color: #fff; */
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SocialMedia = styled.div`
  margin: 24px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const SocialMediaText = styled.div`
  font-size: 24px;
  margin: 0 0 0 8px;
`;



