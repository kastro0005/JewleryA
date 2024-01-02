import {
  GET_ANILLOS_SUCCESS,
  GET_ANILLOS_FAIL,
  GET_ANILLO_FAIL,
  GET_ANILLO_SUCCESS,
  GET_ANILLOS_NAME_SUCCESS,
  GET_ANILLOS_NAME_FAIL,
  GET_ANILLOS_SIZE_SUCCESS,
  GET_ANILLOS_SIZE_FAIL,
  GET_ANILLOS_PUREZA_SUCCESS,
  GET_ANILLOS_PUREZA_FAIL,
  GET_ANILLOS_PESONETO_SUCCESS,
  GET_ANILLOS_PESONETO_FAIL,
  GET_ANILLOS_PRECIOUNIDAD_SUCCESS,
  GET_ANILLOS_PRECIOUNIDAD_FAIL,
  GET_SEARCH_ANILLO_SUCCESS,
  GET_SEARCH_ANILLO_FAIL,
} from "redux/actions/Anillos/types";

const initialState = {
  anillos: null,
  anillo: null,
  anillosName: null,
  anillosSize: null,
  anillosPureza: null,
  anillosPeso: null,
  anillosPrecio: null,
  search_anillos: null,
  count: null,
  next: null,
  previous: null,
};

export default function anillos(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ANILLOS_NAME_SUCCESS:
      return {
        ...state,
        anillosName: payload.results.anillosName,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_ANILLOS_NAME_FAIL:
      return {
        ...state,
        anillosName: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_ANILLOS_SIZE_SUCCESS:
      return {
        ...state,
        anillosSize: payload.results.anillosSize,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_ANILLOS_SIZE_FAIL:
      return {
        ...state,
        anillosSize: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_ANILLOS_PUREZA_SUCCESS:
      return {
        ...state,
        anillosPureza: payload.results.anillosPureza,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_ANILLOS_PUREZA_FAIL:
      return {
        ...state,
        anillosPureza: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_ANILLOS_PESONETO_SUCCESS:
      return {
        ...state,
        anillosPeso: payload.results.anillosPeso,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_ANILLOS_PESONETO_FAIL:
      return {
        ...state,
        anillosPeso: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_ANILLOS_PRECIOUNIDAD_SUCCESS:
      return {
        ...state,
        anillosPrecio: payload.results.anillosPrecio,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_ANILLOS_PRECIOUNIDAD_FAIL:
      return {
        ...state,
        anillosPrecio: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_SEARCH_ANILLO_SUCCESS:
      return {
        ...state,
        search_anillos: payload.results.search_anillos,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_SEARCH_ANILLO_FAIL:
      return {
        ...state,
        search_anillos: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_ANILLOS_SUCCESS:
      return {
        ...state,
        anillos: payload.results.anillos,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_ANILLOS_FAIL:
      return {
        ...state,
        anillos: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_ANILLO_SUCCESS:
      return {
        ...state,
        anillo: payload.anillo,
      };
    case GET_ANILLO_FAIL:
      return {
        ...state,
        anillo: null,
      };
    default:
      return state;
  }
}
