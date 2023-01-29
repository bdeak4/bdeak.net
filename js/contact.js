const form = document.querySelector(".contact-form");
const messageTextarea = document.querySelector(".message-textarea");
const submitButton = document.querySelector(".submit-button");
const receivedMessage = document.querySelector(".received-message");
const errorMessage = document.querySelector(".error-message");

const show = (el) => el.classList.remove("hidden");
const hide = (el) => el.classList.add("hidden");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const response = await fetch(
    "https://sr2k3rjwcgfezjuq4b7fgagn3m0hqgal.lambda-url.eu-central-1.on.aws/",
    { method: "POST", body: messageTextarea.value }
  );

  hide(response.ok ? errorMessage : receivedMessage);
  show(response.ok ? receivedMessage : errorMessage);

  this.reset();
});
