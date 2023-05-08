import { useAuth } from '@hooks/auth';
import {
  Container,
  Avatar,
  ContainerTexto,
  SubTituloHeader,
  TituloHeader,
  ContainerTextAndAvatar,
  Deslogar,
} from './styles';
import { Power } from 'phosphor-react-native';

export function Header() {
  const { user, signOut } = useAuth();
  return (
    <Container>
      <ContainerTextAndAvatar>
        <Avatar source={user.photo ? { uri: user.photo } : undefined} />

        <ContainerTexto>
          <TituloHeader>Olá,</TituloHeader>
          <SubTituloHeader>{user.givenName}</SubTituloHeader>
        </ContainerTexto>
      </ContainerTextAndAvatar>
      <Deslogar onPress={signOut}>
        <Power size={30} color="#ba253e" weight="regular" />
      </Deslogar>
    </Container>
  );
}
