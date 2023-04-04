import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { fetchStart, getSuccessDetail } from "../features/blogSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detailData } = useSelector((state) => state.blog);
  const {
    title,
    content,
    image,
    category,
    likes,
    publish_date,
    comment_count,
    author,
    post_views,
  } = detailData;

  const getIdData = async () => {
    dispatch(fetchStart);
    const BASE_URL = "http://32131.fullstack.clarusway.com/api/blogs/";
    try {
      const { data } = await axios(`${BASE_URL}${id}/`, {
        headers: {
          Authorization: `Token f0a29c03bc786b2dc5941e95a1c650fe9b51418e`,
        },
      });
      console.log(data);
      dispatch(getSuccessDetail(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getIdData();
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
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              sx={{
                objectFit: "contain",
                maxWidth: 500,
              }}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png"
              component="img"
            />

            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AccountCircleIcon fontSize="large" color="primary" />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "0.9rem" }}>admin</Typography>
                  <Typography sx={{ fontSize: "0.9rem", color: "#555" }}>
                    29.03.2023 17:27:38
                  </Typography>
                </Box>
              </Box>

              <Typography variant="h6">React</Typography>
              <Typography sx={{ color: "#777" }}>
                React kullanıcı arayüzü oluşturmaya yarayan açık kaynak kodlu
                bir javascript kütüphanesidir. Facebook önderliğinde bir
                geliştirici grubu tarafından geliştirilmekte olan React,
                Model-View-Controller prensibine uygun olarak oluşturulmuştur.
              </Typography>
            </CardContent>

            <CardActions>
              <IconButton>
                <FavoriteIcon />
                <span>{likes}</span>
              </IconButton>

              <IconButton>
                <CommentIcon />
                <span>{comment_count}</span>
              </IconButton>

              <IconButton>
                <VisibilityIcon />
                <span>{post_views}</span>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Detail;
