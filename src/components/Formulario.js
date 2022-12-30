import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ crearCita }) => {
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  const [error, actualizarError] = useState(false);

  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;
  const submitCita = e => {
    e.preventDefault();
    if (
      mascota.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      actualizarError(true);
    } else {
      actualizarError(false);
      cita.id = uuidv4();
      console.log(cita);
      crearCita(cita);
      actualizarCita({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
      });
    }
  };

  return (
    <div className="container">
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label htmlFor="">Nombre Mascota</label>{' '}
        <input
          className="u-full-width"
          type="text"
          name="mascota"
          id="nombreMascota"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />{' '}
        <label htmlFor="">Nombre Dueño</label>{' '}
        <input
          className={'u-full-width'}
          type="text"
          name="propietario"
          id="nombreDueño"
          placeholder="Nombre Dueño"
          onChange={actualizarState}
          value={propietario}
        />{' '}
        <label htmlFor="">Fecha</label>{' '}
        <input
          className={'u-full-width'}
          type="date"
          name="fecha"
          id="fecha"
          onChange={actualizarState}
          value={fecha}
        />{' '}
        <label htmlFor="">Hora</label>{' '}
        <input
          className={'u-full-width'}
          type="time"
          name="hora"
          id="hora"
          onChange={actualizarState}
          value={hora}
        />{' '}
        <label htmlFor="">Sintomas</label>{' '}
        <textarea
          className={'u-full-width'}
          name="sintomas"
          id="sintomas"
          cols="30"
          rows="10"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button className="u-full-with button-primary" type="submit">
          Agregar Cita
        </button>
      </form>
    </div>
  );
};

export default Formulario;
