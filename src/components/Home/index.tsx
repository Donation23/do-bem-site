import {GOOGLE_FORMS_URL_LINK} from "@/constants/general";
import Button from "../Button";
import * as S from "./styles";
import Image from "next/image";

export default function HomePage() {
  const handleSubmit = async () => {
    window.open(GOOGLE_FORMS_URL_LINK, "_blank");
  };

  return (
    <>
      <S.Wrapper>
        <S.Hero id="home-section">
          <S.HeroSection>
            <S.Headline>
              <S.BoldTextBlue>Clube de Descontos</S.BoldTextBlue>
            </S.Headline>
            <S.Subheadline>
              Do bem app conecta doadores, ONGs e empresas. Por meio de um clube
              de benefícios. Oferecemos cupons de desconto aos usuários que são
              fornecidos por empresas comprometidas com causas sociais. Além de
              tudo isso, você ajuda instituições e projetos sociais de sua
              escolha!
            </S.Subheadline>
            <S.ButtonSection>
              <Button
                label="Garanta seu desconto!"
                width="360"
                height="50"
                widthMobile = "280"
                heightMobile = "42"
                fontSize="22"
                fontSizeMobile = '18'
                colorType="blue"
                onClick={handleSubmit}
                submit={true}
              />
            </S.ButtonSection>
          </S.HeroSection>
          <S.LogoHeroMobile>
            <Image
              src="./logo-hero.png"
              width={260}
              height={127}
              alt="Picture of the author"
            />
          </S.LogoHeroMobile>
          <S.LogoHero>
            <Image
              src="./logo-hero.png"
              width={326}
              height={160}
              alt="Picture of the author"
            />
          </S.LogoHero>
        </S.Hero>
        <S.CompaniesSection id="companies-sections">
          <S.CompaniesHeadline>
            <S.BoldTextBlue>Empresas Apoiadas</S.BoldTextBlue>
          </S.CompaniesHeadline>
          <S.CompaniesSubheadline>
            Economize dinheiro com nossas ofertas de empresas parceiras
          </S.CompaniesSubheadline>
          <S.ImageList>
            <S.ImageSection>
              <Image
                src="./company1.png"
                width={180}
                height={180}
                alt="Picture of the author"
                style={{
                  borderRadius: "100%",
                  boxShadow: "0 0 25px #ccc",
                }}
              />
            </S.ImageSection>
            <S.ImageSection>
              <Image
                src="./company2.png"
                width={180}
                height={180}
                alt="Picture of the author"
                style={{
                  borderRadius: "100%",
                  boxShadow: "0 0 25px #ccc",
                }}
              />
            </S.ImageSection>
          </S.ImageList>
          <S.ButtonSection>
            <Button
              label="Quero economizar!"
              width="360"
              height="50"
              widthMobile = "280"
              heightMobile = "42"
              fontSize="22"
              fontSizeMobile = '18'
              colorType="blue"
              onClick={handleSubmit}
              submit={true}
            />
          </S.ButtonSection>
        </S.CompaniesSection>
        <S.NGOSection id="ngo-section">
          <S.NGOHeadline><S.BoldTextBlue>ONGs Apoiadas</S.BoldTextBlue></S.NGOHeadline>
          <S.NGOSubheadline>
            Receba ofertas, economize e ainda
            apoie projetos sociais
          </S.NGOSubheadline>
          <S.ImageList>
            <S.ImageSection>
              <Image
                src="./ngo.png"
                width={180}
                height={185}
                alt="Picture of the author"
                style={{
                  borderRadius: "100%",
                  boxShadow: "0 0 25px #ccc",
                }}
              />
            </S.ImageSection>
          </S.ImageList>
          <S.ButtonSection>
            <Button
              label="Economize com propósito"
              width="360"
              height="50"
              widthMobile = "280"
              heightMobile = "42"
              fontSize="22"
              fontSizeMobile = '18'
              colorType="blue"
              onClick={handleSubmit}
              submit={true}
            />
          </S.ButtonSection>
        </S.NGOSection>
      </S.Wrapper>
    </>
  );
}
