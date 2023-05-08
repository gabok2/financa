import { ArrowLeft, ArrowRight } from 'phosphor-react-native';
import { Container, ContainerCalendar, Main } from './styles';
import { useRef, useState } from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from 'react-native-calendars';
import theme from '@theme/index';
import 'moment-timezone';
import moment from 'moment';
import { useHome } from '@hooks/home';
type ModalProps = {
  isVisible: boolean;
  onCloseModal: () => void;
};

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt-br';
export function ModalCalendar({ isVisible, onCloseModal }: ModalProps) {
  const modalRef = useRef(null);
  const { setSelectedDate } = useHome();

  function handleDayPress(day: any) {
    const brTimeZone = 'America/Sao_Paulo'; // Fuso horário do Brasil
    const date = moment(day.dateString);
    const brDate = date.tz(brTimeZone);
    const formattedDate = brDate.format('DD/MM/YYYY');
    setSelectedDate(formattedDate);
    onCloseModal();
  }

  function handleCloseModal(event: any) {
    if (modalRef.current && event.target === modalRef.current) {
      onCloseModal();
    }
  }

  return (
    <Modal
      visible={isVisible}
      onRequestClose={onCloseModal}
      animationType="fade"
      transparent
    >
      <TouchableWithoutFeedback onPress={handleCloseModal}>
        <Container ref={modalRef}>
          <Main>
            <ContainerCalendar>
              <CustomCalendar
                onDayPress={handleDayPress}
                hideExtraDays={true}
                theme={{
                  monthTextColor: '#d3cfcf',
                  calendarBackground: theme.colors.cinzaHeader,
                  textMonthFontFamily: theme.fonts.BOLD,
                  dayTextColor: '#d3cfcf',
                  textDayFontFamily: theme.fonts.REGULAR,
                  todayTextColor: theme.colors.black,
                  todayBackgroundColor: '#5EDA8F',
                }}
                renderArrow={(direction) =>
                  direction === 'left' ? (
                    <ArrowLeft size={18} color="#FFF" />
                  ) : (
                    <ArrowRight size={18} color="#d3cfcf" />
                  )
                }
                style={{ height: '100%', backgroundColor: 'transparent' }}
                headerStyle={{
                  paddingBottom: 10,
                }}
              />
            </ContainerCalendar>
          </Main>
        </Container>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
