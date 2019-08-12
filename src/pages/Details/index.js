import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import api from '~/services/api';
import { Container } from './styles';

export default function Details({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`meetup/${id}`);
        setMeetup({
          ...response.data,
          dateFormated: format(
            response.date,
            'DD [de] MMMM YYYY, [às] H[:]mm [h]',
            {
              locale: pt,
            }
          ),
        });
        return response.data;
      } catch (error) {
        console.tron.log(error);
      }
    }
    loadMeetup();
  }, [id, meetup]);

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        <div>
          <button type="button">
            <MdModeEdit size={14} color="#fff" />
            Editar
          </button>
          <button type="button">
            <MdDeleteForever size={14} color="#fff" />
            Excluir
          </button>
        </div>
      </header>
      <div key={meetup.id} />
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
