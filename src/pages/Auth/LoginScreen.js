import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required('Campo requerido').email('Correo electrónico inválido'),
  password: yup.string().required('Campo requerido').min(8, 'Debe tener mínimo 8 caracteres'),
});

export const LoginScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    let request = {
      email: data.email,
      password: data.password,
    };
    reset({ password: '' });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-title">
        <h6>Iniciar sesión</h6>
      </div>
      <div className="form-group pos_rel ">
        <input id="phone[number]" name="email" type="text" placeholder="Correo electrónico" className="form-control lgn_input" {...register('email')} />
        <i className="uil uil-envelope lgn_icon"></i>
      </div>
      <p className="validationMessage">{errors['email']?.message}</p>
      <div className="form-group pos_rel ">
        <input id="password" name="password" type="password" placeholder="Contraseña" className="form-control lgn_input" {...register('password')} />
        <i className="uil uil-padlock lgn_icon"></i>
      </div>
      <p className="validationMessage">{errors['password']?.message}</p>
      <button className="login-btn hover-btn" type="submit">
        Iniciar Sesión
      </button>
    </form>
  );
};
