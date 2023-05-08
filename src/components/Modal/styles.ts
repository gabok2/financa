import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { scale, verticalScale } from 'react-native-size-matters';
const width = Dimensions.get('window').width;

export const Container = styled.View`
  width: ${width}px;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
`;

export const Main = styled.View`
  align-items: center;
  border-radius: 8px;
  border-top-right-radius: ${scale(20)}px;
  border-top-left-radius: ${scale(20)}px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${(props) => props.theme.colors.cinzaHeader};
  height: ${verticalScale(428)}px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Content = styled.View`
  margin-top: ${verticalScale(34)}px;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: ${verticalScale(20)}px;
`;

export const Circulo = styled.TouchableOpacity`
  width: ${verticalScale(50)}px;
  height: ${verticalScale(50)}px;
  border-radius: ${verticalScale(999)}px;
  background-color: ${({ theme }) => theme.colors.cinzaHeader};
  justify-content: center;
  align-items: center;
  border: 0.6px solid ${({ theme }) => theme.colors.cinzaBorda};
  border-color: ${({ theme }) => theme.colors.cinzaBorda};
`;

export const Numero = styled.Text`
  font-size: ${verticalScale(19)}px;
  font-family: ${(props) => props.theme.fonts.BOLD};
  color: ${(props) => props.theme.colors.shape};
`;

export const ContentZero = styled.View`
  margin-top: ${verticalScale(34)}px;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;
