import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button, message, Steps, theme } from "antd";

const steps = [
  {
    title: <p className="steps_title">Registra tus datos</p>,
    content: (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          document_type: "",
          n_document: "",
          phone_number: "",
          terms: "",
          politics: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="form">
          <div className="form_content">
            <div className="names">
              <Field
                className="input_field"
                id="firstName"
                name="firstName"
                placeholder="Nombres"
              />
              <Field
                className="input_field"
                id="lastName"
                name="lastName"
                placeholder="Apellidos"
              />
            </div>
            <div className="names">
              <Field
                className="input_field"
                id="email"
                name="email"
                placeholder="Correo electrónico"
                type="email"
              />
            </div>

            <div className="names">
              <Field
                className="input_field"
                as="select"
                id="n_document"
                name="n_document"
                placeholder="N° Documento"
              >
                <option value="dni">DNI</option>
                <option value="chamo">Carné de extranjería</option>
              </Field>
              <Field
                className="input_field"
                id="document_type"
                name="document_type"
                placeholder="Correo electrónico"
              />
            </div>
            <div className="names">
              <Field
                className="input_field"
                id="phone_number"
                name="phone_number"
                placeholder="N° Celular"
              />
            </div>
            <div>
              <div className="terms_container">
                <Field
                  className="input_field"
                  id="terms"
                  name="terms"
                  type="checkbox"
                />
                <p className="rights">
                  He leído y acepto los{" "}
                  <strong className="bold">Términos y Condiciones</strong>
                </p>
              </div>
              <div className="politics_container">
                <Field
                  className="input_field"
                  id="politics"
                  name="politics"
                  type="checkbox"
                />
                <p className="rights">
                  He leído y acepto las{" "}
                  <strong className="bold">Políticas de Privacidad</strong>
                </p>
              </div>
            </div>
            <button className="submit_button" type="submit">
              <div></div>
              <p className="mediumText bold">Solicitar información</p>
              <AiOutlineArrowRight size={30} />
            </button>
          </div>
        </Form>
      </Formik>
    ),
  },
  {
    title: <p className="steps_title">Valida que eres humano</p>,
    content: "Second-content",
  },
  {
    title: <p className="steps_title">Recibe una respuesta de confirmación</p>,
    content: "Last-content",
  },
];

export { steps };
