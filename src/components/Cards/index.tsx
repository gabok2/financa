import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar,
} from 'phosphor-react-native';
import {
  Container,
  ContainerTituloAndIcone,
  Descricao,
  Preço,
  Titulo,
} from './styles';

type Props = {
  tipo: string;
  titulo?: string;
  preço?: number;
};

export function Cards({ tipo, titulo, preço }: Props) {
  const dados = [
    {
      id: 1,
      tipo: 'up',
      titulo: 'Entradas',
      preço: 17.36,
    },

    {
      id: 2,
      tipo: 'down',
      titulo: 'Saídas',
      preço: 7.36,
    },

    {
      id: 3,
      tipo: 'total',
      titulo: 'Total',
      preço: 27.36,
    },
  ];
  return (
    <Container type={tipo}>
      <ContainerTituloAndIcone>
        <Titulo type={tipo}>{titulo}</Titulo>
        {tipo === 'up' && <ArrowCircleUp size={32} color="#00b37e" />}
        {tipo === 'down' && <ArrowCircleDown size={32} color="#ff669d" />}
        {tipo === 'total' && <CurrencyDollar size={32} color="#ffffff" />}
      </ContainerTituloAndIcone>
      <Preço type={tipo}>R$ {preço}</Preço>
      <Descricao type={tipo}>Última entrada dia 13 de abril</Descricao>
    </Container>
  );
}
