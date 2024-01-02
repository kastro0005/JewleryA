import axios from "axios";
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
} from "./types";

export const get_arete = (id) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Arete/${id}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ARETE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ARETE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ARETE_FAIL,
    });
  }
};

export const get_aretes = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Aretes`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ARETES_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ARETES_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ARETES_FAIL,
    });
  }
};

export const get_aretes_pages = (page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Aretes?p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ARETES_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ARETES_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ARETES_FAIL,
    });
  }
};

export const get_aretes_name = (Name) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Aretes/Name?name=${Name}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ARETES_NAME_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ARETES_NAME_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ARETES_NAME_FAIL,
    });
  }
};
export const get_aretes_name_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Aretes/Name?name=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ARETES_NAME_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ARETES_NAME_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ARETES_NAME_FAIL,
    });
  }
};

export const get_aretes_size = (Size) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Aretes/Size?size=${Size}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ARETES_SIZE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ARETES_SIZE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ARETES_SIZE_FAIL,
    });
  }
};
export const get_aretes_size_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Aretes/Size?size=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ARETES_SIZE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ARETES_SIZE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ARETES_SIZE_FAIL,
    });
  }
};

export const get_aretes_pureza = (Pureza) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Aretes/Purity?pureza=${Pureza}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ARETES_PUREZA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ARETES_PUREZA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ARETES_PUREZA_FAIL,
    });
  }
};
export const get_aretes_pureza_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Aretes/Purity?pureza=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ARETES_PUREZA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ARETES_PUREZA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ARETES_PUREZA_FAIL,
    });
  }
};

export const get_aretes_pesoneto = (Peso) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Aretes/Weight?peso_neto=${Peso}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ARETES_PESONETO_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ARETES_PESONETO_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ARETES_PESONETO_FAIL,
    });
  }
};
export const get_aretes_pesoneto_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Aretes/Weight?peso_neto=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ARETES_PESONETO_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ARETES_PESONETO_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ARETES_PESONETO_FAIL,
    });
  }
};

export const get_aretes_preciounidad = (Precio) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Aretes/Price?precio_unidad=${Precio}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ARETES_PRECIOUNIDAD_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ARETES_PRECIOUNIDAD_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ARETES_PRECIOUNIDAD_FAIL,
    });
  }
};
export const get_aretes_preciounidad_page =
  (Prod, page) => async (dispatch) => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/app/Aretes/Price?precio_unidad=${Prod}&p=${page}`,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: GET_ARETES_PRECIOUNIDAD_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_ARETES_PRECIOUNIDAD_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: GET_ARETES_PRECIOUNIDAD_FAIL,
      });
    }
  };

export const get_search_aretes = (searchTerm) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Aretes/Search?s=${searchTerm}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_SEARCH_ARETE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_SEARCH_ARETE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_ARETE_FAIL,
    });
  }
};
export const get_search_aretes_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Aretes/Search?p=${page}&s=${Prod}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_SEARCH_ARETE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_SEARCH_ARETE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_ARETE_FAIL,
    });
  }
};
