import * as Actions from '../../api/index'
export const SIGN_IN_LOADING = 'SIGN_IN_LOADING'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR'
export const SIGN_UP_LOADING = 'SIGN_UP_LOADING'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR'

export const signInWithGoogle = () => {
    return async function (dispatch) {
        try {
            dispatch({ type: SIGN_IN_LOADING })
            const response = await Actions.signInGoogle()
            if (response) {
                dispatch({
                    type: SIGN_IN_SUCCESS,
                    payload: response,
                })
            } else {
                dispatch({ type: SIGN_IN_ERROR })
            }
        } catch (error) {
            dispatch({
                type: SIGN_IN_ERROR,
                payload: { message: 'Some error while fetching data' },
            })
            console.log(error)
        }
    }
}

export const signUp = (email, password) => {
    return async function (dispatch) {
        try {
            dispatch({ type: SIGN_UP_LOADING })
            const response = await Actions.signUp(email, password)
            if (response) {
                dispatch({
                    type: SIGN_UP_SUCCESS,
                    payload: response,
                })
            } else {
                dispatch({ type: SIGN_UP_ERROR })
            }
        } catch (error) {
            dispatch({
                type: SIGN_UP_ERROR,
                payload: { message: 'Some error while fetching data' },
            })
            console.log(error)
        }
    }
}