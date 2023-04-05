import { useDispatch } from "react-redux";
import {
  fetchStart,
  getSuccess,
  fetchFail,
  getDetailSuccess,
} from "../features/blogSlice";

import useAxios from "./useAxios";

const useBlogCalls = () => {
  const dispatch = useDispatch();

  const { axiosWithToken } = useAxios();

  //Blogs

  const getBlogData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`api/${url}/`);

      url.includes("/") || dispatch(getSuccess({ data, url }));
      url.includes("/") && dispatch(getDetailSuccess({ data }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getBlogData };
};

export default useBlogCalls;
