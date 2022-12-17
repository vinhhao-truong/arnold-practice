import axios, { AxiosRequestConfig } from "axios";

const fetchApi = async (
  url: string,
  method?: "GET" | "POST",
  data?: any,
  config?: AxiosRequestConfig
) => {
  try {
    const res = await axios(url, {
      ...config,
      method: method ? method : "GET",
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export default fetchApi;
