import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';
import api from '~/services/api';
import { Container } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('File');
  // console.tron.log(defaultValue);
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'id_image',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);
    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="File">
        {preview ? (
          <img src={preview} alt="Banner do Meetup" />
        ) : (
          <div>
            <MdCameraAlt color="#fff" size={44} />
            <span>Selecionar imagem</span>
          </div>
        )}
        <input
          type="file"
          id="File"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
