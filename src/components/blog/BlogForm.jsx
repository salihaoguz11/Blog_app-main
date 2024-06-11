import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";

const BlogForm = () => {
  const [info, setInfo] = useState({
    title: "",
    content: "",
    image: "",
    category: 0,
    status: "p",
    slug: "",
  });
  const { postBlogData, getBlogData } = useBlogCalls();
  const { categories } = useSelector((state) => state.blog);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postBlogData("blogs", info);
    console.log(info);
    setInfo({
      title: "",
      content: "",
      image: "",
      blogCategoryId: "",
      status: "p",
      slug: "",
    });
  };
  useEffect(() => {
    getBlogData("categories");
    console.log(categories);
  }, []);
  useEffect(() => {
    console.log(categories);
  }, [categories]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      component="form"
      width="100%"
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" align="left" sx={{ fontWeight: 900 }}>
        New Blog
      </Typography>

      <TextField
        label="Title"
        name="title"
        id="title"
        type="text"
        variant="outlined"
        value={info?.title}
        onChange={handleChange}
        required
      />
      <TextField
        label="Image Url"
        name="image"
        id="image"
        type="url"
        variant="outlined"
        value={info?.image}
        onChange={handleChange}
        required
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          align="left"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="blogCategoryId"
          value={info?.blogCategoryId}
          label="Categories"
          onChange={handleChange}
        >
          <MenuItem value={0}>Select Category...</MenuItem>
          {categories?.map((item) => (
            <MenuItem key={item?._id} value={item?._id}>
              {item?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          align="left"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={info.status}
          name="status"
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value="p">Please Chose...</MenuItem>
          <MenuItem value="d">Draft</MenuItem>
          <MenuItem value="p">Published</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Content"
        name="content"
        id="content"
        type="text"
        variant="outlined"
        required
        multiline
        size="medium"
        value={info?.content}
        onChange={handleChange}
        rows={2}
      />

      <Button type="submit" variant="contained">
        ADD NEW BLOG
      </Button>
    </Box>
  );
};

export default BlogForm;
