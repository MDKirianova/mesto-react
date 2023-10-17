import React from "react";
import Main from './Main.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
  };

  const closeAllPopups =() => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    selectedCard && setSelectedCard({});
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };



  return (
    <>
    <div className='root'>
      <Header />
      <Main 
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleSubmit}
      >
        <input
          required
          minLength="2"
          maxLength="40"
          type="text"
          name="fieldName"
          id="input-name"
          className="popup__input popup__input_type_name"
          placeholder="Имя автора"
        />
        <span className="popup__error" id="input-name-error">Вы пропустили это поле.</span>
        <input
          required
          minLength="2"
          maxLength="200"
          type="text"
          name="fieldJob"
          id="input-job"
          className="popup__input popup__input_type_job"
          placeholder="Должность автора" />
        <span className="popup__error" id="input-job-error">Вы пропустили это поле.</span>
      </PopupWithForm>
      <PopupWithForm
        name="add"
        title="Новое место"
        buttonText="Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleSubmit}
      >
        <input
          required
          minLength="2"
          maxLength="30"
          type="text"
          name="fieldTitle"
          id="input-title"
          className="popup__input popup__input_type_title"
          placeholder="Название" />
        <span className="popup__error" id="input-title-error"></span>
        <input
          required
          type="url"
          name="fieldLink"
          id="input-link"
          className="popup__input popup__input_type_link"
          placeholder="Ссылка на картинку" />
        <span className="popup__error" id="input-link-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        buttonText="Да"
        onClose={closeAllPopups}
      >
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleSubmit} 
      >
        <input
          required
          type="url"
          name="fieldAvatar"
          id="input-avatar"
          className="popup__input popup__input_type_link"
          placeholder="Ссылка на изображение" />
        <span className="popup__error" id="input-avatar-error">Вы пропустили это поле.</span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
    </>
  );
}

export default App;
