import axios from "axios";

const useAxios = () => {
  const token = "f0a29c03bc786b2dc5941e95a1c650fe9b51418e";
  const axiosPublic = axios.create({
    baseURL: "http://32131.fullstack.clarusway.com/",
  });
  const axiosWithToken = axios.create({
    baseURL: "http://32131.fullstack.clarusway.com/",
    header: { Authorization: `Token ${token}` },
  });
  return { axiosPublic, axiosWithToken };
};
export default useAxios;
