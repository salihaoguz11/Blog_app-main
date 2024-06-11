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

  const { axiosWithToken, axiosPublic } = useAxios();

  //Blogs

  const getBlogData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`/${url}/`);
      dispatch(getSuccess({ data, url }));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  //post blog

  const postBlogData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/${url}/`, info);
      getBlogData("blogs");
      toastSuccessNotify(`${url} successfuly posted`);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify(`${url} can not be posted`);
    }
  };

  //get detail
  const getDetailData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/${url}/`);
      dispatch(getDetailSuccess({ data }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  //add like

  const AddLike = async (url) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/${url}/`);

      getBlogData("blogs");
    } catch (error) {
      console.log(error);
    }
  };

  //add commnet
  const addComment = async (url, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/${url}/`, data);
      getDetailData(`blogs/${data.post}`);
      toastSuccessNotify("Comment is successfuly added");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Comment can not be added");
    }
  };

  //delete blog
  const navigate = useNavigate();
  const deleteBlog = async (url) => {
    try {
      await axiosWithToken.delete(`/${url}`);
      navigate("/");
      toastSuccessNotify("Blog succesfully deleted");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("error.message");
    }
  };

  //edit blog

  const putBlogData = async (url, id, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/${url}/${id}/`, info);
      getDetailData(`${url}/${id}`);
      toastSuccessNotify("succesfully updated");
    } catch (error) {
      toastErrorNotify(`${url} can not be updated`);
    }
  };

  return {
    getBlogData,
    postBlogData,
    getDetailData,
    deleteBlog,
    putBlogData,
    addComment,
    AddLike,
  };
};

export default useBlogCalls;
