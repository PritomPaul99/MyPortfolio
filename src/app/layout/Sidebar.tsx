import React from "react";
import { Box, Link, Paper, Tooltip } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { VscFiles, VscSettingsGear } from "react-icons/vsc";
import { IoMdHome } from "react-icons/io";
// import { BiGitBranch } from "react-icons/bi";
// import { IoDocumentAttach } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";
import Divider from "@mui/material/Divider";
import { links } from "../pages/links";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  handleThemeChange: () => void;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Sidebar({
  expanded,
  setExpanded,
  darkMode,
  handleThemeChange,
  setSelectedIndex,
}: Props) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: `calc(100vh - 20px)`,
        backgroundColor: darkMode ? "#333333" : "#2c2c2c",
      }}
      justifyContent="space-between"
      display="flex"
      flexDirection="column"
      component={Paper}
      square
      elevation={0}
    >
      <Box
        sx={{ flexGrow: 0 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          sx={{
            borderLeft: expanded
              ? "solid 0.12em white"
              : darkMode
              ? "solid 0.12em #333333"
              : "solid 0.12em #2c2c2c",
            cursor: "pointer",
            WebkitTapHighlightColor: "rgba(0,0,0,0)",
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <Box
            sx={{
              flexGrow: 0,
              my: 1.5,
              color: expanded ? "white" : "#858585",
              fontSize: 24,
              outline: "none",
              "&:hover": {
                color: "white",
              },
            }}
            display="flex"
            justifyContent="center"
          >
            <VscFiles />
          </Box>
        </Box>
        <Tooltip title="Download My CV" arrow placement="right">
          <Link
            // href={
            //   "https://drive.google.com/uc?export=download&id=1OwEK4U5cyRwiAQcp6s3NAjRdxaD0kdmd"
            // }
            href="/Assects/CV/Resume_PritomPaul_Phn-01718382009.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download={"CV_Pritom_Paul.pdf"}

            underline="none"
            color="inherit"
            sx={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
          >
            <Box
              sx={{
                flexGrow: 0,
                cursor: "pointer",
                color: "#858585",
                fontSize: 24,
                "&:hover": {
                  color: "white",
                },
              }}
              display="flex"
              justifyContent="center"
            >
              <Box mt={0.7}>
                <FaFilePdf />
                {/* <BiGitBranch /> */}
                {/* <IoDocumentAttach /> */}
              </Box>
            </Box>
          </Link>
        </Tooltip>

        {/* Home Button */}
        <Tooltip title="Go to Home" arrow placement="right">
          <RouterLink
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              sx={{
                flexGrow: 0,
                cursor: "pointer",
                color: "#858585",
                fontSize: 24,
                "&:hover": {
                  color: "white",
                },
              }}
              display="flex"
              justifyContent="center"
              mt={0.5}
            >
              <Box mt={0.7}>
                {/* You can use an appropriate home icon here */}
                {/* For example, if you have a home icon, replace the component below */}
                {/* with the appropriate home icon component */}
                <IoMdHome />
              </Box>
            </Box>
          </RouterLink>
        </Tooltip>

        <Divider sx={{ m: 0.5 }} />

        {links.map((link) => (
          <Tooltip title={link.title} arrow placement="right" key={link.index}>
            <Link
              target="_blank"
              href={link.href}
              underline="none"
              color="inherit"
              sx={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
            >
              <Box
                sx={{
                  flexGrow: 0,
                  m: 0.5,
                  color: "#858585",
                  fontSize: 24,
                  "&:hover": {
                    color: "white",
                  },
                  cursor: "pointer",
                }}
                display="flex"
                justifyContent="center"
              >
                <Box mt={0.7}>{link.icon}</Box>
              </Box>
            </Link>
          </Tooltip>
        ))}
      </Box>

      <Box
        sx={{ flexGrow: 0, pb: 0.5 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Tooltip
          title={darkMode ? "Turn on the light" : "Turn off the light"}
          placement="right"
          arrow
        >
          <Box
            sx={{
              flexGrow: 0,
              fontSize: 24,
              color: "#858585",
              cursor: "pointer",
              "&:hover": {
                color: "white",
              },
              WebkitTapHighlightColor: "rgba(0,0,0,0)",
            }}
            display="flex"
            justifyContent="center"
            onClick={handleThemeChange}
          >
            {!darkMode ? (
              <Box>
                <DarkModeOutlinedIcon />
              </Box>
            ) : (
              <Box>
                <LightModeOutlinedIcon />
              </Box>
            )}
          </Box>
        </Tooltip>
        <Tooltip title="Markdown syntax" arrow placement="right">
          <Link
            onClick={() => {
              setSelectedIndex(-1);
              navigate("/docs");
            }}
            underline="none"
            color="inherit"
            sx={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
          >
            <Box
              sx={{
                flexGrow: 0,
                fontSize: 24,
                color: "#858585",
                cursor: "pointer",
                "&:hover": {
                  color: "white",
                },
                WebkitTapHighlightColor: "rgba(0,0,0,0)",
              }}
              display="flex"
              justifyContent="center"
            >
              <Box mt={0.7}>
                <VscSettingsGear />
              </Box>
            </Box>
          </Link>
        </Tooltip>
      </Box>
    </Box>
  );
}
