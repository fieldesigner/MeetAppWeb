import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { MdControlPoint } from 'react-icons/md';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import { subDays } from 'date-fns';
import { Container } from './styles';
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

export default function EditeMeetup({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState([]);
  const [loading, setLoading] = useState(true);

  const [startDate, setDate] = useState();

  useEffect(() => {
    // eslint-disable-next-line
    async function loadMeetup() {
      try {
        const response = await api.get(`meetup/${id}`);
        setMeetup({
          ...response.data,
          date: new Date(response.data.date),
          url: response.data.File.url,
        });

        setLoading(false);
      } catch (error) {
        toast.error('Evento inexistente');
        history.push('/');
      }
    }

    loadMeetup();
  }, [id]);

  function handleChange(date) {
    setDate(date);
  }
  async function handleSubmit(data) {
    try {
      const send = {
        ...data,
        date: startDate,
      };
      console.tron.log(send);
      await api.put(`/meetups/${id}`, send);
      toast.success('Meetup atualizado com sucesso');
    } catch (err) {
      // console.tron.log(err);
      toast.error('Erro ao atualizar, tente novamente');
    }
  }

  return (
    <>
      {loading ? (
        <div>carregando</div>
      ) : (
        <Container>
          <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
            <BannerInput name="id_image" />

            <Input name="title" type="text" placeholder="Titulo do evento" />
            <Input
              multiline
              name="description"
              placeholder="Descrição do evento"
            />
            <Input name="location" type="text" placeholder="Local do evento" />
            <DatePicker
              id="date"
              name="date"
              selected={startDate || meetup.date}
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
      )}
    </>
  );
}

EditeMeetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
