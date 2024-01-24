import toast from "react-hot-toast";
// import AxiosInstance from "./api";
import axios from "axios";

export const getUserProfile = async ({ ...params }) => {
  const url = `${process.env.REACT_APP_API_URL}/user/get-user`;
  toast.success(url);
  return await axios.get(url, { params });
};
