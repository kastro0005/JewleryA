import axios from "axios";
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
} from "./types";

export const get_cadena = (id) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Cadena/${id}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_CADENA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_CADENA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_CADENA_FAIL,
    });
  }
};

export const get_cadenas = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Cadenas`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_CADENAS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_CADENAS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_CADENAS_FAIL,
    });
  }
};

export const get_cadenas_pages = (page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Cadenas?p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_CADENAS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_CADENAS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_CADENAS_FAIL,
    });
  }
};

export const get_cadenas_name = (Name) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Cadenas/Name?name=${Name}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_CADENAS_NAME_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_CADENAS_NAME_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_CADENAS_NAME_FAIL,
    });
  }
};
export const get_cadenas_name_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Cadenas/Name?name=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_CADENAS_NAME_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_CADENAS_NAME_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_CADENAS_NAME_FAIL,
    });
  }
};

export const get_cadenas_size = (Size) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Cadenas/Size?size=${Size}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_CADENAS_SIZE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_CADENAS_SIZE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_CADENAS_SIZE_FAIL,
    });
  }
};
export const get_cadenas_size_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Cadenas/Size?size=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_CADENAS_SIZE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_CADENAS_SIZE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_CADENAS_SIZE_FAIL,
    });
  }
};

export const get_cadenas_pureza = (Pureza) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Cadenas/Purity?pureza=${Pureza}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_CADENAS_PUREZA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_CADENAS_PUREZA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_CADENAS_PUREZA_FAIL,
    });
  }
};
export const get_cadenas_pureza_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Cadenas/Purity?pureza=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_CADENAS_PUREZA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_CADENAS_PUREZA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_CADENAS_PUREZA_FAIL,
    });
  }
};

export const get_cadenas_pesoneto = (Peso) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Cadenas/Weight?peso_neto=${Peso}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_CADENAS_PESONETO_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_CADENAS_PESONETO_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_CADENAS_PESONETO_FAIL,
    });
  }
};
export const get_cadenas_pesoneto_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Cadenas/Weight?peso_neto=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_CADENAS_PESONETO_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_CADENAS_PESONETO_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_CADENAS_PESONETO_FAIL,
    });
  }
};

export const get_cadenas_preciounidad = (Precio) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Cadenas/Price?precio_unidad=${Precio}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_CADENAS_PRECIOUNIDAD_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_CADENAS_PRECIOUNIDAD_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_CADENAS_PRECIOUNIDAD_FAIL,
    });
  }
};
export const get_cadenas_preciounidad_page =
  (Prod, page) => async (dispatch) => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/app/Cadenas/Price?precio_unidad=${Prod}&p=${page}`,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: GET_CADENAS_PRECIOUNIDAD_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_CADENAS_PRECIOUNIDAD_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: GET_CADENAS_PRECIOUNIDAD_FAIL,
      });
    }
  };

export const get_search_cadenas = (searchTerm) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Cadenas/Search?s=${searchTerm}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_SEARCH_CADENA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_SEARCH_CADENA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_CADENA_FAIL,
    });
  }
};
export const get_search_cadenas_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Cadenas/Search?p=${page}&s=${Prod}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_SEARCH_CADENA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_SEARCH_CADENA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_CADENA_FAIL,
    });
  }
};
