import { maxWitdhDevice, minWitdhDevice } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Wrapper = styled.div`
  @media ${maxWitdhDevice.mobileL} {
    width: 100%;
  }
`;

export const Hero = styled.div`
  margin-top: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 120px;

  @media ${maxWitdhDevice.mobileL} {
    margin-top: 60px;
    
    flex-direction: column;

    gap: 90px;
  }
`;

export const HeroSection = styled.div`
  width: 610px;
  
  margin: 25px 0 0 0;
  
  @media ${maxWitdhDevice.mobileL} {
    width: 85vw;

    text-align: center;
  }
`;

export const Headline = styled.h1`
  margin-bottom: 32px;

  font-size: 50px;

  @media ${maxWitdhDevice.mobileL} {
    font-size: 30px;
  }
`;

export const Subheadline = styled.span`
  font-size: 20px;

  @media ${maxWitdhDevice.mobileL} {
    font-size: 13px;
  }
`;

export const ButtonSection = styled.div`
  margin-top: 32px;

  @media ${maxWitdhDevice.mobileL} {
    display: flex;

    justify-content: center;
  }
`;

export const LogoHero = styled.div`
  @media ${maxWitdhDevice.mobileL} {
    display: none;
  }
`;

export const LogoHeroMobile = styled.div`
  margin-top: 16px;

  @media ${minWitdhDevice.laptop} {
    display: none;
  }
`;

export const NGOSection = styled.div`
  margin-top: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-right: auto;
  margin-left: auto;

  @media ${maxWitdhDevice.mobileL} {
    width: 85vw;

    text-align: center;
  }
`;

export const NGOHeadline = styled.h1`
  font-size: 42px;

  margin-bottom: 32px;

  @media ${maxWitdhDevice.mobileL} {
    margin-bottom: 16px;

    font-size: 30px;
  }
`;

export const NGOSubheadline = styled.span`
  max-width: 1100px;

  font-size: 20px;

  @media ${maxWitdhDevice.mobileL} {
    font-size: 13px;
  }
`;

export const ImageList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 100px 0 70px 0;
  gap: 80px;

  @media ${maxWitdhDevice.mobileL} {
    flex-direction: column;
  }
`;

export const ImageSection = styled.div`

  border-radius: 100%;
  box-shadow: 0 0 50px #ccc;
`;

export const CompaniesSection = styled.div`
  margin-top: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-right: auto;
  margin-left: auto;

  @media ${maxWitdhDevice.mobileL} {
    width: 85vw;

    text-align: center;
  }
`;

export const CompaniesHeadline = styled.h1`
  font-size: 42px;

  margin-bottom: 32px;

  @media ${maxWitdhDevice.mobileL} {
    margin-bottom: 16px;

    font-size: 30px;
  }
`;

export const CompaniesSubheadline = styled.span`
  max-width: 1100px;

  font-size: 20px;

  @media ${maxWitdhDevice.mobileL} {
    font-size: 13px;
  }
`;

export const BoldTextBlue = styled.span`
  font-weight: bold;

  color: rgba(65, 157, 227, 0.83);
`;

export const TextBlue = styled.span`
  color: rgba(65, 157, 227, 0.83);
`;