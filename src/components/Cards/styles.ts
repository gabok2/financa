import styled, { css } from 'styled-components/native';
import { scale, verticalScale } from 'react-native-size-matters';
import theme from '@theme/index';

type ContainerProps = {
  type: string;
};

export const Container = styled.View`
  margin-top: ${verticalScale(24)}px;
  width: ${verticalScale(300)}px;
  height: ${verticalScale(200)}px;
  ${({ type }: ContainerProps) => css`
    background-color: ${type === 'total'
      ? theme.colors.success
      : theme.colors.shape};
  `};

  border-radius: 6px;
  padding: ${verticalScale(16)}px;
  margin-right: ${verticalScale(16)}px;
`;

export const ContainerTituloAndIcone = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Titulo = styled.Text`
  ${({ type }: ContainerProps) => css`
    color: ${type === 'total' ? theme.colors.shape : theme.colors.title};
  `};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${scale(14)}px;
`;

export const Preço = styled.Text`
  margin-top: ${verticalScale(60)}px;
  ${({ type }: ContainerProps) => css`
    color: ${type === 'total' ? theme.colors.shape : theme.colors.title};
  `};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${scale(32)}px;
  font-weight: 500;
`;

export const Descricao = styled.Text`
  margin-top: ${verticalScale(8)}px;
  ${({ type }: ContainerProps) => css`
    color: ${type === 'total' ? theme.colors.shape : theme.colors.text};
  `};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${scale(12)}px;
`;
