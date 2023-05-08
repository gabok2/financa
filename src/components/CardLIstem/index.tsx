import { Article, DotsThreeOutlineVertical } from 'phosphor-react-native';
import {
  Container,
  Title,
  ContainerExtrato,
  GroupTextoAndIcon,
  GroupTituloAndSubTitulo,
  GroupValorAndTextoVAlor,
  SubTituloExtrato,
  TextoValor,
  TituloExtrato,
  Circulo,
  Data,
  ContainerData,
  ContainterTitleAndIcon,
} from './styles';
import { SectionList } from 'react-native';
import theme from '@theme/index';

type Props = {
  id: number;
  data: string;
  title: string;
  subtitulo: string;
  valor: number;
  subtituloExtrato: string;
};
export function CardLIstem() {
  const dados = [
    {
      id: 1,
      data: '13',
      title: 'Divida',
      subtitulo: 'Conta inicial',
      valor: 100.0,
      subtituloExtrato: 'recebido',
    },
    {
      id: 2,
      data: '13',
      title: 'Emprestimo',
      subtitulo: 'Conta inicial',
      valor: 400.0,
      subtituloExtrato: 'pago',
    },
    {
      id: 3,
      data: '13',
      title: 'Biscoito',
      subtitulo: 'Conta inicial',
      valor: 800.0,
      subtituloExtrato: 'recebido',
    },
    {
      id: 4,
      data: '13',
      title: 'Compras',
      subtitulo: 'Conta inicial',
      valor: 50.0,
      subtituloExtrato: 'pago',
    },
    {
      id: 5,
      data: '13',
      title: 'celular',
      subtitulo: 'Conta inicial',
      valor: 2422.0,
      subtituloExtrato: 'pago',
    },
    {
      id: 6,
      data: '14',
      title: 'Compras',
      subtitulo: 'Conta inicial',
      valor: 50.0,
      subtituloExtrato: 'pago',
    },
    {
      id: 7,
      data: '14',
      title: 'relogio',
      subtitulo: 'Conta inicial',
      valor: 1422.0,
      subtituloExtrato: 'pago',
    },
    {
      id: 8,
      data: '14',
      title: 'Compras',
      subtitulo: 'Conta inicial',
      valor: 150.0,
      subtituloExtrato: 'pago',
    },
    {
      id: 9,
      data: '14',
      title: 'salario',
      subtitulo: 'Conta inicial',
      valor: 3000.0,
      subtituloExtrato: 'recebido',
    },
    {
      id: 10,
      data: '14',
      title: 'jogo',
      subtitulo: 'Conta inicial',
      valor: 250.0,
      subtituloExtrato: 'pago',
    },
  ];

  const sections = Object.values(
    dados.reduce((acc, item) => {
      const date = item.data;
      if (!acc[date]) {
        acc[date] = {
          title: date,
          data: [],
        };
      }
      acc[date].data.push(item);
      return acc;
    }, {} as Record<string, { title: string; data: Props[] }>)
  );

  return (
    <Container>
      <ContainterTitleAndIcon>
        <Title>Fluxo de caixa</Title>
        <DotsThreeOutlineVertical
          size={20}
          color={theme.colors.cinza}
          weight="fill"
        />
      </ContainterTitleAndIcon>

      <SectionList
        showsVerticalScrollIndicator={false}
        style={{ width: '100%', marginBottom: 10 }}
        sections={sections}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <>
            <ContainerExtrato>
              <GroupTextoAndIcon>
                <Circulo>
                  <Article size={24} color="#FFF" />
                </Circulo>
                <GroupTituloAndSubTitulo>
                  <TituloExtrato>{item.title}</TituloExtrato>
                  <SubTituloExtrato>{item.subtitulo}</SubTituloExtrato>
                </GroupTituloAndSubTitulo>
              </GroupTextoAndIcon>

              <GroupValorAndTextoVAlor>
                <TextoValor>{item.valor}</TextoValor>
                <SubTituloExtrato>{item.subtituloExtrato}</SubTituloExtrato>
              </GroupValorAndTextoVAlor>
            </ContainerExtrato>
          </>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <ContainerData>
            <Data>{title} de abril</Data>
          </ContainerData>
        )}
      />
    </Container>
  );
}
