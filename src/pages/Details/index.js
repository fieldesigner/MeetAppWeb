import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdModeEdit, MdDeleteForever, MdToday, MdPlace } from 'react-icons/md';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { Container } from './styles';
import history from '~/services/history';

export default function Details({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line
    async function loadMeetup() {
      try {
        const response = await api.get(`meetup/${id}`);
        setMeetup({
          ...response.data,
          dateFormated: format(
            response.data.date,
            'DD [de] MMMM YYYY, [às] H[:]mm [h]',
            {
              locale: pt,
            }
          ),
        });
        setLoading(false);

        return response.data;
      } catch (error) {
        toast.error('Evento inexistente');
        history.push('/');
      }
    }

    loadMeetup();
  }, [id]);

  function handleEditEvent() {
    history.push(`/edit/${id}`);
  }

  async function handleDelEvent(meetupId) {
    console.tron.log(meetupId);
    try {
      await api.delete(`/meetups/${meetupId}`);
      toast.success('Meetup cancelado com sucesso!');
      history.push('/');
    } catch (error) {
      console.tron.log(error);
      toast.error('Erro ao tentar excluir');
    }
  }
  return (
    <>
      {loading ? (
        <div>carregando</div>
      ) : (
        <Container>
          <header>
            <h1>{meetup.title}</h1>
            <div>
              <button type="button" onClick={handleEditEvent}>
                <MdModeEdit size={20} color="#fff" />
                Editar
              </button>
              <button
                type="button"
                onClick={() => handleDelEvent(meetup.id)}
                disabled={meetup.past}
              >
                <MdDeleteForever size={20} color="#fff" />
                Excluir
              </button>
            </div>
          </header>

          <img src={meetup.File.url} alt={meetup.title} />

          <p>{meetup.description}</p>
          <footer>
            <div>
              <MdToday size={20} />
              {meetup.dateFormated}
            </div>
            <div>
              <MdPlace size={20} />
              {meetup.location}
            </div>
          </footer>
        </Container>
      )}
    </>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
