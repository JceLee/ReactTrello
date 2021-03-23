import Card from "./type";
import { CardActionType, FETCH_SUCCESS, FETCH_FAILURE } from "./actions";

type State = {
  cardList: Card[];
};

const initialState = {
  cardList: [],
};

const cardReducer = (state: State = initialState, action: CardActionType): State => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        cardList: state.cardList.concat(action.payload),
      };
    case FETCH_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default cardReducer;
