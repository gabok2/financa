import styled from 'styled-components/native';
import { scale, verticalScale } from 'react-native-size-matters';
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.cinzaDiferente};
`;

export const Header = styled.View`
  padding: 0 ${scale(24)}px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${({ theme }) => theme.colors.cinzaHeader};
  width: 100%;
  height: ${verticalScale(150)}px;
`;

export const GroupHeader = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${verticalScale(14)}px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
  color: ${({ theme }) => theme.colors.cinza};
  margin-top: ${verticalScale(10)}px;
`;

export const ContainerValor = styled.TouchableOpacity`
  margin-top: ${verticalScale(50)}px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Valor = styled.Text`
  font-size: ${verticalScale(29)}px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
  color: ${({ theme }) => theme.colors.shape};
`;

export const Main = styled.View`
  flex: 1;
  padding: 0 ${scale(16)}px;
  margin-top: ${verticalScale(14)}px;
`;

export const TituloDescricao = styled.Text`
  font-size: ${verticalScale(14)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.cinza};
  margin-bottom: ${verticalScale(10)}px;
`;

export const Input = styled.TextInput`
  margin-left: ${verticalScale(7)}px;
  flex: 1;
  font-size: ${verticalScale(13)}px;
  margin-bottom: ${verticalScale(10)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
export const Circulo = styled.View`
  width: ${verticalScale(25)}px;
  height: ${verticalScale(25)}px;
  border-radius: ${verticalScale(999)}px;
  background-color: ${({ theme }) => theme.colors.cinza};
  justify-content: center;
  align-items: center;
`;

export const GroupIconInput = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 0.2px;
  border-bottom-color: ${({ theme }) => theme.colors.cinza};
`;

export const GroupIconText = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 0.2px;
  border-bottom-color: ${({ theme }) => theme.colors.cinza};
`;

export const ContainerButton = styled.TouchableOpacity`
  margin-top: ${verticalScale(80)}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: ${verticalScale(60)}px;
  height: ${verticalScale(60)}px;
  background-color: ${({ theme }) => theme.colors.button};

  border-radius: 999px;
`;
