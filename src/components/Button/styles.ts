import { maxWitdhDevice } from "@/styles/GlobalStyles";
import mainColors from "@/styles/mainColors";
import styled, {css} from "styled-components";

type Props = {
  width: string;
  height: string;
  widthMobile: string;
  heightMobile: string;
  colorType: ButtonSize;
  fontSize: string;
  fontSizeMobile: string;
};

const colorsType = {
  default: css<Props>`
    background-color: ${mainColors.white.normal};
    border: 1px solid ${mainColors.others.borderDark};

    span,
    a {
      color: ${mainColors.black.normal};
      text-decoration: none;
    }

    &:hover {
      background-color: rgb(230, 230, 230);
    }
  `,
  red: css<Props>`
    background-color: ${mainColors.error.normal};
    border: 1px solid ${mainColors.error.normal};

    span,
    a {
      color: ${mainColors.white.normal};
      text-decoration: none;
    }

    &:hover {
      background-color: rgba(206, 44, 44, 0.83);
    }
  `,
  green: css<Props>`
    background-color: ${mainColors.success.normal};
    border: 1px solid ${mainColors.success.normal};

    span,
    a {
      color: ${mainColors.white.normal};
      text-decoration: none;
    }

    &:hover {
      background-color: rgba(34, 197, 94, 0.83);
    }
  `,
  blue: css<Props>`
    background-color: ${mainColors.blue.normal};
    border: 1px solid ${mainColors.blue.normal};

    span,
    a {
      color: ${mainColors.white.normal};
      text-decoration: none;
    }

    &:hover {
      background-color: rgba(65, 157, 227, 0.83);
    }
  `,
};

export type ButtonSize = keyof typeof colorsType;

export const Wrapper = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  font-size: ${(props) => props.fontSize}px;
  font-weight: 600;

  span,
  a {
    text-decoration: none;
    font-size: ${(props) => props.fontSize}px;
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  ${({colorType}) => colorsType[colorType]};

  img {
    padding: 5px;
  }

  img:hover {
    opacity: 50%;
  }

  @media ${maxWitdhDevice.mobileL} {
    width: ${(props) => props.widthMobile}px;
    height: ${(props) => props.heightMobile}px;

    font-size: ${(props) => props.fontSizeMobile}px;
    
    span,
    a {
      font-size: ${(props) => props.fontSizeMobile}px;
    }
  }
`;
