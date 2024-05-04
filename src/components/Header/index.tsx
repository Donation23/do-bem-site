import {GOOGLE_FORMS_URL_LINK} from "@/constants/general";
import * as S from "./styles";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.LogoImage>
            <Image
              src="./logo-header.png"
              width={45}
              height={39}
              alt="Picture of the author"
            />
          </S.LogoImage>
          <S.Navbar>
            <S.NavbarItem>
              <S.Link href="#home-section">Início</S.Link>
            </S.NavbarItem>
            <S.NavbarItem>
              <S.Link href="#ngo-section">ONG&apos;s</S.Link>
            </S.NavbarItem>
            <S.NavbarItem>
              <S.Link href="#companies-sections">Empresas</S.Link>
            </S.NavbarItem>
            <S.NavbarItem>
              <S.Link href={GOOGLE_FORMS_URL_LINK}>Fazer parte</S.Link>
            </S.NavbarItem>
          </S.Navbar>
        </S.Header>
      </S.Wrapper>
    </>
  );
}
