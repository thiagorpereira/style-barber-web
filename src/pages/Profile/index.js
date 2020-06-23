import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Email" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="Sua Senha" />
        <Input name="password" type="password" placeholder="Sua nova Senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de Senha"
        />

        <button type="submit"> Atualizar perfil</button>
      </Form>

      <button type="submit"> Sair do Style-Barber</button>
    </Container>
  );
}
