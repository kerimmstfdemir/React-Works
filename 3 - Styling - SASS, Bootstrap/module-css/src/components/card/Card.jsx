import Buton from "../buton/Buton";
// import "./Card.css";
import CardStyle from "./card.module.css";

//* module.css'de derleyici CSS class'larini alarak bunlari unique olacak
//* sekilde yeniden adlandirir. (Ornek: card_title__XaSde)
//* Bu durumda, global scope problemi ortadan kalktigi icin stillerin
//* baska class tarafindan ezilmesi (overriding) engellenir.
//* CCS module Webpack, Browsify gibi tool'lar ile kullanilabilir.

const Card = ({ language, btn, img }) => {
  // console.log(props);
  // const { language, btn, img } = props;  //!destr.
  return (
    <div>
      <h1 className={CardStyle["title"]}>{language}</h1>
      <img className={CardStyle["images"]} src={img} alt="img" />
      <Buton btn={btn} />
    </div>
  );
};

export default Card;
