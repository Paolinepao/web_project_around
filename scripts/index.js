//botones
const buttonEdit = document.querySelector(".profile__buttom-lapiz");
const buttonClose = document.querySelector(".popup__container-btn-close");
//popup
const popup = document.querySelector(".popup");
//form
const form = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__form-input");
const explorerName = document.querySelector(".profile__title");
const inputAbout = document.querySelector("#popup__form-about");
const aboutName = document.querySelector(".profile__subtitle");

//funciones de popup abrir y cerrar
function openPopup() {
  inputName.value = explorerName.textContent;
  inputAbout.value = aboutName.textContent;
  popup.classList.add("active");
}
function closePopup() {
  popup.classList.remove("active");
}
//funciones para llenar el formulario
function handleSubmit(event) {
  event.preventDefault();
  explorerName.textContent = inputName.value;
  aboutName.textContent = inputAbout.value;
  closePopup();
}

// click para abrir y cerrar el popup
buttonEdit.addEventListener("click", openPopup);
buttonClose.addEventListener("click", closePopup);

//agregar evento de submit
form.addEventListener("submit", handleSubmit);

//popup 2
const popupImage = document.querySelector("#popupcards");

//popup imágenes
const btnOpenImage = document.querySelector(".profile__buttom-adicion");
const btnCloseImage = popupImage.querySelector(".popup__container-btn-close");

//form
const formImage = document.querySelector("#popupcards__form");
const inputTitleImage = document.querySelector("#popupcards__form-title");
const inputLinkImage = document.querySelector("#popupcards__form-image");
const btnEnviarImage = popupImage.querySelector(".popup__form-btn-submit");

//open popup 2
function openPopupImage() {
  popupImage.classList.add("active");
}
function closePopupImage() {
  popupImage.classList.remove("active");
}
function handleSubmitImage(event) {
  event.preventDefault();
  const titlePlaceImage = inputTitleImage.value;
  const UrlImage = inputLinkImage.value;
  //Función clonar cards
  createCard(titlePlaceImage, UrlImage);

  closePopupImage();
}

btnOpenImage.addEventListener("click", openPopupImage);
btnCloseImage.addEventListener("click", closePopupImage);

formImage.addEventListener("submit", handleSubmitImage);

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

//clonar tarjetas
const allCards = document.querySelector(".elements");
const cardsArea = document.querySelector("#cards-template").content;

//función para clonar los elementos

function createCard(name, link) {
  const clonCards = cardsArea.content.cloneNode(true);
  //declarar constantes contenido carta clonada
  const cardTitle = clonCards.querySelector(".elements__description-title");
  cardTitle.textContent = name;
  const cardImage = clonCards.querySelector(".elements__image");
  cardImage.src = link;
  cardImage.alt = name;
  cardImage.dataset.image = link;
  cardImage.dataset.title = name;
  const cardCorazon = clonCards.querySelector(".elements__description-corazon");
  const cardBasurero = clonCards.querySelector(".elements__basurero");
  cardCorazon.addEventListener("click", () => {
    cardCorazon.classList.toggle("elements__description-corazon-active");
  });
  cardBasurero.addEventListener("click", (evt) => {
    const deleteCard = evt.target.closest(".elements__contenedor");
    deleteCard.remove();
  });

  cardImage.addEventListener("click", () => {
    openBigImagePopup(cardImage.dataset.image, cardImage.dataset.title);
  });
  allCards.prepend(cloneCads);
}
initialCards.forEach((item) => {
  createCard(item.name, item.link);
});

const popupBigImage = document.querySelector("#popup__bigimage-open");
const popupBigImageContainer = popupBigImage.querySelector(".popup__bigimage");
const popupBigImageText = popupBigImage.querySelector(".popup__image-text");

function openBigImagePopup(imageLink, imageTitle) {
  popupBigImageContainer.src = imageLink;
  popupBigImageText.textContent = imageTitle;
  //popupBigImage.classList.remove("popup");
  popupBigImage.classList.add("active");
}
const closeBigImageBtn = popupBigImage.querySelector(
  "#popup__form_btn-close-image"
);
closeBigImageBtn.addEventListener("click", () => {
  popupBigImage.classList.remove("active");
});

/*
//Selección de elementos
const cardsArea = document.querySelector("#cardsArea");
const cardsTemplate = document.querySelector("#cards-template").content;
const cardsContenedor = document.querySelector(".cards__contenedor");

//funcionalidad
function createCard(cardData) {
  //clonamos el template
  const newNode = cardsTemplate.cloneNode(true);
  //trabajamos el nuevo nodo (contenido de la card)
  //selección de elementos
  const cardsTitle = newNode.querySelector(".cards__description-title");
  const cardsImage = newNode.querySelector(".cards__image");
  //funcionalidad o manipulación del DOM
  cardsTitle.textContent = cardData.name;
  cardsImage.src = cardData.link;
  cardsImage.alt = cardData.name;
  return newNode;
}
function renderCards() {
  //esto va a iterar 6 veces
  initialCards.forEach((cardData) => {
    //creación de la card, clonación
    const card = createCard(cardData);
    //añadimos la card ala DOM
    cardsArea.appendChild(card);
  });
}
renderCards();*/
