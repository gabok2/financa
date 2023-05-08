import styled from 'styled-components/native';
import { scale, verticalScale } from 'react-native-size-matters';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${verticalScale(21)}px;
  margin-bottom: ${verticalScale(21)}px;
`;
export const Avatar = styled.Image`
  width: ${verticalScale(48)}px;
  height: ${verticalScale(52)}px;
  border-radius: ${scale(10)}px;
`;

export const ContainerTexto = styled.View`
  width: ${verticalScale(73)}px;
  height: ${verticalScale(58)}px;
  flex-direction: column;
  justify-content: center;
  margin-left: ${verticalScale(15)}px;
`;

export const TituloHeader = styled.Text`
  font-size: ${verticalScale(18)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.shape};
`;

export const SubTituloHeader = styled.Text`
  font-size: ${scale(18)}px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
  color: ${({ theme }) => theme.colors.shape};
`;

export const ContainerTextAndAvatar = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Deslogar = styled.TouchableOpacity``;
