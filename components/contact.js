function generateContactUs(container) {
  let contactUsSection = document.createElement("section");
  container.append(contactUsSection);

  let contactUsTitle = document.createElement("h2");
  contactUsTitle.innerText = "Contact Us";
  contactUsTitle.className = "subtitle";
  contactUsSection.append(contactUsTitle);

  let form = document.createElement("form");
  form.id = "contact-form";
  contactUsSection.append(form);

  let emailInput = document.createElement("input");
  emailInput.required = true;
  emailInput.type = "email";
  emailInput.placeholder = "E-mail";
  form.append(emailInput);

  let textArea = document.createElement("textarea");
  textArea.required = true;
  textArea.placeholder = "Share your thoughts";
  textArea.rows = 12;
  form.append(textArea);

  let submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.innerText = "Send";
  form.append(submitButton);

  let modal = document.createElement("div");
  modal.id = "modal";
  contactUsSection.append(modal);

  let modalContent = document.createElement("div");
  modalContent.id = "modal-window";
  modal.append(modalContent);

  let modalText = document.createElement("span");
  modalText.innerText = "Thank you for sharing your thoughts! :)";
  modalText.id = "modal-window__text";
  modalContent.append(modalText);

  let closeButton = document.createElement("button");
  closeButton.innerText = "Close";
  closeButton.id = "modal-window__btn";
  modalContent.append(closeButton);

  closeButton.onclick = () => {
    modal.style.display = "none";
  };

  submitButton.onclick = (event) => {
    if (emailInput.value && textArea.value) {
      event.preventDefault();
      modal.style.display = "block";
      form.reset();
    }
  };
}

export default generateContactUs;
