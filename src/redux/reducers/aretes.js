import {
  GET_ARETES_SUCCESS,
  GET_ARETES_FAIL,
  GET_ARETE_FAIL,
  GET_ARETE_SUCCESS,
  GET_ARETES_NAME_SUCCESS,
  GET_ARETES_NAME_FAIL,
  GET_ARETES_SIZE_SUCCESS,
  GET_ARETES_SIZE_FAIL,
  GET_ARETES_PUREZA_SUCCESS,
  GET_ARETES_PUREZA_FAIL,
  GET_ARETES_PESONETO_SUCCESS,
  GET_ARETES_PESONETO_FAIL,
  GET_ARETES_PRECIOUNIDAD_SUCCESS,
  GET_ARETES_PRECIOUNIDAD_FAIL,
  GET_SEARCH_ARETE_SUCCESS,
  GET_SEARCH_ARETE_FAIL,
} from "redux/actions/Aretes/types";

const initialState = {
  aretes: null,
  arete: null,
  aretesName: null,
  aretesSize: null,
  aretesPureza: null,
  aretesPeso: null,
  aretesPrecio: null,
  search_aretes: null,
  count: null,
  next: null,
  previous: null,
};

export default function aretes(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ARETES_NAME_SUCCESS:
      return {
        ...state,
        aretesName: payload.results.aretesName,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_ARETES_NAME_FAIL:
      return {
        ...state,
        aretesName: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_ARETES_SIZE_SUCCESS:
      return {
        ...state,
        aretesSize: payload.results.aretesSize,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_ARETES_SIZE_FAIL:
      return {
        ...state,
        aretesSize: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_ARETES_PUREZA_SUCCESS:
      return {
        ...state,
        aretesPureza: payload.results.aretesPureza,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_ARETES_PUREZA_FAIL:
      return {
        ...state,
        aretesPureza: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_ARETES_PESONETO_SUCCESS:
      return {
        ...state,
        aretesPeso: payload.results.aretesPeso,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_ARETES_PESONETO_FAIL:
      return {
        ...state,
        aretesPeso: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_ARETES_PRECIOUNIDAD_SUCCESS:
      return {
        ...state,
        aretesPrecio: payload.results.aretesPrecio,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_ARETES_PRECIOUNIDAD_FAIL:
      return {
        ...state,
        aretesPrecio: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_SEARCH_ARETE_SUCCESS:
      return {
        ...state,
        search_aretes: payload.results.search_aretes,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_SEARCH_ARETE_FAIL:
      return {
        ...state,
        search_aretes: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_ARETES_SUCCESS:
      return {
        ...state,
        aretes: payload.results.aretes,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_ARETES_FAIL:
      return {
        ...state,
        aretes: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_ARETE_SUCCESS:
      return {
        ...state,
        arete: payload.arete,
      };
    case GET_ARETE_FAIL:
      return {
        ...state,
        arete: null,
      };
    default:
      return state;
  }
}
