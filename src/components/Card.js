import React, { useEffect, useState } from "react";
import { changeCardLabel, removeCard } from "../slices/mySlice";
import { useDispatch } from "react-redux";

const Card = ({ cardItem, listId }) => {
  const dispatch = useDispatch();
  const [isInput, setIsInput] = useState(false);
  const [newText, setNewText] = useState("");

  useEffect(() => {
    setNewText(cardItem.cardLabel);
  }, [cardItem]);

  return !isInput ? (
    <div
      onClick={() => {
        setIsInput(true);
      }}
      className="list-item_cards-item"
    >
      <span className="list-item_cards-item_label">{cardItem.cardLabel}</span>
      <span
        className="list-item_cards-item_remove"
        onClick={() =>
          dispatch(removeCard({ listId: listId, cardId: cardItem.cardId }))
        }
      >
        X
      </span>
    </div>
  ) : (
    <input
      className="list-item_cards-item_add-action"
      value={newText}
      onChange={(e) => {
        setNewText(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          dispatch(
            changeCardLabel({ cardId: cardItem.cardId, newLabel: newText })
          );
          setIsInput(false);
          setNewText("");
        }
      }}
    />
  );
};

export default Card;
