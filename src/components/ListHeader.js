import React, { useEffect, useState } from "react";
import { changeListLabel, removeList } from "../slices/mySlice";
import { useDispatch } from "react-redux";

const ListHeader = ({ listItem }) => {
  const dispatch = useDispatch();
  const [isInput, setIsInput] = useState(false);
  const [newText, setNewText] = useState("");

  useEffect(() => {
    setNewText(listItem.listLabel);
  }, [listItem]);

  return (
    <>
      {!isInput ? (
        <span
          className="list-item_header-label"
          onClick={(e) => {
            setIsInput(true);
          }}
        >
          {listItem.listLabel}
        </span>
      ) : (
        <input
          className="list-item_header-label"
          value={newText}
          autoFocus={true}
          onChange={(e) => {
            setNewText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(
                changeListLabel({ listId: listItem.listId, newLabel: newText })
              );
              setIsInput(false);
              setNewText("");
            }
          }}
        />
      )}
      <div
        className="list-item_header-actions"
        onClick={() => {
          dispatch(removeList(listItem.listId));
        }}
      >
        ...
      </div>
    </>
  );
};

export default ListHeader;
