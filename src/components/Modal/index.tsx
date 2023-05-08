import React, { useRef } from 'react';
import {
  Modal as ModalCalculadora,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Container,
  Main,
  Content,
  Circulo,
  Numero,
  ContentZero,
} from './styles';
import { Backspace } from 'phosphor-react-native';

type ModalProps = {
  isVisible: boolean;
  onCloseModal: () => void;
  value: number;
  setValue: (value: number) => void;
};

export function Modal({
  isVisible,
  onCloseModal,
  value,
  setValue,
}: ModalProps) {
  const modalRef = useRef(null);

  console.log(value);

  function handleCloseModal(event: any) {
    if (modalRef.current && event.target === modalRef.current) {
      onCloseModal();
    }
  }

  function handleNumberClick(number: number) {
    let newValue;
    if (value === 0) {
      newValue = 0.0 + number / 100;
    } else {
      newValue = value * 10 + number / 100;
    }
    // converte para número e formata com duas casas decimais
    const formattedValue = parseFloat(newValue.toFixed(2));
    setValue(formattedValue);
  }

  function handleDeleteClick() {
    let newValue;
    if (value !== 0) {
      newValue = Math.floor((value * 100) / 10) / 100;
    } else {
      newValue = 0;
    }
    setValue(newValue);
  }

  return (
    <ModalCalculadora
      visible={isVisible}
      onRequestClose={onCloseModal}
      animationType="none"
      transparent
    >
      <TouchableWithoutFeedback onPress={handleCloseModal}>
        <Container ref={modalRef}>
          <Main>
            <Content>
              <Circulo onPress={() => handleNumberClick(1)}>
                <Numero>1</Numero>
              </Circulo>
              <Circulo onPress={() => handleNumberClick(2)}>
                <Numero>2</Numero>
              </Circulo>
              <Circulo onPress={() => handleNumberClick(3)}>
                <Numero>3</Numero>
              </Circulo>
            </Content>
            <Content>
              <Circulo onPress={() => handleNumberClick(4)}>
                <Numero>4</Numero>
              </Circulo>
              <Circulo onPress={() => handleNumberClick(5)}>
                <Numero>5</Numero>
              </Circulo>
              <Circulo onPress={() => handleNumberClick(6)}>
                <Numero>6</Numero>
              </Circulo>
            </Content>
            <Content>
              <Circulo onPress={() => handleNumberClick(7)}>
                <Numero>7</Numero>
              </Circulo>
              <Circulo onPress={() => handleNumberClick(8)}>
                <Numero>8</Numero>
              </Circulo>
              <Circulo onPress={() => handleNumberClick(9)}>
                <Numero>9</Numero>
              </Circulo>
            </Content>
            <ContentZero style={{ marginLeft: 20 }}>
              <Circulo onPress={() => handleNumberClick(0)}>
                <Numero>0</Numero>
              </Circulo>
              <TouchableOpacity onPress={handleDeleteClick}>
                <Backspace
                  style={{ position: 'relative', left: 40 }}
                  size={32}
                  color="#d3cfcf"
                  weight="fill"
                />
              </TouchableOpacity>
            </ContentZero>
          </Main>
        </Container>
      </TouchableWithoutFeedback>
    </ModalCalculadora>
  );
}
