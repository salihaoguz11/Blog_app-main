import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import BlogCard from "../components/blog/BlogCard";

const MyBlog = () => {
  const { getBlogData } = useBlogCalls();
  const { currentUser } = useSelector((state) => state.auth);
  const { myBlogs } = useSelector((state) => state.blog);

  useEffect(() => {
    getBlogData(`blogs/?author=${currentUser.id}`);
  }, []);

  return (
    <Grid
      container
      align="center"
      sx={{ p: 4, minHeight: "90vh", display: "flex", alignItems: "center" }}
    >
      {myBlogs?.map((blog) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={blog.id}>
          <BlogCard blog={blog} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MyBlog;
