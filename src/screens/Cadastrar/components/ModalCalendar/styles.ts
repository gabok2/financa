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
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.cinzaHeader};
  height: 60%;
  position: absolute;
  bottom: 20%;
  left: 20px;
  right: 20px;
`;

export const ContainerCalendar = styled.View`
  width: 100%;
  height: 100%;
`;
