const messages = {
  "message-required": "Poruka je obavezna",
  "email-not-valid": "Email nije validan",
  "mail-sent": "Poruka uspješno poslana",
  "button-sending": "Poruka se šalje...",
  "button-default": "Pošalji",
};

document
  .querySelector(".contact__form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const submitButtonElement = document.querySelector(".contact__button");
    submitButtonElement.innerHTML = messages["button-sending"];
    submitButtonElement.disabled = true;

    const response = await fetch(
      "https://sr2k3rjwcgfezjuq4b7fgagn3m0hqgal.lambda-url.eu-central-1.on.aws/",
      {
        method: "POST",
        body: JSON.stringify({
          name: document.querySelector('[name="name"]').value,
          email: document.querySelector('[name="email"]').value,
          message: document.querySelector('[name="message"]').value,
        }),
      }
    );
    const message = await response.text();

    if (response.ok) {
      this.reset();
    }

    const messageElement = document.querySelector(".contact__message");
    messageElement.innerHTML = messages[message];
    messageElement.classList.add(response.ok ? "green" : "red");
    messageElement.classList.remove(!response.ok ? "green" : "red");

    submitButtonElement.innerHTML = messages["button-default"];
    submitButtonElement.disabled = false;
  });
