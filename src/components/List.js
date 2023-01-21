import React from "react";
import ListHeader from "./ListHeader";
import CardList from "./CardList";
import AddCard from "./AddCard";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const List = ({ item }) => {
  const myCards = useSelector((store) => store.counter.cards);

  return (
        <motion.div
          className="list-item"
          key="list"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
  );
};

export default List;
