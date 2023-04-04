import { fetchStart, fetchFail, getSuccess } from "../features/blogSlice";
import { useDispatch } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";
const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();
  const getBlogData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`api/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  return {
    getBlogData,
  };
};
export default useBlogCalls;
