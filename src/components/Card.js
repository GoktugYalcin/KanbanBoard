import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { changeCardLabel, removeCard } from "../slices/mySlice";

const Card = ({ cardItem, listId }) => {
  const dispatch = useDispatch();
  const [isInput, setIsInput] = useState(false);
  const [newText, setNewText] = useState("");

  useEffect(() => {
    setNewText(cardItem.cardLabel);
  }, [cardItem]);

  return !isInput ? (
    <motion.div
      key="card"
      initial={{ opacity: 0, scale: 0.5 }}
      exit={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="list-item_cards-item"
    >
      <span
        className="list-item_cards-item_label"
        onClick={() => {
          setIsInput(true);
        }}
      >
        {cardItem.cardLabel}
      </span>
      <span
        className="list-item_cards-item_remove"
        onClick={() =>
          setTimeout(() => {
            dispatch(removeCard({ listId: listId, cardId: cardItem.cardId }));
          }, 100)
        }
      >
        X
      </span>
    </motion.div>
  ) : (
    <input
      className="list-item_cards-item_add-action"
      value={newText}
      onChange={(e) => {
        setNewText(e.target.value);
      }}
      autoFocus={true}
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
