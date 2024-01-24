import toast from "react-hot-toast";
// import AxiosInstance from "./api";
import axios from "axios";

export const getUserProfile = async ({ ...params }) => {
  const url = `/user/get-user`;
  return await axios.get(url, { params });
};
