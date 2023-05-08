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
  border-radius: 8px;
  border-top-right-radius: ${scale(20)}px;
  border-top-left-radius: ${scale(20)}px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${(props) => props.theme.colors.cinzaHeader};
  height: 93%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ContainerFlatList = styled.TouchableOpacity`
  margin-top: ${verticalScale(30)}px;
  padding: 0 ${verticalScale(24)}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: ${verticalScale(8)}px;
  border-bottom-width: 0.6px;
  border-bottom-color: ${({ theme }) => theme.colors.cinzaBorda};
`;

export const Circulo = styled.View`
  width: ${verticalScale(25)}px;
  height: ${verticalScale(25)}px;
  border-radius: ${verticalScale(999)}px;
  background-color: ${({ theme }) => theme.colors.cinza};
  justify-content: center;
  align-items: center;
  margin-bottom: ${verticalScale(10)}px;
`;

export const Titulo = styled.Text`
  color: ${(props) => props.theme.colors.shape};
  font-size: ${verticalScale(14)}px;
  font-family: ${(props) => props.theme.fonts.REGULAR};
  margin-bottom: ${verticalScale(10)}px;
`;

export const Icone = styled.View``;
