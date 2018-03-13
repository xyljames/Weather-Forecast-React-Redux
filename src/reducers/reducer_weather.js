import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //not chnage state, mutate state instead
      return [action.payload.data, ...state];
  }
  return state;
}
