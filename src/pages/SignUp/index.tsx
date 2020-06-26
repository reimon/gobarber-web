import React from 'react';
import { Container, Content, Background } from './styles';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <Container>
    <Background> </Background>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu Cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="E-mail" />
        <Input name="E-mail" icon={FiMail} placeholder="E-mail" />

        <Input
          name="Password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>
      </form>
      <a href="">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);
export default SignUp;
