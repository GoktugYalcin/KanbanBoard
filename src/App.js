import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addList, regenerateLists } from "./slices/mySlice";
import ListContainer from "./components/ListContainer";
import { motion } from "framer-motion";

function App() {
  const dispatch = useDispatch();
  const myLists = useSelector((store) => store.counter.lists);
  const myCards = useSelector((store) => store.counter.cards);
  const rootState = useSelector((store) => store.counter);

  useEffect(() => {
    if (localStorage.getItem("lists")) {
      dispatch(regenerateLists(JSON.parse(localStorage.getItem("lists"))));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(rootState));
  }, [myLists, myCards, rootState]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="App-container"
    >
      <ListContainer />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="list-item_new"
        onClick={() => {
          dispatch(addList());
        }}
      >
        + Add List
      </motion.div>
    </motion.div>
  );
}

export default App;
