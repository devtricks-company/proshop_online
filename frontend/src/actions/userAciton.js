import {
    USER_INFO_FAIL,
    USER_INFO_LOGOUT,
    USER_INFO_REQUEST,
    USRE_INFO_SUCCESS
} from '../constant/userInfo';
import axios from 'axios';


export const userLoginAction = (email,password) => async (dispatch) => {
    try {
        dispatch({
            type:USER_INFO_REQUEST
        });

        const {data} = await axios.post('/api/user/login',{email,password},{
            headers:{
                'Content-Type':'application/json'
            }
        });

        dispatch({
            type:USRE_INFO_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo',JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_INFO_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({
        type:USER_INFO_LOGOUT
    })
}