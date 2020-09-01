import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img src="https://avatars1.githubusercontent.com/u/57725054?s=460&u=75adfd78047f87ae96404beefa6339445539ac53&v=4" alt="Felipe Duque" />
        <div>
          <strong>duquedotdev/Dumont</strong>
          <p>Sistema open-source de gerenciamento inteligente de escola de aviação.</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img src="https://avatars1.githubusercontent.com/u/57725054?s=460&u=75adfd78047f87ae96404beefa6339445539ac53&v=4" alt="Felipe Duque" />
        <div>
          <strong>duquedotdev/Dumont</strong>
          <p>Sistema open-source de gerenciamento inteligente de escola de aviação.</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>

  </>
);
export default Dashboard;
