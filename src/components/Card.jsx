import React, { useState, useEffect } from "react";
import desktopWoman from "../images/illustration-woman-online-desktop.svg";
import arrow from "../images/icon-arrow-down.svg";

import { data } from "../data.js";

export default function Card() {
  let element = [];

  const [cardId, setCardId] = useState({
    id: null,
    open: false,
  });

  const iconArrowUp = (id) => {
    return (
      <img
        src={arrow}
        alt="icon-arrow-up"
        className={"card__desktop-icon-arrow--two"}
        id={id}
        onClick={(e) => setCardId({ ...cardId, id: e.target.id, open: !cardId.open })}
      />
    );
  };

 

  const iconArrowDown = (id) => {
    return (
      <img
        src={arrow}
        alt="icon-arrow-down"
        className={"card__desktop-icon-arrow"}
        id={id}
        onClick={(e) => setCardId({ ...cardId, id: e.target.id, open: !cardId.open })}
      />
    );
  };

  return (
    <div className="card">
      <img
        src={desktopWoman}
        alt="desktop-woman-icon"
        className="card__desktop-image-woman"
      />
      <div className="card__desktop-faq">
        <h1 className="card__desktop-faq--title">FAQ</h1>

        {data.cards.map((data) => {
          return (
            <div key={data.id}>
              <div className="card__desktop-section-container">
                <p className="card__desktop-faq--information">
                  {data.question}
                </p>  
                {
                  data.id === cardId.id && cardId.open === true ?
                  iconArrowDown(data.id) :
                  iconArrowUp(data.id)
                  
                  
                  
                  }
              </div>
              <hr className="card__desktop-faq--divider" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
