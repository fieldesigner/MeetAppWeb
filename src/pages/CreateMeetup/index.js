import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdControlPoint } from 'react-icons/md';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import { subDays } from 'date-fns';
import { Container } from './styles';
// import DateInput from '~/components/Datepicker';
import BannerInput from '~/components/BannerInput';
import history from '~/services/history';
import api from '~/services/api';

import 'react-datepicker/dist/react-datepicker.css';

const schema = Yup.object().shape({
  title: Yup.string().required('O titulo é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  location: Yup.string().required('A localização é obrigatória'),
  id_image: Yup.number(),
  date: Yup.date(),
});

export default function CreateMeetup() {
  const [startDate, setDate] = useState(new Date());
  function handleChange(date) {
    setDate(date);
  }

  async function handleSubmit(data) {
    // console.tron.log(data);
    try {
      const send = {
        ...data,
        date: startDate,
      };
      await api.post('meetups', send);
      toast.success('Meetup criado com sucesso');
      history.push('/');
    } catch (err) {
      // console.tron.log(err);
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
        <DatePicker
          id="date"
          name="date"
          selected={startDate}
          onChange={handleChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
          minDate={subDays(new Date(), 0)}
        />
        <button type="submit">
          <MdControlPoint size={20} color="#fff" />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
