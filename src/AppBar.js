import { AppBar, Link, Stack, Toolbar, Typography } from "@mui/material";
import leaf from "./loveLeaf.png";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import {
  ShowSmall,
  NoShowSmall,
  StyledAppBarColor,
  StyledLogoText,
} from "./MediaBox.jsx";
import { React, useState } from "react";
import { AppBarButton } from "./AppBarButton";

export function LgBar() {
  const [query, setQuery] = useState("");

  return (
    <NoShowSmall>
      <AppBar position="fixed">
        <Toolbar>
          <Box flexGrow={1}>
            <Link href={`/`} sx={{ textDecoration: "none" }}>
              <Stack direction="row" gap={1}>
                {/* <img src={leaf} alt="logo" height={40} width={40} /> */}

                <Typography
                  variant="h4"
                  sx={{
                    minWidth: "max-content",
                    alignSelf: "flex-end",
                    paddingBottom: 1,
                    paddingLeft: 3,
                    fontWeight: "bold",
                    fontFamily: "Ms Madi",
                    // fontFamily: " 'Poppins', sans-serif",
                    color: "#197982",
                  }}
                >
                  Body
                </Typography>
                <Typography>by Jaya</Typography>
              </Stack>
            </Link>
          </Box>

          <Stack direction="row" gap={2}>
            <Box alignSelf="center">
              <AppBarButton />
            </Box>
          </Stack>

          {/* <div>
              <StyledCenterStack
                direction="row"
                justifyContent="flex-end"
                gap={1}
                flexGrow={1}
              >
                

                <Avatar>
                  <YouTubeIcon />
                </Avatar>
                <Avatar>
                  <InstagramIcon />
                </Avatar>
                <Avatar>
                  <PinterestIcon />
                </Avatar>
                <Avatar>
                  <TwitterIcon />
                </Avatar>
              </StyledCenterStack>
            </div> */}
        </Toolbar>
      </AppBar>
    </NoShowSmall>
  );
}

export function SmallBar() {
  return (
    <ShowSmall>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#101010", justifyContent: "space-between" }}
      >
        <Toolbar>
          <Box flexGrow={1}>
            <Stack direction="row" gap={1}>
              <img src={leaf} alt="logo" height={28} width={28} />
              {/* <Link href={`/`} sx={{ textDecoration: "none" }}> */}
              <Typography variant="h4">Body by Jaya</Typography>
              {/* </Link> */}
            </Stack>
          </Box>

          <Stack
            direction="row"
            sx={{ alignSelf: "center", alignItems: "center" }}
          >
            <AppBarButton />
          </Stack>
        </Toolbar>
      </AppBar>
    </ShowSmall>
  );
}
