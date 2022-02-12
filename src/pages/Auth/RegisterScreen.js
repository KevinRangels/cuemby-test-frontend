import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { expresiones } from "../../helpers/regex";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Campo requerido")
    .matches(expresiones.name, "Solo letras"),
  email: yup
    .string()
    .required("Campo requerido")
    .email("Correo electrónico inválido"),
  phone: yup
    .string()
    .required("Campo requerido")
    .matches(expresiones.phone, "Solo números"),
  password: yup
    .string()
    .required("Campo requerido")
    .min(8, "Debe tener mínimo 8 caracteres"),
});

export const RegisterScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("form register", data);
    reset({ password: "" });
  };

  return (
    <div class="sign-inup">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="sign-form">
              <div class="sign-inner">
                <div class="sign-logo" id="logo">
                  <Link to="/">
                    <img src="assets/images/logo.svg" alt="" />
                  </Link>
                  <Link to="/">
                    <img
                      class="logo-inverse"
                      src="assets/images/dark-logo.svg"
                      alt=""
                    />
                  </Link>
                </div>
                <div class="form-dt">
                  <div class="form-inpts checout-address-step">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div class="form-title">
                        <h6>Registro</h6>
                      </div>
                      <div class="form-group pos_rel  ">
                        <input
                          id="full[name]"
                          name="name"
                          type="text"
                          placeholder="Nombre completo"
                          class="form-control lgn_input"
                          {...register("name")}
                        />
                        <i class="uil uil-user-circle lgn_icon"></i>
                      </div>
                      <p className="validationMessage">
                        {errors["name"]?.message}
                      </p>
                      <div class="form-group pos_rel ">
                        <input
                          id="email[address]"
                          name="email"
                          type="email"
                          placeholder="Correo electrónico"
                          class="form-control lgn_input"
                          {...register("email")}
                        />
                        <i class="uil uil-envelope lgn_icon"></i>
                      </div>
                      <p className="validationMessage">
                        {errors["email"]?.message}
                      </p>
                      <div class="form-group pos_rel ">
                        <input
                          id="phone[number]"
                          name="phone"
                          type="text"
                          placeholder="Número de teléfono"
                          class="form-control lgn_input"
                          {...register("phone")}
                        />
                        <i class="uil uil-mobile-android-alt lgn_icon"></i>
                      </div>
                      <p className="validationMessage">
                        {errors["phone"]?.message}
                      </p>

                      <div class="form-group pos_rel ">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Contraseña"
                          class="form-control lgn_input"
                          {...register("password")}
                        />
                        <i class="uil uil-padlock lgn_icon"></i>
                      </div>
                      <p className="validationMessage">
                        {errors["password"]?.message}
                      </p>
                      <button class="login-btn hover-btn" type="submit">
                        Registrarse
                      </button>
                    </form>
                  </div>
                  <div class="signup-link">
                    <p>
                      ¿Ya tienes una cuenta? -{" "}
                      <Link to="/login">Inicia sesión</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="copyright-text text-center mt-3">
              <i class="uil uil-copyright"></i>Copyright 2020{" "}
              <b>Gambolthemes</b> . All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
