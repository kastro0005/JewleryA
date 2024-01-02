import axios from "axios";
import {
  GET_DIJES_SUCCESS,
  GET_DIJES_FAIL,
  GET_DIJE_FAIL,
  GET_DIJE_SUCCESS,
  GET_DIJES_NAME_SUCCESS,
  GET_DIJES_NAME_FAIL,
  GET_DIJES_SIZE_SUCCESS,
  GET_DIJES_SIZE_FAIL,
  GET_DIJES_PUREZA_SUCCESS,
  GET_DIJES_PUREZA_FAIL,
  GET_DIJES_PESONETO_SUCCESS,
  GET_DIJES_PESONETO_FAIL,
  GET_DIJES_PRECIOUNIDAD_SUCCESS,
  GET_DIJES_PRECIOUNIDAD_FAIL,
  GET_SEARCH_DIJE_SUCCESS,
  GET_SEARCH_DIJE_FAIL,
} from "./types";

export const get_dije = (id) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Dije/${id}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_DIJE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_DIJE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_DIJE_FAIL,
    });
  }
};

export const get_dijes = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Dijes`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_DIJES_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_DIJES_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_DIJES_FAIL,
    });
  }
};

export const get_dijes_pages = (page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Dijes?p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_DIJES_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_DIJES_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_DIJES_FAIL,
    });
  }
};

export const get_dijes_name = (Name) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Dijes/Name?name=${Name}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_DIJES_NAME_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_DIJES_NAME_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_DIJES_NAME_FAIL,
    });
  }
};
export const get_dijes_name_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Dijes/Name?name=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_DIJES_NAME_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_DIJES_NAME_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_DIJES_NAME_FAIL,
    });
  }
};

export const get_dijes_size = (Size) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Dijes/Size?size=${Size}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_DIJES_SIZE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_DIJES_SIZE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_DIJES_SIZE_FAIL,
    });
  }
};
export const get_dijes_size_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Dijes/Size?size=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_DIJES_SIZE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_DIJES_SIZE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_DIJES_SIZE_FAIL,
    });
  }
};

export const get_dijes_pureza = (Pureza) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Dijes/Purity?pureza=${Pureza}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_DIJES_PUREZA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_DIJES_PUREZA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_DIJES_PUREZA_FAIL,
    });
  }
};
export const get_dijes_pureza_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Dijes/Purity?pureza=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_DIJES_PUREZA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_DIJES_PUREZA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_DIJES_PUREZA_FAIL,
    });
  }
};

export const get_dijes_pesoneto = (Peso) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Dijes/Weight?peso_neto=${Peso}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_DIJES_PESONETO_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_DIJES_PESONETO_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_DIJES_PESONETO_FAIL,
    });
  }
};
export const get_dijes_pesoneto_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Dijes/Weight?peso_neto=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_DIJES_PESONETO_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_DIJES_PESONETO_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_DIJES_PESONETO_FAIL,
    });
  }
};

export const get_dijes_preciounidad = (Precio) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Dijes/Price?precio_unidad=${Precio}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_DIJES_PRECIOUNIDAD_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_DIJES_PRECIOUNIDAD_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_DIJES_PRECIOUNIDAD_FAIL,
    });
  }
};
export const get_dijes_preciounidad_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Dijes/Price?precio_unidad=${Prod}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_DIJES_PRECIOUNIDAD_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_DIJES_PRECIOUNIDAD_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_DIJES_PRECIOUNIDAD_FAIL,
    });
  }
};

export const get_search_dijes = (searchTerm) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Dijes/Search?s=${searchTerm}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_SEARCH_DIJE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_SEARCH_DIJE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_DIJE_FAIL,
    });
  }
};
export const get_search_dijes_page = (Prod, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/app/Dijes/Search?p=${page}&s=${Prod}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_SEARCH_DIJE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_SEARCH_DIJE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_DIJE_FAIL,
    });
  }
};
