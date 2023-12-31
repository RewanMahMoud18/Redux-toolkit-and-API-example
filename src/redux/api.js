import { errorUser, startUser, successUser } from "./Userslice";
import axios from "axios";
export const addUser = async (user, dispatch) => {
  dispatch(startUser());

  try {
    const res = await axios.post("http://localhost:5000/api/usres", user);
    dispatch(successUser(res.data));
  } catch (err) {
    dispatch(errorUser());
  }
};
