const initialCards = [
  {name: "Val Thorens", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},
  {name: "Restaurant terrace", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},
  {name: "An outdoor cafe", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},
  {name: "A very long bridge, over the forest and through the trees", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},
  {name: "Tunnel with morning light", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},
  {name: "Mountain house", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"}
];

console.log(initialCards);

document.addEventListener('DOMContentLoaded', function() {
  const profileName = document.querySelector('.profile__name');
  const profileDescription = document.querySelector('.profile__description');

  const editButton = document.querySelector('.profile__edit-btn');
  const modal = document.querySelector('.modal');
  const closeButton = document.querySelector('.modal__close-btn');
  const editModalNameInput = document.querySelector('#profile-name-input');
  const editModalDescriptionInput = document.querySelector('#profile-description-input');
  const modalForm = document.querySelector('.modal__form');
  const cardsContainer = document.querySelector('.cards__list'); 

  const cardTemplate = document.querySelector('#card-template').content;
  function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');

    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;

    return cardElement;
  }

  function handleModalFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = editModalNameInput.value;
    profileDescription.textContent = editModalDescriptionInput.value;
    closeModal();
  }

  function openModal() {
    editModalNameInput.value = profileName.textContent;
    editModalDescriptionInput.value = profileDescription.textContent;
    modal.classList.add('modal_opened');
  }

  function closeModal() {
    modal.classList.remove('modal_opened');
  }

  editButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);
  modalForm.addEventListener('submit', handleModalFormSubmit);


  for (let i = 0; i < initialCards.length; i++) {
    const cardData = initialCards[i];
    const cardElement = getCardElement(cardData);
    cardsContainer.appendChild(cardElement);
  }
});
