import {
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import logo from "../../static/PritomPic.png";
import { useLocation } from "react-router-dom";
import { links } from "./links";
// import { FaAlignCenter } from "react-icons/fa";

interface Props {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Home({ setSelectedIndex }: Props) {
  const { pathname } = useLocation();
  useEffect(() => {
    setSelectedIndex(-1);
  }, [setSelectedIndex]);

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME!;
  }, [pathname]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: `calc(100vh - 20px - 33px)` }}
    >
      <Grid item xs={3}>
        <Stack direction={{ xs: "column", sm: "row-reverse" }} spacing={2}>
          <Box display="flex" sx={{ justifyContent: "center" }}>
            <img src={logo} width="100px" height="116px" alt="logo" />
          </Box>
          <Box>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              {/* <Typography variant="h3">{process.env.REACT_APP_NAME}</Typography> */}
              {<Typography variant="h3">{"Pritom Paul"}</Typography>}
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Typography variant="subtitle1" gutterBottom>
                A Competitive Programmer &
                <Box fontWeight="fontWeightMedium" display="flex">
                  Machine Learning Enthusiast.
                </Box>
              </Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Stack direction="row" spacing={0.4}>
                {links.map((link) => (
                  <Tooltip key={link.index} title={link.title} arrow>
                    <Link
                      target="_blank"
                      href={link.href}
                      underline="none"
                      color="inherit"
                    >
                      <IconButton color="inherit">{link.icon}</IconButton>
                    </Link>
                  </Tooltip>
                ))}
              </Stack>
            </Grid>
            <Stack
              direction={{ xs: "column", sm: "row-reverse" }}
              spacing={4}
              justifyContent="center"
            >
              <a
                href="https://drive.google.com/file/d/1OwEK4U5cyRwiAQcp6s3NAjRdxaD0kdmd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="145"
                  height="18"
                  src="https://img.shields.io/badge/CV-Download_My_CV-lightgray?style=plastic&logo=readdotcv&labelColor=%23595959&color=%23E6E6FA"
                  alt="facebook-new"
                />
              </a>
            </Stack>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
