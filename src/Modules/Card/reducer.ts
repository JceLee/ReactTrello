import Card from "./type";
import { CardActionType, FETCH_SUCCESS, FETCH_FAILURE, ADD_CARD } from "./actions";

type State = {
  cardList: Card[] | [];
};

const initialState = {
  cardList: [],
};

const cardReducer = (state: State = initialState, action: CardActionType): State => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        cardList: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
      };
    case ADD_CARD:
      return {
        cardList: [...state.cardList, action.payload],
      };
    default:
      return state;
  }
};

export default cardReducer;
