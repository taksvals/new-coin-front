import axios from 'axios';
import { setAlert } from './alert';

import {
    CLEAR_PROFILE,
    GET_PROFILE,
    PROFILE_ERROR,
    ACCOUNT_DELETED,
    UPDATE_CRYPTO,
    CRYPTO_ERROR
} from './types';

const axiosIns = axios.create({ baseURL: 'https://thawing-castle-92515.herokuapp.com' });

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
    try {
        const res = await axiosIns.get('/api/profile/me');
    
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

//  Create or update profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axiosIns.post('/api/profile', formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

        if(!edit) {
            history.push('/dashboard');
        }
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// Delete account and profile
export const deleteAccount = () => async dispatch => {
    if(window.confirm('Are you sure? This can NOT be undone!')) {
        try {
            await axiosIns.delete('/api/profile');
    
            dispatch({ type: CLEAR_PROFILE });
            dispatch({ type: ACCOUNT_DELETED });
    
            dispatch(setAlert('Your account has been permanantly deleted'));
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
    }
};

// Add crypto
export const addCrypto = crypto => async dispatch => {
    try {
        const res = await axiosIns.put(`/api/profile/add/${crypto}`);

        dispatch({
            type: UPDATE_CRYPTO,
            payload: crypto
        });
    } catch (err) {
        dispatch({
            type: CRYPTO_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Remove crypto
export const removeCrypto = crypto => async dispatch => {
    try {
        const res = await axiosIns.put(`/api/profile/remove/${crypto}`);

        dispatch({
            type: UPDATE_CRYPTO,
            payload: crypto
        });
    } catch (err) {
        dispatch({
            type: CRYPTO_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
