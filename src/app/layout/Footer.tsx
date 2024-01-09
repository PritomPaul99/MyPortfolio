import { Box, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import {
  VscRemote,
  VscError,
  VscWarning,
  VscBell,
  VscFeedback,
  VscCheck,
} from "react-icons/vsc";
import { FaEnvelope, FaPhoneAlt} from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";

export default function Footer() {
  return (
    <Box
      component={Paper}
      square
      elevation={0}
      sx={{ height: "auto", color: "white" }}
      display="flex"
    >
      <Grid container>
        <Grid
          item
          sx={{
            width: "35px",
            backgroundColor: "#2E8461",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              background: "#329171",
            },
          }}
          display="flex"
        >
          <VscRemote fontSize="0.9rem" />
        </Grid>
        <Grid item sx={{ backgroundColor: "#3279CB", flex: 1 }} display="flex">
          <Stack direction="row" spacing={0.5} sx={{ pl: 1 }}>
            <Box
              component={Link}
              href="https://github.com/PritomPaul99/MyPortfolio/tree/main"
              underline="none"
              color="white"
              target="_blank"
              display="flex"
              sx={{
                px: 0.5,
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  background: "#1f8ad2",
                },
              }}
            >
              <IoIosGitBranch fontSize="0.9rem" />
              <Typography sx={{ ml: 0.5, mt: 0.1, fontSize: "0.6rem" }}>
                main
              </Typography>
            </Box>
            <Stack
              direction="row"
              spacing={0.5}
              sx={{ px: 0.5, cursor: "pointer" }}
            >
              <Box display="flex" sx={{ py: 0.3 }}>
                <VscError fontSize="0.9rem" />
              </Box>
              <Box display="flex" sx={{ pt: 0.3 }}>
                <Typography sx={{ fontSize: "0.6rem" }}>0</Typography>
              </Box>
              <Box display="flex" sx={{ py: 0.3 }}>
                <VscWarning fontSize="0.9rem" />
              </Box>
              <Box display="flex" sx={{ pt: 0.3 }}>
                <Typography sx={{ fontSize: "0.6rem" }}>0</Typography>
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item
          sx={{ backgroundColor: "#3279CB", flex: 1 }}
          display="flex"
          justifyContent="flex-end"
        >
          <Box display="flex" justifyContent="flex-end">
            <Stack
              justifyContent="end"
              direction="row"
              spacing={0.8}
              sx={{ pr: 1.5 }}
            >
              {/* <Box
                display="flex"
                sx={{
                  px: 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#1f8ad2",
                  },
                }}
              >
                <FaSearchLocation fontSize="0.6rem" />
                <Typography
                  sx={{
                    ml: 0.5,
                    mt: 0.1,
                    fontSize: "0.6rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Link
                    target="_blank"
                    href={"https://maps.app.goo.gl/B7uWsjTLoPCygk9q8"}
                    underline="none"
                    color="inherit"
                    sx={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
                  >
                    Sylhet, Bangladesh.
                  </Link>
                </Typography>
              </Box> */}
              <Box
                display="flex"
                sx={{
                  px: 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#1f8ad2",
                  },
                }}
              >
                <FaEnvelope fontSize="0.6rem" />
                <Typography sx={{ ml: 0.5, mt: 0.1, fontSize: "0.6rem" }}>
                  <Link
                    target="_blank"
                    href={"mailto:pritompaul1920.4@gmail.com"}
                    underline="none"
                    color="inherit"
                    sx={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
                  >
                    pritompaul1920.4@gmail.com
                  </Link>
                </Typography>
              </Box>
              <Box
                display="flex"
                sx={{
                  px: 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#1f8ad2",
                  },
                }}
              >
                <FaPhoneAlt fontSize="0.6rem" />
                <Typography sx={{ ml: 0.5, mt: 0.1, fontSize: "0.6rem" }}>
                  <Link
                    target="_blank"
                    href={"tel:+8801718382009"}
                    underline="none"
                    color="inherit"
                    sx={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
                  >
                    +8801718382009
                  </Link>
                </Typography>
              </Box>
              <Box
                display="flex"
                sx={{
                  px: 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#1f8ad2",
                  },
                }}
              >
                <VscCheck fontSize="0.9rem" />
                <Typography sx={{ ml: 0.5, mt: 0.1, fontSize: "0.6rem" }}>
                  Prettier
                </Typography>
              </Box>

              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  py: 0.3,
                  px: 0.5,
                  cursor: "pointer",
                  "&:hover": {
                    background: "#1f8ad2",
                  },
                }}
              >
                <VscFeedback fontSize="0.9rem" />
              </Box>
              <Box
                display="flex"
                sx={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  py: 0.3,
                  px: 0.5,
                  cursor: "pointer",
                  "&:hover": {
                    background: "#1f8ad2",
                  },
                }}
              >
                <VscBell fontSize="0.9rem" />
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
