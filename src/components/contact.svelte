<script lang="ts">
  let submitButtonLabel = 'Send message';
  let submitButtonDisabled = false;

  async function submit(event: SubmitEvent) {
    const form = event.currentTarget as HTMLFormElement;
    const formElements = form.elements as typeof form.elements & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      message: HTMLTextAreaElement;
    };

    submitButtonLabel = 'Sending...';
    submitButtonDisabled = true;

    const response = await fetch(
      'https://sr2k3rjwcgfezjuq4b7fgagn3m0hqgal.lambda-url.eu-central-1.on.aws/',
      {
        method: 'POST',
        body: JSON.stringify({
          name: formElements.name.value,
          email: formElements.email.value,
          message: formElements.message.value,
        }),
      },
    );
    const message = await response.text();

    submitButtonLabel = 'Send message';
    submitButtonDisabled = false;

    if (response.ok) {
      form.reset();
      alert('Message sent!');
      return;
    }

    alert(message);
  }
</script>

<form on:submit|preventDefault={submit}>
  <input type="text" name="name" placeholder="Name" />
  <input type="email" name="email" placeholder="Email" />
  <textarea rows="5" name="message" placeholder="Message" />
  <button type="submit" disabled={submitButtonDisabled}>
    {submitButtonLabel}
  </button>
  <div class="form-response" />
</form>
<p>
  ...or send me a message via email
  <a href="mailto:b@bdeak.net">b@bdeak.net</a>
</p>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  input,
  textarea,
  button[type='submit'] {
    padding: 8px 10px;
    border: 1px solid #333;
    border-radius: 5px;
    color: #fff;
    background-color: #000;
  }
  input:focus,
  textarea:focus,
  button[type='submit']:focus {
    outline: 2px solid #0891b2;
  }
  textarea {
    resize: vertical;
  }
  button {
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
  }
  ::placeholder {
    color: #555;
    opacity: 1;
  }
</style>
