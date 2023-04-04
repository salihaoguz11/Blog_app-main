import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../components/blog/BlogCard";
// import { fetchStart, getSuccess } from "../features/blogSlice";
import useBlogCall from "../hooks/useBlogCalls";
const Dashboard = () => {
  const { getBlogData } = useBlogCall();
  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    getBlogData("blogs");
  }, []);

  return <BlogCard />;
};
export default Dashboard;
