import styled from 'styled-components/native';
import { scale, verticalScale } from 'react-native-size-matters';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  margin-top: ${verticalScale(12)}px;
  font-size: ${verticalScale(27)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
`;

export const Subtitulo = styled.Text`
  text-align: center;
  font-size: ${verticalScale(33)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  margin-top: ${verticalScale(40)}px;
`;

export const LoginTexto = styled.Text`
  margin-top: ${verticalScale(80)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${verticalScale(16)}px;
`;

export const Main = styled.View`
  padding: 0 ${scale(30)}px;
  flex: 1;

  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const ButtonContainer = styled.TouchableOpacity`
  margin-top: ${verticalScale(40)}px;
  width: 100%;
  height: ${verticalScale(56)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  align-items: center;
  padding: 0 ${scale(16)}px;
`;

export const Image = styled.Image`
  width: ${verticalScale(24)}px;
  height: ${verticalScale(24)}px;
`;

export const ButtonText = styled.Text`
  width: 80%;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.BOLD};
  font-size: ${verticalScale(14)}px;
  text-align: center;
`;

export const ButtonGoogle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
