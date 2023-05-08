import { useRef, useState } from 'react';
import {
  Container,
  ContainerFlatList,
  Main,
  Icone,
  Titulo,
  Circulo,
} from './styles';
import { Modal, TouchableWithoutFeedback, FlatList, Text } from 'react-native';
import {
  Article,
  ForkKnife,
  GraduationCap,
  HeartStraight,
  House,
  File,
  Martini,
  ShoppingBag,
  TelevisionSimple,
  User,
  Money,
  Smiley,
  ShoppingCart,
  PawPrint,
  Gift,
  TShirt,
  FirstAid,
  BagSimple,
  TrainSimple,
  AirplaneTilt,
  CurrencyDollarSimple,
  ChartLine,
  DotsThreeOutline,
  Star,
} from 'phosphor-react-native';
import { useHome } from '@hooks/home';
type ModalProps = {
  isVisible: boolean;
  onCloseModal: () => void;
};

type Categoria = {
  id?: number;
  nome?: String;
  icone?: String;
  cor?: String;
};
export function ModalCategoria({ isVisible, onCloseModal }: ModalProps) {
  const { selectedCategory, setSelectedCategory, selectDespesaAndReceita } =
    useHome();

  const icons: { [key: string]: JSX.Element } = {
    ForkKnife: <ForkKnife size={20} color="#d3cfcf" weight="fill" />,
  };

  const dadosDespesa = [
    {
      id: 1,
      nome: 'Alimentação',
      icone: 'ForkKnife',
      cor: '#E373A9',
    },
  ];

  const dadosReceita = [
    {
      id: 1,
      nome: 'Empréstimos',
      icone: <CurrencyDollarSimple size={20} color="#d3cfcf" weight="fill" />,
      cor: '#27C497',
    },
    {
      id: 2,
      nome: 'Investimentos',
      icone: <ChartLine size={20} color="#d3cfcf" weight="fill" />,
      cor: '#27C497',
    },
    {
      id: 3,
      nome: 'Outras receitas',
      icone: <DotsThreeOutline size={20} color="#d3cfcf" weight="fill" />,
      cor: '#27C497',
    },
    {
      id: 4,
      nome: 'Salário',
      icone: <Star size={20} color="#d3cfcf" weight="fill" />,
      cor: '#27C497',
    },
  ];
  const modalRef = useRef(null);
  function handleCloseModal(event: any) {
    if (modalRef.current && event.target === modalRef.current) {
      onCloseModal();
    }
  }

  function extrairDados(item: Categoria) {
    const categoria = {
      id: item.id,
      nome: item.nome,
      cor: item.cor,
      icone: item.icone,
    };

    setSelectedCategory(categoria);
    onCloseModal();
  }
  console.log(selectedCategory);
  return (
    <Modal
      visible={isVisible}
      onRequestClose={onCloseModal}
      animationType="none"
      transparent
    >
      <TouchableWithoutFeedback onPress={handleCloseModal}>
        <Container ref={modalRef}>
          <Main>
            {selectDespesaAndReceita === 'despesa' ? (
              <FlatList
                data={dadosDespesa}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                  <ContainerFlatList onPress={() => extrairDados(item)}>
                    <Circulo
                      style={{
                        backgroundColor: item.cor,
                      }}
                    >
                      <Icone>{icons[item.icone]}</Icone>
                    </Circulo>
                    <Titulo>{item.nome}</Titulo>
                  </ContainerFlatList>
                )}
              />
            ) : (
              <></>
            )}
          </Main>
        </Container>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
