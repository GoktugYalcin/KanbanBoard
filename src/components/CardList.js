import React from "react";
import Card from "./Card";
import EmptyState from "../assets/empty-state.svg";

const CardList = ({ CardArray, listId }) => {
  return Boolean(CardArray.length) ? (
    <div className="list-item_cards">
      {CardArray.map((cardItem, indexCard) => {
        return <Card cardItem={cardItem} listId={listId} key={indexCard} />;
      })}
    </div>
  ) : (
    <div className="list-item_cards">
      <img src={EmptyState} width={30} alt="No cards in this list" />
      It has no cards
    </div>
  );
};

export default CardList;
