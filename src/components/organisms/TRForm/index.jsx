import { Formik, Field, Form } from "formik";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./styles.scss";

const TRForm = () => {
  return (
    <div className="trform">
      <div className="trform_container">
        <div className="steps_button">
          <p className="bold bigText">1</p>
          <p className="bold bigText">2</p>
        </div>
        <p className="bold bigText header">
          ¡Estas a unos pasos de tu primer lote!
        </p>
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

              <div className="terms_container">
                <Field
                  className="input_field"
                  id="terms"
                  name="terms"
                  type="checkbox"
                />
                <div className="flexAlign text">
                  <p>He leído y acepto los </p>
                  <p className="bold">Términos y Condiciones</p>
                </div>
              </div>
              <div className="politics_container">
                <Field
                  className="input_field"
                  id="politics"
                  name="politics"
                  type="checkbox"
                />
                <div className="flexAlign text">
                  <p>He leído y acepto las </p>
                  <p className="bold">Políticas de Privacidad</p>
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
      </div>
    </div>
  );
};

export default TRForm;
