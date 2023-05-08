import styled from 'styled-components/native';
import { scale, verticalScale } from 'react-native-size-matters';

export const Container = styled.View`
  margin-top: ${verticalScale(24)}px;
  flex: 1;
`;

export const Title = styled.Text`
  margin-top: ${verticalScale(24)}px;
  font-size: ${verticalScale(16)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  margin-bottom: ${verticalScale(18)}px;
`;
export const ContainterTitleAndIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerExtrato = styled.View`
  width: 100%;
  margin-top: ${verticalScale(10)}px;
  padding: 0 ${verticalScale(2)}px;

  border-bottom-width: 0.2px;
  border-bottom-color: ${({ theme }) => theme.colors.cinza};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Data = styled.Text`
  font-size: ${verticalScale(14)}px;
  color: ${({ theme }) => theme.colors.cinza};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
`;

export const ContainerData = styled.View`
  margin-top: ${verticalScale(50)}px;
`;

export const TituloExtrato = styled.Text`
  font-size: ${verticalScale(14)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.BOLD};
  margin-bottom: ${verticalScale(2)}px;
`;

export const SubTituloExtrato = styled.Text`
  font-size: ${verticalScale(12)}px;
  color: ${({ theme }) => theme.colors.cinza};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
`;

export const TextoValor = styled.Text`
  font-size: ${verticalScale(14)}px;
  color: ${({ theme }) => theme.colors.success};
  font-family: ${({ theme }) => theme.fonts.BOLD};
  margin-bottom: ${verticalScale(2)}px;
`;

export const GroupTextoAndIcon = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${verticalScale(4)}px;
`;

export const GroupTituloAndSubTitulo = styled.View`
  flex-direction: column;
  margin-left: ${verticalScale(6)}px;
`;

export const GroupValorAndTextoVAlor = styled.View`
  flex-direction: column;
  margin-bottom: ${verticalScale(4)}px;
  align-items: flex-end;
`;

export const Circulo = styled.View`
  width: ${verticalScale(30)}px;
  height: ${verticalScale(30)}px;
  border-radius: ${verticalScale(999)}px;
  background-color: ${({ theme }) => theme.colors.attention};
  justify-content: center;
  align-items: center;
`;
