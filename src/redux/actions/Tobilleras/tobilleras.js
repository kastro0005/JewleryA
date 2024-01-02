import axios from "axios";
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
} from "./types";

export const get_tobillera = (id) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Tobillera/${id}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_TOBILLERA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_TOBILLERA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_TOBILLERA_FAIL,
    });
  }
};

export const get_tobilleras = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Tobilleras`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_TOBILLERAS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_TOBILLERAS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_TOBILLERAS_FAIL,
    });
  }
};

export const get_tobilleras_pages = (page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Tobilleras?p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_TOBILLERAS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_TOBILLERAS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_TOBILLERAS_FAIL,
    });
  }
};

export const get_tobilleras_name = (Name) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Tobilleras/Name?name=${Name}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_TOBILLERAS_NAME_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_TOBILLERAS_NAME_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_TOBILLERAS_NAME_FAIL,
    });
  }
};
export const get_tobilleras_name_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Tobilleras/Name?name=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_TOBILLERAS_NAME_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_TOBILLERAS_NAME_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_TOBILLERAS_NAME_FAIL,
    });
  }
};

export const get_tobilleras_size = (Size) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Tobilleras/Size?size=${Size}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_TOBILLERAS_SIZE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_TOBILLERAS_SIZE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_TOBILLERAS_SIZE_FAIL,
    });
  }
};
export const get_tobilleras_size_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Tobilleras/Size?size=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_TOBILLERAS_SIZE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_TOBILLERAS_SIZE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_TOBILLERAS_SIZE_FAIL,
    });
  }
};

export const get_tobilleras_pureza = (Pureza) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Tobilleras/Purity?pureza=${Pureza}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_TOBILLERAS_PUREZA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_TOBILLERAS_PUREZA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_TOBILLERAS_PUREZA_FAIL,
    });
  }
};
export const get_tobilleras_pureza_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Tobilleras/Purity?pureza=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_TOBILLERAS_PUREZA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_TOBILLERAS_PUREZA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_TOBILLERAS_PUREZA_FAIL,
    });
  }
};

export const get_tobilleras_pesoneto = (Peso) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Tobilleras/Weight?peso_neto=${Peso}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_TOBILLERAS_PESONETO_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_TOBILLERAS_PESONETO_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_TOBILLERAS_PESONETO_FAIL,
    });
  }
};
export const get_tobilleras_pesoneto_page =
  (Prod, page) => async (dispatch) => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/app/Tobilleras/Weight?peso_neto=${Prod}&p=${page}`,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: GET_TOBILLERAS_PESONETO_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_TOBILLERAS_PESONETO_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: GET_TOBILLERAS_PESONETO_FAIL,
      });
    }
  };

export const get_tobilleras_preciounidad = (Precio) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Tobilleras/Price?precio_unidad=${Precio}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_TOBILLERAS_PRECIOUNIDAD_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_TOBILLERAS_PRECIOUNIDAD_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_TOBILLERAS_PRECIOUNIDAD_FAIL,
    });
  }
};
export const get_tobilleras_preciounidad_page =
  (Prod, page) => async (dispatch) => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/app/Tobilleras/Price?precio_unidad=${Prod}&p=${page}`,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: GET_TOBILLERAS_PRECIOUNIDAD_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_TOBILLERAS_PRECIOUNIDAD_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: GET_TOBILLERAS_PRECIOUNIDAD_FAIL,
      });
    }
  };

export const get_search_tobilleras = (searchTerm) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Tobilleras/Search?s=${searchTerm}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_SEARCH_TOBILLERA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_SEARCH_TOBILLERA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_TOBILLERA_FAIL,
    });
  }
};
export const get_search_tobilleras_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Tobilleras/Search?p=${page}&s=${Prod}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_SEARCH_TOBILLERA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_SEARCH_TOBILLERA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_TOBILLERA_FAIL,
    });
  }
};
