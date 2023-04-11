import { useDispatch } from "react-redux";
import {
  fetchStart,
  getSuccess,
  fetchFail,
  getDetailSuccess,
} from "../features/blogSlice";

import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";

const useBlogCalls = () => {
  const dispatch = useDispatch();

  const { axiosWithToken } = useAxios();

  //Blogs

  const getBlogData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`api/${url}/`);

      dispatch(getSuccess({ data, url }));
      // url.includes("/") && dispatch(getDetailSuccess({ data }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  //post blog

  const postBlogData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/`, info);
      getBlogData("blogs");
      toastSuccessNotify(`${url} successfuly posted`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be posted`);
    }
  };
  const getDetailData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`api/${url}/`);
      dispatch(getDetailSuccess({ data }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  //delete blog
  const navigate = useNavigate();
  const deleteBlog = async (url) => {
    try {
      await axiosWithToken.delete(`api/${url}`);
      navigate("/");
      toastSuccessNotify("Blog succesfully deleted");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("error.message");
    }
  };

  //edit blog

  const putBlogData = async (url, id, info) => {};

  return { getBlogData, postBlogData, getDetailData, deleteBlog, putBlogData };
};

export default useBlogCalls;
