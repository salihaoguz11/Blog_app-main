import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useParams } from "react-router-dom";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CommentForm from "../components/blog/CommentForm";
import DeleteModal from "../components/blog/DeleteModal";
import UpdateModal from "../components/blog/UpdateModal";

const Detail = () => {
  const [commentCard, setCommentCard] = useState(false);
  const { currentUser } = useSelector((state) => state.auth);
  const { id } = useParams();
  const { getDetailData } = useBlogCalls();
  const { details } = useSelector((state) => state.blog);
  const { getBlogData } = useBlogCalls();

  //modal delete states
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //update modal
  const [update, setUpdate] = useState(false);
  const updateOpen = () => setUpdate(true);
  const updateClose = () => setUpdate(false);

  const [info, setInfo] = useState({
    title: "",
    content: "",
    image: "",
    category: 0,
    status: "p",
  });

  useEffect(() => {
    getDetailData(`blogs/${id}`);

    getBlogData("categories");
    setInfo(details);
    console.log(details);
  }, []);

  return (
    <Box sx={{ minHeight: "90vh" }}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <Card sx={{ maxWidth: 600, p: 3 }}>
            <CardMedia
              sx={{
                objectFit: "contain",
                maxWidth: 300,
                mx: "auto", // center horizontally
              }}
              image={details?.image}
              component="img"
            />

            <CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AccountCircleIcon fontSize="large" color="primary" />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    {details?.author}
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem", color: "#555" }}>
                    {new Date(details?.createdAt).toLocaleDateString()}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="h6">{details.title}</Typography>
              <Typography sx={{ color: "#777" }}>{details?.content}</Typography>
            </CardContent>

            <CardActions>
              <IconButton>
                <FavoriteIcon />
                <Typography component="span">
                  {details?.likes.length}
                </Typography>
              </IconButton>

              <IconButton onClick={() => setCommentCard(!commentCard)}>
                <CommentIcon />
                <span>{details?.comments.length}</span>
              </IconButton>

              <IconButton>
                <VisibilityIcon />
                <span>{details.views}</span>
              </IconButton>
            </CardActions>

            {/* /* comment card------- */}
            {commentCard && (
              <Box width="100%" mt={3} p={3}>
                {details?.comments?.map((item, index) => (
                  <Box key={index} p={2}>
                    <Typography>{details.userId.username}</Typography>
                    <Typography color="#aaa">
                      {new Date(item?.createdAt).toLocaleDateString()}
                    </Typography>
                    <Typography>{item.comment}</Typography>
                    <Divider />
                  </Box>
                ))}
                <CommentForm postId={details._id} />
              </Box>
            )}

            {/* /*delete update button -----*/}
            {details?.author === currentUser.username && (
              <CardActions>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "green" }}
                  onClick={updateOpen}
                >
                  UPDATE BLOG
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "red" }}
                  onClick={handleOpen}
                >
                  DELETE BLOG
                </Button>

                <DeleteModal
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  open={open}
                  id={id}
                />

                <UpdateModal
                  updateOpen={updateOpen}
                  updateClose={updateClose}
                  update={update}
                  id={id}
                  setInfo={setInfo}
                  info={info}
                />
              </CardActions>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Detail;
