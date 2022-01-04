import React, { useRef } from 'react';
import styled from 'styled-components';
import DefaultLayout from '../layouts/DefaultLayout';
import { host, port } from '../APIConfig.json';

const AdminPage = () => {
  const formRef = useRef();

  const uploadProduct = async (e) => {
    e.preventDefault();

    const data = new FormData(formRef.current);
    console.log(data);
    const res = await fetch(`http://${host}:${port}/uploadProduct`, {
      method: 'POST',
      body: data,
    });
    const message = await res.text();
    console.log(message);
    formRef.current.reset();
  };

  return (
    <DefaultLayout>
      <Form ref={formRef} onSubmit={uploadProduct}>
        <label>title:</label>
        <input name={'title'} type={'text'} required />
        <label>description:</label>
        <textarea name={'description'} required />
        <label>category:</label>
        <input name={'category'} type={'text'} required />
        <label>price:</label>
        <input name={'price'} type={'number'} step={'0.01'} required />
        <label>files:</label>
        <input name={'image'} type={'file'} required />
        <input type={'submit'} />
      </Form>
    </DefaultLayout>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default AdminPage;
