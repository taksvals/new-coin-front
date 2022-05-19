import axios from 'axios';
import {
    GET_PRICES
} from './types';

const axiosIns = axios.create({ baseURL: 'https://thawing-castle-92515.herokuapp.com' });

// Get prices
export const getPrices = () => async dispatch => {
    try {
        const res = await axiosIns.get('/api/prices');

        dispatch({
            type: GET_PRICES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PRICES_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};