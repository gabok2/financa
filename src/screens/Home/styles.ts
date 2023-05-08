import styled from 'styled-components/native';
import { scale, verticalScale } from 'react-native-size-matters';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const ContainerFlatList = styled.View`
  width: 100%;
`;
