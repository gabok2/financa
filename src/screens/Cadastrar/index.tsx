import { Container } from './styles';

import { Despesa } from './components/Despesa';
import { useHome } from '@hooks/home';
import { Receita } from './components/Receita';
export function Cadastrar() {
  const { selectDespesaAndReceita } = useHome();

  return (
    <Container>
      {selectDespesaAndReceita === 'despesa' ? <Despesa /> : <Receita />}
    </Container>
  );
}
