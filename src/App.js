import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addList, regenerateLists } from "./slices/mySlice";
import ListContainer from "./components/ListContainer";

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
    <div className="App-container">
      <ListContainer />
      <div
        className="list-item_new"
        onClick={() => {
          dispatch(addList());
        }}
      >
        + Add List
      </div>
    </div>
  );
}

export default App;
