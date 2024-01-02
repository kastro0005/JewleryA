import axios from "axios";
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
} from "./types";

export const get_anillo = (id) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Anillo/${id}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ANILLO_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ANILLO_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ANILLO_FAIL,
    });
  }
};

export const get_anillos = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Anillos`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ANILLOS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ANILLOS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ANILLOS_FAIL,
    });
  }
};

export const get_anillos_pages = (page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Anillos?p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ANILLOS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ANILLOS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ANILLOS_FAIL,
    });
  }
};

export const get_anillos_name = (Name) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Anillos/Name?name=${Name}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ANILLOS_NAME_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ANILLOS_NAME_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ANILLOS_NAME_FAIL,
    });
  }
};
export const get_anillos_name_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Anillos/Name?name=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ANILLOS_NAME_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ANILLOS_NAME_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ANILLOS_NAME_FAIL,
    });
  }
};

export const get_anillos_size = (Size) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Anillos/Size?size=${Size}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ANILLOS_SIZE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ANILLOS_SIZE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ANILLOS_SIZE_FAIL,
    });
  }
};
export const get_anillos_size_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Anillos/Size?size=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ANILLOS_SIZE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ANILLOS_SIZE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ANILLOS_SIZE_FAIL,
    });
  }
};

export const get_anillos_pureza = (Pureza) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Anillos/Purity?pureza=${Pureza}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ANILLOS_PUREZA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ANILLOS_PUREZA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ANILLOS_PUREZA_FAIL,
    });
  }
};
export const get_anillos_pureza_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Anillos/Purity?pureza=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ANILLOS_PUREZA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ANILLOS_PUREZA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ANILLOS_PUREZA_FAIL,
    });
  }
};

export const get_anillos_pesoneto = (Peso) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Anillos/Weight?peso_neto=${Peso}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ANILLOS_PESONETO_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ANILLOS_PESONETO_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ANILLOS_PESONETO_FAIL,
    });
  }
};
export const get_anillos_pesoneto_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Anillos/Weight?peso_neto=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ANILLOS_PESONETO_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ANILLOS_PESONETO_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ANILLOS_PESONETO_FAIL,
    });
  }
};

export const get_anillos_preciounidad = (Precio) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Anillos/Price?precio_unidad=${Precio}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ANILLOS_PRECIOUNIDAD_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ANILLOS_PRECIOUNIDAD_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ANILLOS_PRECIOUNIDAD_FAIL,
    });
  }
};
export const get_anillos_preciounidad_page =
  (Prod, page) => async (dispatch) => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/app/Anillos/Price?precio_unidad=${Prod}&p=${page}`,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: GET_ANILLOS_PRECIOUNIDAD_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_ANILLOS_PRECIOUNIDAD_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: GET_ANILLOS_PRECIOUNIDAD_FAIL,
      });
    }
  };

export const get_search_anillos = (searchTerm) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Anillos/Search?s=${searchTerm}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_SEARCH_ANILLO_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_SEARCH_ANILLO_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_ANILLO_FAIL,
    });
  }
};
export const get_search_anillos_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Anillos/Search?p=${page}&s=${Prod}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_SEARCH_ANILLO_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_SEARCH_ANILLO_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_ANILLO_FAIL,
    });
  }
};
