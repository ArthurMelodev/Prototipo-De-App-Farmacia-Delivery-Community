import { createBrowserRouter } from 'react-router';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Home } from './pages/Home';
import { Busca } from './pages/Busca';
import { Produto } from './pages/Produto';
import { Carrinho } from './pages/Carrinho';
import { Endereco } from './pages/Endereco';
import { Pagamento } from './pages/Pagamento';
import { PagamentoPix } from './pages/PagamentoPix';
import { PagamentoCartao } from './pages/PagamentoCartao';
import { Rastreamento } from './pages/Rastreamento';
import { Perfil } from './pages/Perfil';
import { Receita } from './pages/Receita';
import { Lembretes } from './pages/Lembretes';
import { Configuracoes } from './pages/Configuracoes';
import { Categoria } from './pages/Categoria';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Login,
  },
  {
    path: '/cadastro',
    Component: Cadastro,
  },
  {
    path: '/home',
    Component: Home,
  },
  {
    path: '/busca',
    Component: Busca,
  },
  {
    path: '/produto/:id',
    Component: Produto,
  },
  {
    path: '/carrinho',
    Component: Carrinho,
  },
  {
    path: '/endereco',
    Component: Endereco,
  },
  {
    path: '/pagamento',
    Component: Pagamento,
  },
  {
    path: '/pagamento-pix',
    Component: PagamentoPix,
  },
  {
    path: '/pagamento-cartao',
    Component: PagamentoCartao,
  },
  {
    path: '/rastreamento',
    Component: Rastreamento,
  },
  {
    path: '/perfil',
    Component: Perfil,
  },
  {
    path: '/receita',
    Component: Receita,
  },
  {
    path: '/lembretes',
    Component: Lembretes,
  },
  {
    path: '/configuracoes',
    Component: Configuracoes,
  },
  {
    path: '/categoria/:id',
    Component: Categoria,
  },
]);