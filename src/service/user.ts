import AxiosInstance from "./api";

export const loginApi = async ({ ...params }: any) => {
    try {
      const response = await AxiosInstance.post(
        'user/login',
        params
      );
      const { data } = response;
      return data;
    } catch (error) {
      return null;
    }
  };

  export const getUserProfile = async ({ ...params }) => {
    const url = `user/get-user`;
    return await AxiosInstance.get(url, { params });
  };