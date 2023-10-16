export default function Card(card){
  function handleClick() {
    card.onCardClick(card);
  }   
  
  return (
    <li className="element">
    <img className="element__image" alt={card.name} src={card.link} onClick={handleClick}/>
    <button type="button"  aria-label="" className="element__trash"></button>
    <div className="element__title-like">
      <h2 className="element__title">{card.name}</h2>
      <div className="element__items-like">
        <button type="button" aria-label="" className="element__like"></button>
        <span className="element__like-register">{card.likes.length}</span>
      </div>
    </div>
  </li>
  )
}