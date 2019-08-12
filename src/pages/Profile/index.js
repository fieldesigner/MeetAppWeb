import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdPlayCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('Campo obrigatório'),
  oldPassword: Yup.string().when('password', (password, field) =>
    password ? field.required('Senha atual obrigatória') : field
  ),
  password: Yup.string(),
  confirmPassword: Yup.string().when('password', (password, field) =>
    // (password ?) : se o password estiver preenchido
    // (field.required()) : entao confirmPassword será obrigatório
    // (.oneOf([Yup.ref('password')])) e ele precisa ser igual ao campo password
    // (: field) se não retorna o field confirmPassword sem ser obrigatório
    password
      ? field
          .min(6, 'A nova senha deve ter no mínimo 6 digitos')
          .required()
          .oneOf([Yup.ref('password')], 'Digite o mesmo que em nova senha')
      : field
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <hr />
        <Input name="oldPassword" type="password" placeholder="Senha aual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme nova senha"
        />
        <button type="submit">
          <MdPlayCircleOutline size={20} color="#fff" />
          Atualizar perfil
        </button>
      </Form>
    </Container>
  );
}
