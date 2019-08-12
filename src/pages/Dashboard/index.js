import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdChevronRight, MdPlayCircleOutline } from 'react-icons/md';
// import api from '~/services/api';
import { Link } from 'react-router-dom';
import { Container, Meetup } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      const data = response.data.map(meet => {
        const dateFormated = format(
          meet.date,
          'DD [de] MMMM YYYY, [às] H[:]mm [h]',
          {
            locale: pt,
          }
        );
        return {
          past: meet.past,
          id: meet.id,
          title: meet.title,
          date: dateFormated,
        };
      });

      return setMeetups(data);
    }
    loadMeetups();
  }, [meetups]);

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <button type="button">
          <MdPlayCircleOutline size={20} color="#fff" />
          Novo meetup
        </button>
      </header>

      <ul>
        {meetups.map(meet => (
          <Meetup key={meet.id} past={meet.past}>
            <Link to={`/details/${meet.id}`}>
              <strong>{meet.title}</strong>

              <time>
                {meet.date}
                <MdChevronRight size={20} color="#fff" />
              </time>
            </Link>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
