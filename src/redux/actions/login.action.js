import { ACTION_TYPES, BASE_URL,OTP_BASE_URL,ACCESS_TOKEN_OTP } from "../../components/constants/actionTypes";
import axios from 'axios';

// Action creators

const otpRequest = () => ({ type: ACTION_TYPES.OTP_REQUESTED });
const otpSuccess = (data) => ({ type: ACTION_TYPES.OTP_SUCCESS, payload: data });
const otpFailure = (error) => ({ type: ACTION_TYPES.OTP_FAILED, payload: error });


export const sendOTP = (params, navigate) => {
  return async (dispatch) => {
    dispatch(otpRequest());
    try { 
      const response = await axios.post(`${OTP_BASE_URL}`,
        params, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN_OTP}`,
          Accept: 'application/json',
        },
      }
      );
      const data = response.data;
      dispatch(otpSuccess(data));
      return data; // Ensure the promise is returned

    } catch (error) {
      if (error?.response && error?.response?.status && error?.response?.status ==  401) {
        navigate('/')
      }
      dispatch(otpFailure(error));
      throw error; // Rethrow the error to propagate it in the promise chain
    }
  };
};
  