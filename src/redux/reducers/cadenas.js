import {
  GET_CADENAS_SUCCESS,
  GET_CADENAS_FAIL,
  GET_CADENA_FAIL,
  GET_CADENA_SUCCESS,
  GET_CADENAS_NAME_SUCCESS,
  GET_CADENAS_NAME_FAIL,
  GET_CADENAS_SIZE_SUCCESS,
  GET_CADENAS_SIZE_FAIL,
  GET_CADENAS_PUREZA_SUCCESS,
  GET_CADENAS_PUREZA_FAIL,
  GET_CADENAS_PESONETO_SUCCESS,
  GET_CADENAS_PESONETO_FAIL,
  GET_CADENAS_PRECIOUNIDAD_SUCCESS,
  GET_CADENAS_PRECIOUNIDAD_FAIL,
  GET_SEARCH_CADENA_SUCCESS,
  GET_SEARCH_CADENA_FAIL,
} from "redux/actions/Cadenas/types";

const initialState = {
  cadenas: null,
  cadena: null,
  cadenasName: null,
  cadenasSize: null,
  cadenasPureza: null,
  cadenasPeso: null,
  cadenasPrecio: null,
  search_cadenas: null,
  count: null,
  next: null,
  previous: null,
};

export default function cadenas(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CADENAS_NAME_SUCCESS:
      return {
        ...state,
        cadenasName: payload.results.cadenasName,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_CADENAS_NAME_FAIL:
      return {
        ...state,
        cadenasName: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_CADENAS_SIZE_SUCCESS:
      return {
        ...state,
        cadenasSize: payload.results.cadenasSize,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_CADENAS_SIZE_FAIL:
      return {
        ...state,
        cadenasSize: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_CADENAS_PUREZA_SUCCESS:
      return {
        ...state,
        cadenasPureza: payload.results.cadenasPureza,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_CADENAS_PUREZA_FAIL:
      return {
        ...state,
        cadenasPureza: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_CADENAS_PESONETO_SUCCESS:
      return {
        ...state,
        cadenasPeso: payload.results.cadenasPeso,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_CADENAS_PESONETO_FAIL:
      return {
        ...state,
        cadenasPeso: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_CADENAS_PRECIOUNIDAD_SUCCESS:
      return {
        ...state,
        cadenasPrecio: payload.results.cadenasPrecio,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_CADENAS_PRECIOUNIDAD_FAIL:
      return {
        ...state,
        cadenasPrecio: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_SEARCH_CADENA_SUCCESS:
      return {
        ...state,
        search_cadenas: payload.results.search_cadenas,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_SEARCH_CADENA_FAIL:
      return {
        ...state,
        search_cadenas: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_CADENAS_SUCCESS:
      return {
        ...state,
        cadenas: payload.results.cadenas,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_CADENAS_FAIL:
      return {
        ...state,
        cadenas: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_CADENA_SUCCESS:
      return {
        ...state,
        cadena: payload.cadena,
      };
    case GET_CADENA_FAIL:
      return {
        ...state,
        cadena: null,
      };
    default:
      return state;
  }
}
