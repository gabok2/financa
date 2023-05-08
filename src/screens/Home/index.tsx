import { FlatList, Text } from 'react-native';
import { Container, ContainerFlatList } from './styles';
import { Header } from '@components/Header';
import { Cards } from '@components/Cards';
import { CardLIstem } from '@components/CardLIstem';
export function Home() {
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
    <Container>
      <Header />
      <ContainerFlatList>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={dados}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Cards tipo={item.tipo} titulo={item.titulo} preço={item.preço} />
          )}
        />
      </ContainerFlatList>
      <CardLIstem />
    </Container>
  );
}
