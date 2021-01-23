import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/forms/contactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState({ error: false, msg: null });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({ error: false, msg: msg });
    } else {
      setStatus({ error: true, msg: msg });
    }
    console.log(msg);
  };

  return (
    <Formik
      initialValues={{ email: "", message: "" }}
      validationSchema={Yup.object({
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
            block
            className={"bluenavy-button" + " " + styles.sendButton}
          >
            Invia
          </Button>
          {status.error && (
            <Alert variant="danger" className={styles.messageSent} role="alert">
              <Alert.Heading>{status.msg}</Alert.Heading>
            </Alert>
          )}
          {!status.error && status.msg && (
            <Alert
              variant="success"
              className={styles.messageSent}
              role="alert"
            >
              <Alert.Heading>Grazie per averci contattato!</Alert.Heading>
              <hr />
              <p>Ti risponderemo il prima possibile.</p>
            </Alert>
          )}
        </Form>
      )}
    </Formik>
  );
}
