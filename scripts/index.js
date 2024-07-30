const initialCards = [
  { name: "Val Thorens", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg" },
  { name: "Restaurant terrace", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg" },
  { name: "An outdoor cafe", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg" },
  { name: "A very long bridge, over the forest and through the trees", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg" },
  { name: "Tunnel with morning light", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg" },
  { name: "Mountain house", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg" },
  { name: "Golden Gate bridge", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg" }
];

document.addEventListener('DOMContentLoaded', function () {

  // Edit Profile Modal
  const profileName = document.querySelector('.profile__name');
  const profileDescription = document.querySelector('.profile__description');
  const editButton = document.querySelector('.profile__edit-btn');
  const editProfileModal = document.querySelector('#edit-profile');
  const editProfileCloseButton = editProfileModal.querySelector('#edit-profile-close-btn');
  const editModalNameInput = editProfileModal.querySelector('#profile-name-input');
  const editModalDescriptionInput = editProfileModal.querySelector('#profile-description-input');
  const editProfileForm = document.forms['profile-form'];

  // New Post Modal
  const newPostButton = document.querySelector('.profile__post-btn');
  const newPostModal = document.querySelector('#add-card-modal');
  const newPostCloseButton = newPostModal.querySelector('#new-post-close-btn');
  const newPostForm = document.forms['new-post'];
  const newPostLinkInput = newPostModal.querySelector('#add-card-link-input');
  const newPostCaptionInput = newPostModal.querySelector('#add-card-caption-input');
  const cardSubmitBtn = newPostModal.querySelector(".modal__submit-btn");

  // Preview Modal
  const previewModal = document.querySelector('#preview-modal');
  const previewModalImage = previewModal.querySelector('.modal__image');
  const previewModalCaption = previewModal.querySelector('.modal__caption');
  const previewCloseButton = previewModal.querySelector('.modal__close-btn_type_preview');



  // Cards
  const cardTemplate = document.querySelector('#card-template').content;
  const cardsContainer = document.querySelector('.cards__list');

  function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true).querySelector('.card');
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardLikeBtn = cardElement.querySelector('.card__like-btn');
    const cardDeleteBtn = cardElement.querySelector('.card__delete-btn');

    cardLikeBtn.addEventListener('click', () => {
      cardLikeBtn.classList.toggle("card__like-btn_liked");
    });

    cardImage.addEventListener('click', () => {
      openModal(previewModal);
      previewModalImage.src = data.link;
      previewModalImage.alt = data.name;
      previewModalCaption.textContent = data.name;
    });


    cardDeleteBtn.addEventListener('click', () => {
      cardElement.remove();
    });

    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;

    return cardElement;
  }

  initialCards.forEach((card) => {
    const cardElement = getCardElement(card);
    cardsContainer.appendChild(cardElement);
  });

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
    newPostForm.reset();
    disableButton(cardSubmitBtn, settings);
    closeModal(newPostModal);
  }

  function openModal(modal) {
    modal.classList.add('modal_opened');


    const closeModalOverlayClick = (event) => {
      if (event.target === modal) {
        closeModal(modal);
      }
    };
    modal.addEventListener('click', closeModalOverlayClick);


    const closeModalOnEsc = (evt) => {
      if (evt.key === 'Escape') {
        closeModal(modal);
      }
    };
    document.addEventListener('keydown', closeModalOnEsc);

    //Add these to remove them later
    modal._closeModalOnClickOutside = closeModalOverlayClick;
    modal._closeModalOnEsc = closeModalOnEsc;
  }

  function closeModal(modal) {
    modal.classList.remove('modal_opened');

    modal.removeEventListener('click', modal._closeModalOnClickOutside);
    document.removeEventListener('keydown', modal._closeModalOnEsc);

    delete modal._closeModalOnClickOutside;
    delete modal._closeModalOnEsc;
  }

  editButton.addEventListener('click', () => {
    resetValidation(editProfileForm, [editModalNameInput, editModalDescriptionInput]);
    openModal(editProfileModal);
    editModalNameInput.value = profileName.textContent;
    editModalDescriptionInput.value = profileDescription.textContent;
  });

  newPostButton.addEventListener('click', () => {
    openModal(newPostModal);
  });

  previewCloseButton.addEventListener('click', () => {
    closeModal(previewModal);
  });

  editProfileCloseButton.addEventListener('click', () => { closeModal(editProfileModal) });
  newPostCloseButton.addEventListener('click', () => { closeModal(newPostModal) });
  editProfileForm.addEventListener('submit', handleModalFormSubmit);
  newPostForm.addEventListener('submit', handleNewPostSubmit);
})