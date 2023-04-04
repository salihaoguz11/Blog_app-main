import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import BlogCard from "../components/blog/BlogCard";
import { fetchStart, getSuccess } from "../features/blogSlice";
const Dashboard = () => {
  const dispatch = useDispatch();
  const getBlogListData = async () => {
    dispatch(fetchStart);
    const URL = "http://32131.fullstack.clarusway.com/api/blogs/";
    try {
      const { data } = await axios(`${URL}`);
      dispatch(getSuccess(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlogListData();
  }, []);

  return <BlogCard />;
};
export default Dashboard;
