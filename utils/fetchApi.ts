import axios, { AxiosRequestConfig } from "axios";

const fetchApi =
  (
    url: string,
    method?: "GET" | "POST",
    data?: any,
    config?: AxiosRequestConfig
  ) =>
  async () => {
    try {
      const res = await axios(url, {
        ...config,
        method: method ? method : "GET",
        data: data,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

export default fetchApi;
