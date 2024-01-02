import {
  GET_TOBILLERAS_SUCCESS,
  GET_TOBILLERAS_FAIL,
  GET_TOBILLERA_FAIL,
  GET_TOBILLERA_SUCCESS,
  GET_TOBILLERAS_NAME_SUCCESS,
  GET_TOBILLERAS_NAME_FAIL,
  GET_TOBILLERAS_SIZE_SUCCESS,
  GET_TOBILLERAS_SIZE_FAIL,
  GET_TOBILLERAS_PUREZA_SUCCESS,
  GET_TOBILLERAS_PUREZA_FAIL,
  GET_TOBILLERAS_PESONETO_SUCCESS,
  GET_TOBILLERAS_PESONETO_FAIL,
  GET_TOBILLERAS_PRECIOUNIDAD_SUCCESS,
  GET_TOBILLERAS_PRECIOUNIDAD_FAIL,
  GET_SEARCH_TOBILLERA_SUCCESS,
  GET_SEARCH_TOBILLERA_FAIL,
} from "redux/actions/Tobilleras/types";

const initialState = {
  tobilleras: null,
  tobillera: null,
  tobillerasName: null,
  tobillerasSize: null,
  tobillerasPureza: null,
  tobillerasPeso: null,
  tobillerasPrecio: null,
  search_tobilleras: null,
  count: null,
  next: null,
  previous: null,
};

export default function tobilleras(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TOBILLERAS_NAME_SUCCESS:
      return {
        ...state,
        tobillerasName: payload.results.tobillerasName,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_TOBILLERAS_NAME_FAIL:
      return {
        ...state,
        tobillerasName: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_TOBILLERAS_SIZE_SUCCESS:
      return {
        ...state,
        tobillerasSize: payload.results.tobillerasSize,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_TOBILLERAS_SIZE_FAIL:
      return {
        ...state,
        tobillerasSize: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_TOBILLERAS_PUREZA_SUCCESS:
      return {
        ...state,
        tobillerasPureza: payload.results.tobillerasPureza,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_TOBILLERAS_PUREZA_FAIL:
      return {
        ...state,
        tobillerasPureza: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_TOBILLERAS_PESONETO_SUCCESS:
      return {
        ...state,
        tobillerasPeso: payload.results.tobillerasPeso,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_TOBILLERAS_PESONETO_FAIL:
      return {
        ...state,
        tobillerasPeso: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_TOBILLERAS_PRECIOUNIDAD_SUCCESS:
      return {
        ...state,
        tobillerasPrecio: payload.results.tobillerasPrecio,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_TOBILLERAS_PRECIOUNIDAD_FAIL:
      return {
        ...state,
        tobillerasPrecio: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_SEARCH_TOBILLERA_SUCCESS:
      return {
        ...state,
        search_tobilleras: payload.results.search_tobilleras,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_SEARCH_TOBILLERA_FAIL:
      return {
        ...state,
        search_tobilleras: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_TOBILLERAS_SUCCESS:
      return {
        ...state,
        tobilleras: payload.results.tobilleras,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_TOBILLERAS_FAIL:
      return {
        ...state,
        tobilleras: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_TOBILLERA_SUCCESS:
      return {
        ...state,
        tobillera: payload.tobillera,
      };
    case GET_TOBILLERA_FAIL:
      return {
        ...state,
        tobillera: null,
      };
    default:
      return state;
  }
}
