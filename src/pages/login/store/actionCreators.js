import axios from "axios";
import { constants } from "./index";

const loginAction = (value) => ({
  type: constants.IS_LOGIN,
  value,
});

export const login = (account, password) => {
  return (dispatch) => {
    axios
      .get(`/api/login.json?account=${account}&password=${password}`)
      .then((res) => {
        console.log(res);
        if (res.data.code) {
          dispatch(loginAction(res.data.data));
        }
      });
  };
};
export const logout = () => ({
  type: constants.IS_LOGOUT,
  value: false,
});
