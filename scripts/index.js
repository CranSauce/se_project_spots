const initialCards = [
  {name: "Val Thorens", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},
  {name: "Restaurant terrace", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},
  {name: "An outdoor cafe", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},
  {name: "A very long bridge, over the forest and through the trees", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},
  {name: "Tunnel with morning light", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},
  {name: "Mountain house", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"}
];

document.addEventListener('DOMContentLoaded', function() {
  const profileName = document.querySelector('.profile__name');
  const profileDescription = document.querySelector('.profile__description');
  const editButton = document.querySelector('.profile__edit-btn');


  //Edit Profile Modal
  const editProfileModal = document.querySelector('#edit-profile');
  const editProfileCloseButton = document.querySelector('#edit-profile-close-btn');
  const editModalNameInput = document.querySelector('#profile-name-input');
  const editModalDescriptionInput = document.querySelector('#profile-description-input');
  const editProfileForm = document.querySelector('#edit-profile-form');

  //New Post Modal
  const newPostModal = document.querySelector('#add-card-modal');
  const newPostButton = document.querySelector('.profile__post-btn');
  const newPostCloseButton = document.querySelector('#new-post-close-btn');
  const newPostForm = document.querySelector('#new-post-form');
  const newPostLinkInput = document.querySelector('#add-card-link-input');
  const newPostCaptionInput = document.querySelector('#add-card-caption-input');

  //Cards
  const cardTemplate = document.querySelector('#card-template').content;
  const cardsContainer = document.querySelector('.cards__list');


  function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardLikeBtn = cardElement.querySelector('.card__like-btn');

    cardLikeBtn.addEventListener('click', () => {
      cardLikeBtn.classList.toggle("card__like-btn_liked");
    });

    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;

    return cardElement;
  }

  initialCards.forEach((card) =>{
    const cardElement = getCardElement(card);
    cardsContainer.appendChild(cardElement);
})

  //Modal Submit Handlers/Events

  function handleModalFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = editModalNameInput.value;
    profileDescription.textContent = editModalDescriptionInput.value;
    closeModal(editProfileModal);
  }

  function handleNewPostSubmit(evt) {
    evt.preventDefault();
    const newCard = {
      name: newPostCaptionInput.value,
      link: newPostLinkInput.value
    };
    const cardElement = getCardElement(newCard);
    cardsContainer.prepend(cardElement);
    newPostCaptionInput.value = '';
    newPostLinkInput.value = '';
    closeModal(newPostModal);
  }

  function openModal(modal) {
    modal.classList.add('modal_opened');
  }

  function closeModal(modal) {
    modal.classList.remove('modal_opened');
  }

  editButton.addEventListener('click', () => {
    openModal(editProfileModal);
    editModalNameInput.value = profileName.textContent;
    editModalDescriptionInput.value = profileDescription.textContent;
  });

  newPostButton.addEventListener('click', () => {
    openModal(newPostModal);
  });




  editProfileCloseButton.addEventListener('click', () =>  {closeModal(editProfileModal)});
  newPostCloseButton.addEventListener('click', () =>  {closeModal(newPostModal)});
  editProfileForm.addEventListener('submit', handleModalFormSubmit);
  newPostForm.addEventListener('submit', handleNewPostSubmit);


});
