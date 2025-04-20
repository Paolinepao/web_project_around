//botones
const buttonEdit = document.querySelector(".profile__buttom-lapiz");
const buttonClose = document.querySelector(".popup__container-btn-close");
//popup
const popup = document.querySelector(".popup");
//form
const form = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__form-input");
const explorerName = document.querySelector(".profile__title");
//funciones de popup abrir y cerrar
function openPopup() {
  popup.classList.add("active");
}
function closePopup() {
  popup.classList.remove("active");
}
//funciones para llenar el formulario
function handleSubmit(event) {
  event.preventDefault();
  const name = inputName.value;
  explorerName.textContent = name;
  inputName.value = " ";
  closePopup();
}

// click para abrir y cerrar el popup
buttonEdit.addEventListener("click", openPopup);
buttonClose.addEventListener("click", closePopup);

//agregar evento de submit
form.addEventListener("submit", handleSubmit);
