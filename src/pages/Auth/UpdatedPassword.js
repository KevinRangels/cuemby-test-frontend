import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Campo requerido")
    .min(8, "Debe tener mínimo 8 caracteres"),

  password_confirm: yup
    .string()
    .required("Campo requerido")
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden"),
});
export const UpdatedPassword = () => {
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
                        <h6>Establecer contraseña</h6>
                      </div>
                      <div class="form-group pos_rel">
                        <input
                          id="password[old]"
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
                      <div class="form-group pos_rel">
                        <input
                          id="password[new]"
                          name="password_confirm"
                          type="password"
                          placeholder="Confirmar constraseña"
                          class="form-control lgn_input"
                          {...register("password_confirm")}
                        />
                        <i class="uil uil-padlock lgn_icon"></i>
                      </div>
                      <p className="validationMessage">
                        {errors["password_confirm"]?.message}
                      </p>
                      <button class="login-btn hover-btn" type="submit">
                        Guardar
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
