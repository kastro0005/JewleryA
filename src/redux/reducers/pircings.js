import {
  GET_PIRCINGS_SUCCESS,
  GET_PIRCINGS_FAIL,
  GET_PIRCING_FAIL,
  GET_PIRCING_SUCCESS,
  GET_PIRCINGS_NAME_SUCCESS,
  GET_PIRCINGS_NAME_FAIL,
  GET_PIRCINGS_SIZE_SUCCESS,
  GET_PIRCINGS_SIZE_FAIL,
  GET_PIRCINGS_PUREZA_SUCCESS,
  GET_PIRCINGS_PUREZA_FAIL,
  GET_PIRCINGS_PESONETO_SUCCESS,
  GET_PIRCINGS_PESONETO_FAIL,
  GET_PIRCINGS_PRECIOUNIDAD_SUCCESS,
  GET_PIRCINGS_PRECIOUNIDAD_FAIL,
  GET_SEARCH_PIRCING_SUCCESS,
  GET_SEARCH_PIRCING_FAIL,
} from "redux/actions/Pircings/types";

const initialState = {
  pircings: null,
  pircing: null,
  pircingsName: null,
  pircingsSize: null,
  pircingsPureza: null,
  pircingsPeso: null,
  pircingsPrecio: null,
  search_pircings: null,
  count: null,
  next: null,
  previous: null,
};

export default function pircings(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PIRCINGS_NAME_SUCCESS:
      return {
        ...state,
        pircingsName: payload.results.pircingsName,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_PIRCINGS_NAME_FAIL:
      return {
        ...state,
        pircingsName: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_PIRCINGS_SIZE_SUCCESS:
      return {
        ...state,
        pircingsSize: payload.results.pircingsSize,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_PIRCINGS_SIZE_FAIL:
      return {
        ...state,
        pircingsSize: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_PIRCINGS_PUREZA_SUCCESS:
      return {
        ...state,
        pircingsPureza: payload.results.pircingsPureza,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_PIRCINGS_PUREZA_FAIL:
      return {
        ...state,
        pircingsPureza: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_PIRCINGS_PESONETO_SUCCESS:
      return {
        ...state,
        pircingsPeso: payload.results.pircingsPeso,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_PIRCINGS_PESONETO_FAIL:
      return {
        ...state,
        pircingsPeso: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_PIRCINGS_PRECIOUNIDAD_SUCCESS:
      return {
        ...state,
        pircingsPrecio: payload.results.pircingsPrecio,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_PIRCINGS_PRECIOUNIDAD_FAIL:
      return {
        ...state,
        pircingsPrecio: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_SEARCH_PIRCING_SUCCESS:
      return {
        ...state,
        search_pircings: payload.results.search_pircings,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_SEARCH_PIRCING_FAIL:
      return {
        ...state,
        search_pircings: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_PIRCINGS_SUCCESS:
      return {
        ...state,
        pircings: payload.results.pircings,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_PIRCINGS_FAIL:
      return {
        ...state,
        pircings: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_PIRCING_SUCCESS:
      return {
        ...state,
        pircing: payload.pircing,
      };
    case GET_PIRCING_FAIL:
      return {
        ...state,
        pircing: null,
      };
    default:
      return state;
  }
}
