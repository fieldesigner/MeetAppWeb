import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdControlPoint } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Container } from './styles';
import DateInput from '~/components/Datepicker';
import BannerInput from './BannerInput';
import history from '~/services/history';
import api from '~/services/api';

const schema = Yup.object().shape({
  title: Yup.string().required('O titulo é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  location: Yup.string().required('A localização é obrigatória'),
  id_image: Yup.number(),
});

export default function CadEdit() {
  async function handleSubmit(data) {
    console.tron.log(data);
    try {
      const send = {
        ...data,
        date: '2019-08-15T20:00:00-03:00',
      };
      await api.post('meetups', send);
      toast.success('Meetup criado com sucesso');
      history.push('/');
    } catch (err) {
      console.tron.log(err);
      toast.error('Erro ao gravar, tente novamente');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="id_image" />
        <Input name="title" type="text" placeholder="Titulo do evento" />
        <Input multiline name="description" placeholder="Descrição do evento" />
        <Input name="location" type="text" placeholder="Local do evento" />
        <DateInput name="date" />
        <button type="submit">
          <MdControlPoint size={20} color="#fff" />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
