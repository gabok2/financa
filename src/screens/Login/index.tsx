import {
  Container,
  Main,
  Title,
  Subtitulo,
  LoginTexto,
  ButtonGoogle,
  ButtonText,
  ButtonContainer,
  Image,
} from './styles';

import { CurrencyCircleDollar } from 'phosphor-react-native';

import logoGoogle from '@assets/google.png';
import { useAuth } from '@hooks/auth';
export function Login() {
  const { signIn } = useAuth();
  return (
    <Container>
      <Main>
        <CurrencyCircleDollar
          style={{ marginTop: 114 }}
          size={60}
          color="#17ba7e"
          weight="bold"
        />
        <Title>gofinances</Title>
        <Subtitulo>Controle suas finanças de forma muito simples</Subtitulo>
        <LoginTexto>Faça seu login abaixo</LoginTexto>
        <ButtonContainer onPress={signIn}>
          <Image source={logoGoogle} />
          <ButtonGoogle>
            <ButtonText>Entrar com o Google</ButtonText>
          </ButtonGoogle>
        </ButtonContainer>
      </Main>
    </Container>
  );
}
