import axios from "axios";
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
} from "./types";

export const get_pircing = (id) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Pircing/${id}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_PIRCING_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_PIRCING_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_PIRCING_FAIL,
    });
  }
};

export const get_pircings = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Pircings`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_PIRCINGS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_PIRCINGS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_PIRCINGS_FAIL,
    });
  }
};

export const get_pircings_pages = (page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Pircings?p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_PIRCINGS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_PIRCINGS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_PIRCINGS_FAIL,
    });
  }
};

export const get_pircings_name = (Name) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Pircings/Name?name=${Name}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_PIRCINGS_NAME_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_PIRCINGS_NAME_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_PIRCINGS_NAME_FAIL,
    });
  }
};
export const get_pircings_name_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Pircings/Name?name=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_PIRCINGS_NAME_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_PIRCINGS_NAME_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_PIRCINGS_NAME_FAIL,
    });
  }
};

export const get_pircings_size = (Size) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Pircings/Size?size=${Size}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_PIRCINGS_SIZE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_PIRCINGS_SIZE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_PIRCINGS_SIZE_FAIL,
    });
  }
};
export const get_pircings_size_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Pircings/Size?size=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_PIRCINGS_SIZE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_PIRCINGS_SIZE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_PIRCINGS_SIZE_FAIL,
    });
  }
};

export const get_pircings_pureza = (Pureza) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Pircings/Purity?pureza=${Pureza}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_PIRCINGS_PUREZA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_PIRCINGS_PUREZA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_PIRCINGS_PUREZA_FAIL,
    });
  }
};
export const get_pircings_pureza_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Pircings/Purity?pureza=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_PIRCINGS_PUREZA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_PIRCINGS_PUREZA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_PIRCINGS_PUREZA_FAIL,
    });
  }
};

export const get_pircings_pesoneto = (Peso) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Pircings/Weight?peso_neto=${Peso}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_PIRCINGS_PESONETO_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_PIRCINGS_PESONETO_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_PIRCINGS_PESONETO_FAIL,
    });
  }
};
export const get_pircings_pesoneto_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Pircings/Weight?peso_neto=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_PIRCINGS_PESONETO_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_PIRCINGS_PESONETO_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_PIRCINGS_PESONETO_FAIL,
    });
  }
};

export const get_pircings_preciounidad = (Precio) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Pircings/Price?precio_unidad=${Precio}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_PIRCINGS_PRECIOUNIDAD_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_PIRCINGS_PRECIOUNIDAD_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_PIRCINGS_PRECIOUNIDAD_FAIL,
    });
  }
};
export const get_pircings_preciounidad_page =
  (Prod, page) => async (dispatch) => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/app/Pircings/Price?precio_unidad=${Prod}&p=${page}`,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: GET_PIRCINGS_PRECIOUNIDAD_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_PIRCINGS_PRECIOUNIDAD_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: GET_PIRCINGS_PRECIOUNIDAD_FAIL,
      });
    }
  };

export const get_search_pircings = (searchTerm) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Pircings/Search?s=${searchTerm}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_SEARCH_PIRCING_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_SEARCH_PIRCING_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_PIRCING_FAIL,
    });
  }
};
export const get_search_pircings_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Pircings/Search?p=${page}&s=${Prod}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_SEARCH_PIRCING_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_SEARCH_PIRCING_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_PIRCING_FAIL,
    });
  }
};
