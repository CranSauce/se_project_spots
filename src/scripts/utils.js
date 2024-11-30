export function renderLoading(isLoading, button, buttonText='Save', loadingText='Saving...') {
  if (isLoading) {
    button.textContent = loadingText;
    button.disabled = true;
  } else {
    button.textContent = buttonText;
    button.disabled = false;
  }
}

export function handleSubmit(request, evt, loadingText = 'Saving...') {
  evt.preventDefault();

  const submitButton = evt.submitter;
  const initialText = submitButton.textContent;
  renderLoading(true, submitButton, initialText, loadingText);

  request()
    .then(() => {
      evt.target.reset();
    })
    .catch(console.error)
    .finally(() => {
      renderLoading(false, submitButton, initialText);
    });
}
