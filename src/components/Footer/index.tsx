import {INSTAGRAM_LINK, INSTAGRAM_NAME} from "@/constants/general";
import * as S from "./styles";
import Image from "next/image";

export default function Footer() {
  const handleSubmit = async () => {
    window.open(INSTAGRAM_LINK, "_blank");
  };

  return (
    <>
      <S.Wrapper>
        <S.Footer>
          <Image
            src="./logo_inova.png"
            width={200}
            height={62}
            alt="Picture of the author"
          />
          <S.Section >
            <S.BoldText>Junte-se ao nosso clube</S.BoldText>
            <S.SocialMedia onClick={handleSubmit}>
              <Image
                src="./icon_instagram.png"
                width={30}
                height={30}
                alt="Picture of the author"
              />
              <S.SocialMediaText>{INSTAGRAM_NAME}</S.SocialMediaText>
            </S.SocialMedia>
          </S.Section>
        </S.Footer>
      </S.Wrapper>
    </>
  );
}
