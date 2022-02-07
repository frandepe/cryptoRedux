// initial state

const defaultValue = {
  cryptos: [],
  crypto: [],
};

// Action types

const GET_CRYPTOS = "GET_CRYPTOS";
const GET_CRYPTO = "GET_CRYPTO";

// Reducer

export default function CriptoReducer(state = defaultValue, { type, payload }) {
  switch (type) {
    case GET_CRYPTOS:
      return { ...state, cryptos: payload.cryptos };
    case GET_CRYPTO:
      return { ...state, crypto: payload.crypto };
    default:
      return defaultValue;
  }
}

// Actions

export const getCriptoActions = (pages) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${pages}&sparkline=false`
    );
    const json = await response.json();
    dispatch({
      type: GET_CRYPTOS,
      payload: { cryptos: json },
    });
  } catch (error) {
    alert(error);
  }
};

export const getIdActions = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    const json = await response.json();

    dispatch({
      type: GET_CRYPTO,
      payload: { crypto: json },
    });
  } catch (error) {
    alert(error);
  }
};
