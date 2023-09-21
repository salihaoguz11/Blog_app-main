import axios from "axios";

const useAxios = () => {
  const token = "96f323b5ad899474749810016cf99810e0a432fe";
  const axiosPublic = axios.create({
    baseURL: "https://32131.fullstack.clarusway.com/",
  });
  const axiosWithToken = axios.create({
    baseURL: "https://32131.fullstack.clarusway.com/",
    headers: { Authorization: `Token ${token}` },
  });
  return { axiosPublic, axiosWithToken };
};
export default useAxios;
