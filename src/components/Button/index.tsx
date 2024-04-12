import * as S from "./styles";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  label?: string;
  href?: string;
  width?: string;
  height?: string;
  submit?: boolean;
  colorType?: S.ButtonSize;
  onClick?: VoidFunction;
  iconSrc?: string;
  fontSize?: string;
};

export default function Button({
  width = "70",
  height = "40",
  submit = false,
  colorType = "default",
  label,
  href,
  onClick,
  iconSrc,
  fontSize = "15",
  ...props
}: ButtonProps) {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <S.Wrapper
      width={width}
      height={height}
      colorType={colorType}
      fontSize={fontSize}
      onClick={handleClick}
    >
      {!iconSrc ? <span>{label}</span> : <></>}
    </S.Wrapper>
  );
}
