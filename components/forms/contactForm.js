import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import styles from "../../styles/forms/contactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState({ error: false, msg: null });
  const [username, setUsername] = useState("");

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({ error: false, msg: msg });
    } else {
      setStatus({ error: true, msg: msg });
    }
    console.log(msg);
  };

  const capitalizeName = (name) => {
    const firstLetter = name.slice(0, 1).toUpperCase();
    const restOfName = name.slice(1, name.length).toLowerCase();
    return firstLetter + restOfName;
  };

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", message: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Massimo 15 caratteri")
          .required("Campo obbligatorio"),
        lastName: Yup.string()
          .max(20, "Massimo 20 caratteri")
          .required("Campo obbligatorio"),
        email: Yup.string()
          .email("Indirizzo Email non valido")
          .max(60, "Indirizzo Email troppo lungo...")
          .required("Campo obbligatorio"),
        message: Yup.string()
          .max(5000, "Massimo 5000 caratteri")
          .required("Campo obbligatorio"),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setTimeout(async () => {
          console.log(values);
          const res = await fetch("/api/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
          const text = await res.text();
          handleResponse(res.status, text);
          setUsername(values.firstName);
          resetForm({});
          //TODO:  setStatus({ error: false, msg: null }); //to send again a message and activate a new alert
          setSubmitting(false);
        }, 400);
      }}
    >
      {(props) => (
        <Form className={styles.formContainer}>
          <div className="form-row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="firstName">Nome</label>
                <Field
                  className={
                    "form-control" +
                    " " +
                    (props.errors.firstName &&
                      props.touched.firstName &&
                      styles.errorField)
                  }
                  name="firstName"
                  type="text"
                />
                <div className="text-danger">
                  <ErrorMessage name="firstName" />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="lastName">Cognome</label>
                <Field
                  className={
                    "form-control" +
                    " " +
                    (props.errors.lastName &&
                      props.touched.lastName &&
                      styles.errorField)
                  }
                  name="lastName"
                  type="text"
                />
                <div className="text-danger">
                  <ErrorMessage name="lastName" />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Indirizzo Email</label>
            <Field
              className={
                "form-control" +
                " " +
                (props.errors.email && props.touched.email && styles.errorField)
              }
              name="email"
              type="email"
            />
            <div className="text-danger">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Messaggio</label>
            <Field
              className={
                "form-control" +
                " " +
                styles.textarea +
                " " +
                (props.errors.message &&
                  props.touched.message &&
                  styles.errorField)
              }
              name="message"
              as="textarea"
              type="text"
              rows="6"
            />
            <div className="text-danger">
              <ErrorMessage name="message" />
            </div>
          </div>
          <Button
            type="submit"
            variant="primary"
            block
            className={"button-font" + " " + styles.sendButton}
          >
            Invia
          </Button>
          {status.error && (
            <div
              className={
                "alert alert-danger alert-dismissible fade show" +
                " " +
                styles.messageSent
              }
              role="alert"
            >
              <h4>{status.msg}</h4>
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          {!status.error && status.msg && (
            <div
              className={
                "alert alert-success alert-dismissible fade show" +
                " " +
                styles.messageSent
              }
              role="alert"
            >
              <h4>Grazie {capitalizeName(username)}! </h4> <hr />
              <p>Il messaggio è stato inviato correttamente.</p>
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}
