import React from "react";
import ListHeader from "./ListHeader";
import CardList from "./CardList";
import AddCard from "./AddCard";
import { useSelector } from "react-redux";

const List = ({ item }) => {
  const myCards = useSelector((store) => store.counter.cards);

  return (
    <div className="list-item">
      <div className="list-item_header">
        <ListHeader listItem={item} />
      </div>
      <CardList
        listId={item.listId}
        CardArray={myCards.filter((card) =>
          item.listItems.includes(card.cardId)
        )}
      />
      <AddCard listId={item.listId} />
    </div>
  );
};

export default List;
