const sgMail = require("@sendgrid/mail");

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, message, firstName, lastName } = req.body;

  const content = {
    to: "info@eduwayimpresasociale.com",
    from: "info@eduwayimpresasociale.com",
    subject: `Contact form - ${email}`,
    text: message,
    html: `<ul>
            <li>Nome: ${firstName}</li>
            <li>Cognome: ${lastName}</li>
            <li>Email: ${email}</li>
          </ul>
          <p>Messaggio: <br/> ${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Messaggio inviato!");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Si è verificato un errore.");
  }
}
