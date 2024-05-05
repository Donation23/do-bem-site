import * as S from "./styles";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  label?: string;
  href?: string;
  width?: string;
  height?: string;
  widthMobile?: string;
  heightMobile?: string;
  submit?: boolean;
  colorType?: S.ButtonSize;
  onClick?: VoidFunction;
  iconSrc?: string;
  fontSize?: string;
  fontSizeMobile?: string;
};

export default function Button({
  width = "70",
  height = "40",
  widthMobile = "",
  heightMobile = "",
  submit = false,
  colorType = "default",
  label,
  href,
  onClick,
  iconSrc,
  fontSize = "15",
  fontSizeMobile = '',
  ...props
}: ButtonProps) {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <S.Wrapper
      width={width}
      height={height}
      widthMobile={widthMobile}
      heightMobile={heightMobile}
      colorType={colorType}
      fontSize={fontSize}
      fontSizeMobile={fontSizeMobile}
      onClick={handleClick}
    >
      {!iconSrc ? <span>{label}</span> : <></>}
    </S.Wrapper>
  );
}
