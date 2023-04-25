const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    setHandlers(form, config);
  });
}

function setHandlers(form, config) {
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  const button = form.querySelector(config.submitButtonSelector);
  toggleButtonState(inputs, button, config);
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      validateInput(form, input, config);
      toggleButtonState(inputs, button, config);
    });
  });
}

function validateInput(form, input, config) {
  if (!input.validity.valid) {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.add(config.inputErrorClass);
    error.textContent = input.validationMessage;
  } else {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.remove(config.inputErrorClass);
    error.classList.remove(config.errorClass);
    error.textContent = "";
  }
}

function removeDisabledButtonState(button, input) {
  button.classList.remove(input.inactiveButtonClass);
  button.removeAttribute("disabled", false);
}

function addDisabledButtonState(button, input) {
  button.classList.add(input.inactiveButtonClass);
  button.setAttribute("disabled", true);
}

function toggleButtonState(inputs, button, config) {
  if (hasInvalidInput(inputs)) {
    addDisabledButtonState(button, config);
  } else {
    removeDisabledButtonState(button, config);
  }
}

function hasInvalidInput(inputs) {
  return inputs.some((input) => !input.validity.valid);
}

enableValidation(validationConfig);
