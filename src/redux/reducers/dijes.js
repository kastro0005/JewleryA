import {
  GET_DIJES_SUCCESS,
  GET_DIJES_FAIL,
  GET_DIJE_FAIL,
  GET_DIJE_SUCCESS,
  GET_DIJES_NAME_SUCCESS,
  GET_DIJES_NAME_FAIL,
  GET_DIJES_SIZE_SUCCESS,
  GET_DIJES_SIZE_FAIL,
  GET_DIJES_PUREZA_SUCCESS,
  GET_DIJES_PUREZA_FAIL,
  GET_DIJES_PESONETO_SUCCESS,
  GET_DIJES_PESONETO_FAIL,
  GET_DIJES_PRECIOUNIDAD_SUCCESS,
  GET_DIJES_PRECIOUNIDAD_FAIL,
  GET_SEARCH_DIJE_SUCCESS,
  GET_SEARCH_DIJE_FAIL,
} from "redux/actions/Dijes/types";

const initialState = {
  dijes: null,
  dije: null,
  dijesName: null,
  dijesSize: null,
  dijesPureza: null,
  dijesPeso: null,
  dijesPrecio: null,
  search_dijes: null,
  count: null,
  next: null,
  previous: null,
};

export default function dijes(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DIJES_NAME_SUCCESS:
      return {
        ...state,
        dijesName: payload.results.dijesName,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_DIJES_NAME_FAIL:
      return {
        ...state,
        dijesName: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_DIJES_SIZE_SUCCESS:
      return {
        ...state,
        dijesSize: payload.results.dijesSize,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_DIJES_SIZE_FAIL:
      return {
        ...state,
        dijesSize: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_DIJES_PUREZA_SUCCESS:
      return {
        ...state,
        dijesPureza: payload.results.dijesPureza,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_DIJES_PUREZA_FAIL:
      return {
        ...state,
        dijesPureza: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_DIJES_PESONETO_SUCCESS:
      return {
        ...state,
        dijesPeso: payload.results.dijesPeso,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_DIJES_PESONETO_FAIL:
      return {
        ...state,
        dijesPeso: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_DIJES_PRECIOUNIDAD_SUCCESS:
      return {
        ...state,
        dijesPrecio: payload.results.dijesPrecio,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_DIJES_PRECIOUNIDAD_FAIL:
      return {
        ...state,
        dijesPrecio: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_SEARCH_DIJE_SUCCESS:
      return {
        ...state,
        search_dijes: payload.results.search_dijes,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_SEARCH_DIJE_FAIL:
      return {
        ...state,
        search_dijes: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_DIJES_SUCCESS:
      return {
        ...state,
        dijes: payload.results.dijes,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_DIJES_FAIL:
      return {
        ...state,
        dijes: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_DIJE_SUCCESS:
      return {
        ...state,
        dije: payload.dije,
      };
    case GET_DIJE_FAIL:
      return {
        ...state,
        dije: null,
      };
    default:
      return state;
  }
}
