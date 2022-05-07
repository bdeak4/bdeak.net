document
  .querySelector(".contact__form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    fetch(
      "https://sr2k3rjwcgfezjuq4b7fgagn3m0hqgal.lambda-url.eu-central-1.on.aws/",
      {
        method: "POST",
        body: JSON.stringify({
          name: document.querySelector('[name="name"]').value,
          email: document.querySelector('[name="email"]').value,
          message: document.querySelector('[name="message"]').value,
        }),
      }
    )
      .then((res) => res.text())
      .then((message) => console.log(message))
      .catch((err) => {
        console.log(err);
      });
  });
