import React from "react";
import List from "./List";
import { useSelector } from "react-redux";

const ListContainer = () => {
  const myLists = useSelector((store) => store.counter.lists);
  return myLists.map((item, index) => {
    return <List item={item} key={index} />;
  });
};

export default ListContainer;
