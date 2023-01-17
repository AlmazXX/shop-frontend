import axios from "axios";

const axiosApi = axios.create({ baseURL: "http://localhost:800" });

export default axiosApi;