import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [
    {
      listId: 0,
      listLabel: "First List",
      listItems: [0], //Card id [1,2,3]
    },
    {
      listId: 1,
      listLabel: "Second List",
      listItems: [1], //Card id [1,2,3]
    },
  ],
  cards: [
    {
      cardId: 0,
      cardLabel: "First card",
    },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const newCardId = parseInt((Math.random() * 1000).toFixed());

      const findList = state.lists.find(
        (item) => item.listId === action.payload.listId
      );
      findList.listItems.push(newCardId);

      state.cards = [
        ...state.cards,
        {
          cardId: newCardId,
          cardLabel: action.payload.newCardLabel
            ? action.payload.newCardLabel
            : "",
        },
      ];
    },
    removeCard: (state, action) => {
      const findList = state.lists.find(
        (item) => item.listId === action.payload.listId
      );
      findList.listItems.filter(
        (cards) => cards.cardId !== action.payload.cardId
      );

      state.cards = state.cards.filter(
        (card) => card.cardId !== action.payload.cardId
      );
    },
    addList: (state) => {
      const newListId = parseInt((Math.random() * 1000).toFixed());
      state.lists.push({
        listId: newListId,
        listLabel: "New List",
        listItems: [], //Card id [1,2,3]
      });
    },
    removeList: (state, action) => {
      const beRemovedList = state.lists.find(
        (list) => list.listId === action.payload
      );
      state.cards = state.cards.filter(
        (card) => !beRemovedList.listItems.includes(card.cardId)
      );
      state.lists = state.lists.filter(
        (list) => list.listId !== action.payload
      );
    },
    changeListLabel: (state, action) => {
      const listItemBeSearched = state.lists.find(
        (list) => list.listId === action.payload.listId
      );
      listItemBeSearched.listLabel = action.payload.newLabel;
    },
    changeCardLabel: (state, action) => {
      const cardItemBeSearched = state.cards.find(
        (card) => card.cardId === action.payload.cardId
      );
      cardItemBeSearched.cardLabel = action.payload.newLabel;
    },
    regenerateLists: (state, action) => {
      state.cards = action.payload.cards;
      state.lists = action.payload.lists;
    },
  },
});

export const {
  addCard,
  removeCard,
  addList,
  removeList,
  changeListLabel,
  changeCardLabel,
  regenerateLists,
} = counterSlice.actions;

export default counterSlice.reducer;
