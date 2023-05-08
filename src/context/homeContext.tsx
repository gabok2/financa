import { createContext, ReactNode, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import 'moment-timezone';
import moment from 'moment';

type Categoria = {
  id?: number;
  nome?: String;
  icone?: String;
  cor?: String;
};

type Extrato = {
  value: number;
  date: string;
  category: Categoria;
  tipo: string;
};

interface HomeContextProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  selectedCategory: Categoria;
  setSelectedCategory: (category: Categoria) => void;
  selectDespesaAndReceita: string;
  setSelectDespesaAndReceita: (value: 'despesa' | 'receita') => void;
  value: number;
  setValue: (value: number) => void;
  handleExtrato: (extrato: Extrato) => void;
}

interface HomeProviderProps {
  children: ReactNode;
}

export const HomeContext = createContext({} as HomeContextProps);

export function HomeProvider({ children }: HomeProviderProps) {
  const [selectedDate, setSelectedDate] = useState(
    moment().format('DD/MM/YYYY')
  );
  const [selectedCategory, setSelectedCategory] = useState({} as Categoria);
  const [selectDespesaAndReceita, setSelectDespesaAndReceita] =
    useState('despesa');

  const [value, setValue] = useState(0.0);

  async function handleExtrato(extrato: Extrato) {}

  return (
    <HomeContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedCategory,
        setSelectedCategory,
        selectDespesaAndReceita,
        setSelectDespesaAndReceita,
        value,
        setValue,
        handleExtrato,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
