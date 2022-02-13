import React from 'react';
import { InputText } from '../../UI/inputs/InputText/InputText';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authLogin } from '../../../actions/auth';

const schema = yup.object().shape({
  email: yup.string().required('Campo requerido').email('Correo electrónico inválido'),
  password: yup.string().required('Campo requerido').min(6, 'Debe tener mínimo 6 caracteres'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading } = useSelector((state) => state.ui);
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(authLogin(data)).then((e) => {
      if (e) {
        history.push('/user/dashboard');
      }
    });
  };
  return (
    <div className="loginForm">
      <div className="loginForm__title">
        <h2 className="mb-4">Iniciar Sesión</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText placeholder="Usuario" type="text" name="email" className="mb-4" register={register} errors={errors['email']?.message} />
        <InputText placeholder="Contraseña" type="password" name="password" className="mb-5" register={register} errors={errors['password']?.message} />
        {!loading ? (
          <button className="btn__login">Iniciar</button>
        ) : (
          <div className="w-100 d-flex justify-content-center mt-3">
            <i class="spinnerLoading  fas fa-spinner fa-spin"></i>
          </div>
        )}
      </form>
    </div>
  );
};
