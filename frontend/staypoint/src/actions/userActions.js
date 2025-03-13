import axios from "axios";
import { USER_LOGIN_REQUEST, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userConstants";

export const signin = (fname, lname, email, password) => async(dispatch)=>{
    try{
        dispatch({
            type: USER_SIGNIN_REQUEST
        })

        const config={
            headers:{
                'Content-type' : 'application/json'
            }
        }

        const {data} = await axios.post('/api/users/signin/',
            {
                'fname' : fname,
                'lname' : lname,
                'email' : email,
                'password' : password
            }, config
        )
        dispatch({
            type : USER_SIGNIN_SUCCESS,
            payload: data
        })
    
        localStorage.setItem('userInfo', JSON.stringify(data))
    }
    catch(error){
        dispatch({
            type : USER_SIGNIN_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}

export const login = (email, password) => async(dispatch)=>{
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config={
            headers:{
                'Content-type' : 'application/json'
            }
        }

        const {data} = await axios.post('/api/users/login/',
            {
                'username': email,
                'password' : password
            }, config
        )
        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload: data
        })
    
        localStorage.setItem('userInfo', JSON.stringify(data))
    }
    catch(error){
        dispatch({
            type : USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}