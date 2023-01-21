import React, { useState } from "react";
import { addCard } from "../slices/mySlice";
import { useDispatch } from "react-redux";

const AddNew = ({ listId }) => {
  const dispatch = useDispatch();
  const [isInput, setIsInput] = useState(false);
  const [newText, setNewText] = useState("");

  return !isInput ? (
    <div
      onClick={() => {
        setIsInput(true);
      }}
      className="list-item_cards-item_add-action"
    >
      + Add Card
    </div>
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
          dispatch(addCard({ listId: listId, newCardLabel: newText }));
          setIsInput(false);
          setNewText("");
        }
      }}
    />
  );
};

export default AddNew;
