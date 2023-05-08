import {
  Calendar,
  CheckCircle,
  ListBullets,
  PencilSimple,
} from 'phosphor-react-native';
import {
  Main,
  ContainerButton,
  GroupIconInput,
  Input,
  GroupIconText,
  Circulo,
  TituloDescricao,
  Container,
  Header,
  GroupHeader,
  Title,
  ContainerValor,
  Valor,
} from './styles';
import { ModalCategoria } from '../ModalCategoria';
import { useEffect, useState } from 'react';
import { useHome } from '@hooks/home';

import moment from 'moment';
import theme from '@theme/index';
import { ModalCalendar } from '../ModalCalendar';
import { TouchableOpacity } from 'react-native';
import { Modal } from '@components/Modal';
import { FormatPrice } from '@components/FormatPrice';

export function Receita() {
  const [modalVisible, setModalVisible] = useState(false);

  const [value, setValue] = useState(0.0);
  const [modalCategoriaVisible, setModalCategoriaVisible] = useState(false);
  const [modalCalendarVisible, setModalCalendarVisible] = useState(false);
  const {
    selectedDate,
    selectedCategory,
    setSelectedCategory,
    setSelectedDate,
    selectDespesaAndReceita,
    setSelectDespesaAndReceita,
  } = useHome();

  function handleCloseModal() {
    setModalCategoriaVisible(false);
    setModalCalendarVisible(false);
    setModalVisible(false);
  }
  const diaHoje = moment().format('DD/MM/YYYY');

  useEffect(() => {
    return () => {
      setSelectedCategory(null);
      setSelectedDate(moment().format('DD/MM/YYYY'));
    };
  }, []);

  return (
    <Container>
      <Header>
        <GroupHeader>
          <TouchableOpacity
            onPress={() => setSelectDespesaAndReceita('despesa')}
          >
            <Title
              style={{
                color:
                  selectDespesaAndReceita === 'despesa'
                    ? theme.colors.shape
                    : theme.colors.cinza,
              }}
            >
              Despesa
            </Title>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectDespesaAndReceita('receita')}
          >
            <Title
              style={{
                color:
                  selectDespesaAndReceita === 'receita'
                    ? theme.colors.shape
                    : theme.colors.cinza,
              }}
            >
              Receita
            </Title>
          </TouchableOpacity>
        </GroupHeader>
        <ContainerValor onPress={() => setModalVisible(true)}>
          <Modal
            isVisible={modalVisible}
            onCloseModal={handleCloseModal}
            value={value}
            setValue={setValue}
          />
          <Valor>{FormatPrice(value)}</Valor>
        </ContainerValor>
      </Header>
      <Main>
        <TituloDescricao>Descrição</TituloDescricao>
        <GroupIconInput>
          <PencilSimple
            style={{ marginBottom: 10 }}
            size={19}
            color="#d3cfcf"
            weight="regular"
          />
          <Input
            placeholderTextColor={'#4b4b4b'}
            placeholder="Adicione a descrição"
            cursorColor={'#383737'}
            multiline={true}
            keyboardAppearance="dark"
          />
        </GroupIconInput>
        <TituloDescricao style={{ marginTop: 20 }}>Categoria</TituloDescricao>
        <GroupIconText onPress={() => setModalCategoriaVisible(true)}>
          <ModalCategoria
            isVisible={modalCategoriaVisible}
            onCloseModal={handleCloseModal}
          />
          <Circulo
            style={{
              marginBottom: 10,
              marginRight: 10,
              backgroundColor: selectedCategory?.cor
                ? selectedCategory.cor
                : theme.colors.cinza,
            }}
          >
            {selectedCategory?.icone ? (
              selectedCategory?.icone
            ) : (
              <ListBullets size={16} color="#ffffff" weight="bold" />
            )}
          </Circulo>
          <TituloDescricao>
            {selectedCategory?.nome ? selectedCategory?.nome : 'Outros'}
          </TituloDescricao>
        </GroupIconText>
        <TituloDescricao style={{ marginTop: 20 }}>Data</TituloDescricao>

        <GroupIconText onPress={() => setModalCalendarVisible(true)}>
          <Circulo style={{ marginBottom: 10, marginRight: 10 }}>
            <ModalCalendar
              isVisible={modalCalendarVisible}
              onCloseModal={handleCloseModal}
            />
            <Calendar size={20} color="#d3cfcf" weight="fill" />
          </Circulo>
          <TituloDescricao>
            {selectedDate === diaHoje ? 'Hoje' : selectedDate}
          </TituloDescricao>
        </GroupIconText>
        <ContainerButton>
          <CheckCircle size={110} color="#1AD274" weight="fill" />
        </ContainerButton>
      </Main>
    </Container>
  );
}
