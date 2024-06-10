import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);
  // const token = "96f323b5ad899474749810016cf99810e0a432fe";
  const axiosPublic = axios.create({
    baseURL: "http://127.0.0.1:8001/",
  });
  const axiosWithToken = axios.create({
    baseURL: "http://127.0.0.1:8001/",
    headers: { Authorization: `Token ${token}` },
  });
  return { axiosPublic, axiosWithToken };
};
export default useAxios;
