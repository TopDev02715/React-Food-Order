import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";

function CardItem(props) {
  const [cart, setCart] = useContext(CartContext);

  function addToCart() {
    const foodItem = { name: props.text, price: props.price };
    setCart((currentState) => [...currentState, foodItem]);
  }

  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Food Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h4 className="cards__item__text">
              {props.text}
              <h3 className="cards__item__price">{props.price},-</h3>
            </h4>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
