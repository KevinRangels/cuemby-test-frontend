import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Campo requerido")
    .email("Correo electrónico inválido"),
});

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("form recover password", data);
  };

  return (
    <div class="sign-inup">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="sign-form">
              <div class="sign-inner">
                <div class="sign-logo" id="logo">
                  <a href="index.html">
                    <img src="assets/images/logo.svg" alt="" />
                  </a>
                  <a href="index.html">
                    <img
                      class="logo-inverse"
                      src="assets/images/dark-logo.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="form-dt">
                  <div class="form-inpts checout-address-step">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div class="form-title">
                        <h6>Recuperar contraseña</h6>
                      </div>
                      <div class="form-group pos_rel">
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
                      <button class="login-btn hover-btn" type="submit">
                        Enviar
                      </button>
                    </form>
                  </div>
                  <div class="signup-link">
                    <p>
                      Regresar - <Link to="/login">Iniciar sesión</Link>
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
