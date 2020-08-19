import React, { useState } from 'react';

import { Formik, Form, Field } from 'formik';

import './styles.css';

const PanelNew = () => {
  const [info, setInfo] = useState(false);

  const showInfo = (data) => {
    setInfo(data);
    setTimeout(() => {
      setInfo(false);
    }, 2000);
  };

  const handler = (values) => {
    fetch('http://localhost:4000/estate', {
      method: 'post',
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        showInfo(data);
      })
      .catch((err) => err.message);
  };

  return (
    <div className="panel-new-wrapper">
      <h1>Add a new real estate here</h1>
      <Formik
        initialValues={{ address: '', size: '' }}
        onSubmit={handler}
      >
        <Form>
          <Field
            name="address"
            type="text"
            placeholder="Address of the real estate"
          />
          <Field
            name="size"
            type="number"
            placeholder="Size of the real estate in m²"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {
        info && (
          <div className="info-box">
            Erfolgreich gespeichert
          </div>
        )
      }
    </div>
  );
};

export default PanelNew;
