import { useContext } from 'react';

import { HomeContext } from '../context/homeContext';

export function useHome() {
  const context = useContext(HomeContext);
  return context;
}
