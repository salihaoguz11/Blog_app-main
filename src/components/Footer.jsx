import * as React from "react";
import Container from "@mui/material/Container";
// import Image from "next/image";
// import Link from "@/src/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { blueGrey, grey } from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: grey["900"],
        // backgroundColor: "primary",
        color: "white",
      }}
      component="footer"
      square
      variant="outlined"
      //   color="primary"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <div>
            {/* <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" /> */}
          </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography>Developed By Fs Team</Typography>
          <Box>
            <IconButton
              sx={{ color: "white" }}
              onClick={() => window.open("https://github.com/salihaoguz11")}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              sx={{ color: "white" }}
              onClick={() =>
                window.open("https://www.linkedin.com/in/saliha-oguz/")
              }
            >
              <LinkedInIcon />
            </IconButton>
            {/* <IconButton sx={{ color: "white" }} onClick={() => window.open("")}>
              <FacebookIcon />
            </IconButton> */}
          </Box>

          <Typography variant="caption">
            Copyright ©️ {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}

export default Footer;
