
// initial state

const defaultValue = {
    crypto: [],
}

// Action types

const GET_CRYPTO = 'GET_CRYPTO';


// Reducer

export default function IdReducer(state = defaultValue, {type, payload}) {
    switch(type){
        case GET_CRYPTO: return {...state, crypto: payload.crypto};
        default: return defaultValue;
    }
}

// Actions

export const getIdActions = (id) => async dispatch => {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        const json = await response.json();
        console.log(json);
        dispatch({
            type: GET_CRYPTO,
            payload: { crypto: json }
        })
    } catch (error) {
        alert(error);
    }
}

