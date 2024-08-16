import { settings, enableValidation, resetValidation, disableButton } from "../scripts/validation.js";
import "./index.css";
import logo from '../images/logo.svg';
import avatar from '../images/avatar.jpg';
import pencilIcon from '../images/pencilicon.svg';
import plusIcon from '../images/button.svg';
import Api from '../utils/Api.js';

document.getElementById('header-logo').src = logo;
document.getElementById('profile-avatar').src = avatar;
document.getElementById('profile-edit-icon').src = pencilIcon;
document.getElementById('profile-post-icon').src = plusIcon;

const api = new Api({
  baseUrl: 'https://around-api.en.tripleten-services.com/v1',
  headers: {
      authorization: 'd9b462f6-0ab1-4657-9af2-202693166e25',
      'Content-Type': 'application/json'
  }
});


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

  // Delete Modal
  const deleteModal = document.querySelector('#delete-card-modal');
  const deleteModalConfirmButton = deleteModal.querySelector('.modal__delete-btn');
  const deleteModalCancelButton = deleteModal.querySelector('.modal__cancel-btn');
  const deleteModalCloseButton = deleteModal.querySelector('.modal__close-btn_type_delete');
  let cardToDelete = null;
  function openDeleteModal(cardElement) {
    cardToDelete = cardElement;
    openModal(deleteModal);
  }

  // Handle delete confirmation
  function handleDeleteCard() {
    if (cardToDelete) {
      const cardId = cardToDelete.dataset.cardId; // Get card ID

      api.deleteCard(cardId)
        .then(() => {
          cardToDelete.remove(); // Remove card element from DOM
          closeModal(deleteModal);
        })
        .catch(err => {
          console.error('Error deleting card:', err);
        });
    }
  }


  // Cards
  const cardTemplate = document.querySelector('#card-template').content;
  const cardsContainer = document.querySelector('.cards__list');

  api.getAppInfo()
    .then(([userInfo, cards]) => {
      document.querySelector('.profile__name').textContent = userInfo.name;
      document.querySelector('.profile__description').textContent = userInfo.about;

      renderInitialCards(cards);
    })
    .catch(err => {
      console.error('Error receiving user information:', err);
    });

  function renderInitialCards(cards) {
    cards.forEach((card) => {
      const cardElement = getCardElement(card);
      cardsContainer.appendChild(cardElement);
    });
  }

  function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true).querySelector('.card');
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardLikeBtn = cardElement.querySelector('.card__like-btn');
    const cardDeleteBtn = cardElement.querySelector('.card__delete-btn');

    cardElement.dataset.cardId = data._id;

    // Set the like button state based on `data.isLiked`
    if (data.isLiked) {
      cardLikeBtn.classList.add('card__like-btn_liked');
    } else {
      cardLikeBtn.classList.remove('card__like-btn_liked');
    }

    cardLikeBtn.addEventListener('click', () => {
      if (cardLikeBtn.classList.contains('card__like-btn_liked')) {
        api.unlikeCard(data._id)
          .then(updatedCard => {
            cardLikeBtn.classList.remove('card__like-btn_liked');
          })
          .catch(err => console.error('Error unliking card:', err));
      } else {
        api.likeCard(data._id)
          .then(updatedCard => {
            cardLikeBtn.classList.add('card__like-btn_liked');
          })
          .catch(err => console.error('Error liking card:', err));
      }
    });

    cardImage.addEventListener('click', () => {
      openModal(previewModal);
      previewModalImage.src = data.link;
      previewModalImage.alt = data.name;
      previewModalCaption.textContent = data.name;
    });

    cardDeleteBtn.addEventListener('click', () => {
      openDeleteModal(cardElement);
    });

    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;

    return cardElement;
  }



  function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    const name = editModalNameInput.value;
    const about = editModalDescriptionInput.value;

    api.editUserProfile(name, about)
      .then((userData) => {
        profileName.textContent = userData.name;
        profileDescription.textContent = userData.about;
        closeModal(editProfileModal);
      })
      .catch((err) => {
        console.error('Error updating profile:', err);
      });
  }

  function handleNewPostSubmit(evt) {
    evt.preventDefault();
    const name = newPostCaptionInput.value;
    const link = newPostLinkInput.value;

    api.createCard(name, link)
      .then((newCardData) => {
        const cardElement = getCardElement(newCardData);
        cardsContainer.prepend(cardElement);
        closeModal(newPostModal);
        newPostForm.reset();
        disableButton(cardSubmitBtn, settings);
      })
      .catch((err) => {
        console.error('Error creating new card:', err);
      });
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

  deleteModalCloseButton.addEventListener('click', () => {
    closeModal(deleteModal);
  });

  deleteModalCancelButton.addEventListener('click', () => {
    closeModal(deleteModal);
  });

  deleteModalConfirmButton.addEventListener('click', handleDeleteCard);
  editProfileCloseButton.addEventListener('click', () => { closeModal(editProfileModal) });
  newPostCloseButton.addEventListener('click', () => { closeModal(newPostModal) });
  editProfileForm.addEventListener('submit', handleEditProfileSubmit);
  newPostForm.addEventListener('submit', handleNewPostSubmit);

  enableValidation(settings);
});




