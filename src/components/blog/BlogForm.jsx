import { TextField, Box } from "@mui/material";

const BlogForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
      }}
      component="form"
    >
      <TextField
        label="title"
        name="title"
        id="title"
        type="text"
        variant="outlined"
        required
      ></TextField>
    </Box>
  );
};

export default BlogForm;
