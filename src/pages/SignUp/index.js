import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';
// import { Container } from './styles';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="Style-Barber" />

      <Form>
        <Input placeholder="Nome Completo" />
        <Input type="email" placeholder="Seu e-mail" />
        <Input type="password" placeholder="Sua senha secreta" />

        <button type="submit"> Criar conta </button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
