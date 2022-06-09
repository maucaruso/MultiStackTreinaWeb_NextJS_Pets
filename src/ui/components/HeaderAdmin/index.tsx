import { Link, Box } from "@mui/material";
import NextLink from "next/link";
import { Container, Logo, LinksContainer } from "./style";

export default function HeaderAdmin() {
  return (
    <Container>
      <div>
        <Logo src={"/images/logo.svg"} alt={"Adote um pet"} />
        <LinksContainer>
          <Link component={NextLink} href={"/pets/cadastro"}>
            <a>Cadastrar Pet</a>
          </Link>
          <Link component={NextLink} href={"/pets/relatorio"}>
            <a>
              Relatório <Box component={'span'} sx={{ display: { sm: 'initial', xs: 'none' } }}>de adoção</Box>
            </a>
          </Link>
        </LinksContainer>
      </div>
    </Container>
  );
}
