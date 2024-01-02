import axios from "axios";
import {
  GET_BRAZALETES_SUCCESS,
  GET_BRAZALETES_FAIL,
  GET_BRAZALETE_FAIL,
  GET_BRAZALETE_SUCCESS,
  GET_BRAZALETES_NAME_SUCCESS,
  GET_BRAZALETES_NAME_FAIL,
  GET_BRAZALETES_SIZE_SUCCESS,
  GET_BRAZALETES_SIZE_FAIL,
  GET_BRAZALETES_PUREZA_SUCCESS,
  GET_BRAZALETES_PUREZA_FAIL,
  GET_BRAZALETES_PESONETO_SUCCESS,
  GET_BRAZALETES_PESONETO_FAIL,
  GET_BRAZALETES_PRECIOUNIDAD_SUCCESS,
  GET_BRAZALETES_PRECIOUNIDAD_FAIL,
  GET_SEARCH_BRAZALETE_SUCCESS,
  GET_SEARCH_BRAZALETE_FAIL,
} from "./types";

export const get_brazalete = (id) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Brazalete/${id}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BRAZALETE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BRAZALETE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BRAZALETE_FAIL,
    });
  }
};

export const get_brazaletes = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Brazaletes`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BRAZALETES_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BRAZALETES_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BRAZALETES_FAIL,
    });
  }
};

export const get_brazaletes_pages = (page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Brazaletes?p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BRAZALETES_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BRAZALETES_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BRAZALETES_FAIL,
    });
  }
};

export const get_brazaletes_name = (Name) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Brazaletes/Name?name=${Name}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BRAZALETES_NAME_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BRAZALETES_NAME_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BRAZALETES_NAME_FAIL,
    });
  }
};
export const get_brazaletes_name_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Brazaletes/Name?name=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BRAZALETES_NAME_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BRAZALETES_NAME_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BRAZALETES_NAME_FAIL,
    });
  }
};

export const get_brazaletes_size = (Size) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Brazaletes/Size?size=${Size}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BRAZALETES_SIZE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BRAZALETES_SIZE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BRAZALETES_SIZE_FAIL,
    });
  }
};
export const get_brazaletes_size_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Brazaletes/Size?size=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BRAZALETES_SIZE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BRAZALETES_SIZE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BRAZALETES_SIZE_FAIL,
    });
  }
};

export const get_brazaletes_pureza = (Pureza) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Brazaletes/Purity?pureza=${Pureza}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BRAZALETES_PUREZA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BRAZALETES_PUREZA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BRAZALETES_PUREZA_FAIL,
    });
  }
};
export const get_brazaletes_pureza_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Brazaletes/Purity?pureza=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BRAZALETES_PUREZA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BRAZALETES_PUREZA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BRAZALETES_PUREZA_FAIL,
    });
  }
};

export const get_brazaletes_pesoneto = (Peso) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Brazaletes/Weight?peso_neto=${Peso}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BRAZALETES_PESONETO_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BRAZALETES_PESONETO_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BRAZALETES_PESONETO_FAIL,
    });
  }
};
export const get_brazaletes_pesoneto_page =
  (Prod, page) => async (dispatch) => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/app/Brazaletes/Weight?peso_neto=${Prod}&p=${page}`,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: GET_BRAZALETES_PESONETO_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_BRAZALETES_PESONETO_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: GET_BRAZALETES_PESONETO_FAIL,
      });
    }
  };

export const get_brazaletes_preciounidad = (Precio) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Brazaletes/Price?precio_unidad=${Precio}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BRAZALETES_PRECIOUNIDAD_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BRAZALETES_PRECIOUNIDAD_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BRAZALETES_PRECIOUNIDAD_FAIL,
    });
  }
};
export const get_brazaletes_preciounidad_page =
  (Prod, page) => async (dispatch) => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/app/Brazaletes/Price?precio_unidad=${Prod}&p=${page}`,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: GET_BRAZALETES_PRECIOUNIDAD_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_BRAZALETES_PRECIOUNIDAD_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: GET_BRAZALETES_PRECIOUNIDAD_FAIL,
      });
    }
  };

export const get_search_brazaletes = (searchTerm) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Brazaletes/Search?s=${searchTerm}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_SEARCH_BRAZALETE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_SEARCH_BRAZALETE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_BRAZALETE_FAIL,
    });
  }
};
export const get_search_brazaletes_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Brazaletes/Search?p=${page}&s=${Prod}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_SEARCH_BRAZALETE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_SEARCH_BRAZALETE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_BRAZALETE_FAIL,
    });
  }
};
