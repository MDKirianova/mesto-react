import React from "react";
import {api} from './../utils/Api.js'
import Card from "./Card.jsx";

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [ userName, setUserName ] = React.useState([]);
  const [ userDescription, setUserDescription ] = React.useState([]);
  const [ userAvatar, setUserAvatar ] = React.useState([]);
  const [ cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([serverCards, user]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(serverCards);
      })
      .catch((err) => {
        console.log(`Ошибка при получении профиля пользователя или массива карточек: ${err}`);
      });
  }, [])

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__autor">
            <div className="profile__element-avatar" onClick={onEditAvatar}>
              <img src={userAvatar} alt="Аватарка автора" className="profile__avatar" />
            </div>
            <div className="profile__info">
              <div className="profile__title-button">
                <h1 className="profile__info-title">{userName}</h1>
                <button aria-label="Кнопка редатирования профиля" className="profile__edit-button" type="button" onClick={onEditProfile}></button>
              </div>
              <p className="profile__info-subtitle">{userDescription}</p>
            </div>
          </div>
          <button aria-label="Кнопка добавления" className="profile__add-button" type="button" onClick={onAddPlace}></button>
        </section>
        <section className="grid-elements">
          <ul className="grid-elements__list">
          {cards.map((item) => {
              return (
                <Card key={item._id} name={item.name} link={item.link} likes={[cards.likes]} onCardClick={onCardClick} />
              );
            })}
          </ul>
        </section>
      </main>
    </>
  )
}