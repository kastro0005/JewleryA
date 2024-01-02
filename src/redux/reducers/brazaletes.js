import {
  GET_BRAZALETES_SUCCESS,
  GET_BRAZALETES_FAIL,
  GET_BRAZALETE_FAIL,
  GET_BRAZALETE_SUCCESS,
  GET_BRAZALETES_NAME_SUCCESS,
  GET_BRAZALETES_NAME_FAIL,
  GET_BRAZALETES_SIZE_SUCCESS,
  GET_BRAZALETES_SIZE_FAIL,
  GET_BRAZALETES_PUREZA_SUCCESS,
  GET_BRAZALETES_PUREZA_FAIL,
  GET_BRAZALETES_PESONETO_SUCCESS,
  GET_BRAZALETES_PESONETO_FAIL,
  GET_BRAZALETES_PRECIOUNIDAD_SUCCESS,
  GET_BRAZALETES_PRECIOUNIDAD_FAIL,
  GET_SEARCH_BRAZALETE_SUCCESS,
  GET_SEARCH_BRAZALETE_FAIL,
} from "redux/actions/Brazaletes/types";

const initialState = {
  brazaletes: null,
  brazalete: null,
  brazaletesName: null,
  brazaletesSize: null,
  brazaletesPureza: null,
  brazaletesPeso: null,
  brazaletesPrecio: null,
  search_brazaletes: null,
  count: null,
  next: null,
  previous: null,
};

export default function brazaletes(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BRAZALETES_NAME_SUCCESS:
      return {
        ...state,
        brazaletesName: payload.results.brazaletesName,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_BRAZALETES_NAME_FAIL:
      return {
        ...state,
        brazaletesName: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_BRAZALETES_SIZE_SUCCESS:
      return {
        ...state,
        brazaletesSize: payload.results.brazaletesSize,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_BRAZALETES_SIZE_FAIL:
      return {
        ...state,
        brazaletesSize: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_BRAZALETES_PUREZA_SUCCESS:
      return {
        ...state,
        brazaletesPureza: payload.results.brazaletesPureza,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_BRAZALETES_PUREZA_FAIL:
      return {
        ...state,
        brazaletesPureza: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_BRAZALETES_PESONETO_SUCCESS:
      return {
        ...state,
        brazaletesPeso: payload.results.brazaletesPeso,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_BRAZALETES_PESONETO_FAIL:
      return {
        ...state,
        brazaletesPeso: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_BRAZALETES_PRECIOUNIDAD_SUCCESS:
      return {
        ...state,
        brazaletesPrecio: payload.results.brazaletesPrecio,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_BRAZALETES_PRECIOUNIDAD_FAIL:
      return {
        ...state,
        brazaletesPrecio: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_SEARCH_BRAZALETE_SUCCESS:
      return {
        ...state,
        search_brazaletes: payload.results.search_brazaletes,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_SEARCH_BRAZALETE_FAIL:
      return {
        ...state,
        search_brazaletes: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_BRAZALETES_SUCCESS:
      return {
        ...state,
        brazaletes: payload.results.brazaletes,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_BRAZALETES_FAIL:
      return {
        ...state,
        brazaletes: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_BRAZALETE_SUCCESS:
      return {
        ...state,
        brazalete: payload.brazalete,
      };
    case GET_BRAZALETE_FAIL:
      return {
        ...state,
        brazalete: null,
      };
    default:
      return state;
  }
}
