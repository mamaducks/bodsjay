// import "./App.css";
import { Box, Container } from "@mui/system";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";

// import CloseIcon from "@mui/icons-material/Close";
import { ShowSmall, NoShowSmall } from "../MediaBox.jsx";
import { AppBarButton } from "./AppBarButton.jsx";
import logoJaya from "../jayalogo.png";

export function AppBarMedia() {
  return (
    <>
      <ShowSmall>
        <AppBar
          position="sticky"
          sx={{ backgroundColor: "#101010", justifyContent: "space-between" }}
        >
          <Toolbar>
            <Box flexGrow={1}>
              <Stack direction="row" gap={1}>
                <Typography
                  variant="h4"
                  sx={{
                    minWidth: "max-content",
                    alignSelf: "flex-end",
                    paddingBottom: 1,
                    paddingLeft: 3,
                    fontWeight: 600,
                    fontFamily: "Ms Madi",
                  }}
                >
                  body by jaya
                </Typography>
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

      <NoShowSmall>
        <AppBar position="sticky" sx={{ backgroundColor: "#0d0f11" }}>
          <Toolbar>
            <Box flexGrow={1}>
              {/* <Link href={`/`} sx={{ textDecoration: "none" }}> */}
              <Stack direction="row" gap={1}>
                {/* <img src={leaf} alt="logo" height={40} width={40} /> */}

                <Typography
                  variant="h4"
                  sx={{
                    minWidth: "max-content",
                    alignSelf: "flex-end",
                    paddingBottom: 1,
                    paddingLeft: 3,
                    fontWeight: 600,
                    fontFamily: "Ms Madi",
                  }}
                >
                  body by jaya
                </Typography>

                {/* <Typography sx={{ alignSelf: "center" }}>by Jaya</Typography> */}
              </Stack>
              {/* </Link> */}
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

      <Container maxWidth="md">
        <img
          alt=""
          src={logoJaya}
          width="100%"
          height="auto"
          // style={{
          //   alignSelf: "center",
          //   minWidth: 350,
          //   // paddingBlock: "10px",
          //   // flexGrow: 0,
          //   // marginInline: 20,
          // }}
        />
      </Container>
      <NoShowSmall>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          sx={{ bgcolor: "#f4f4f4", fontFamily: "Oswald" }}
        >
          <Button sx={{ color: "#101010", fontFamily: "Oswald" }} href="/">
            Home
          </Button>
          <Button
            sx={{ color: "#101010", fontFamily: "Oswald" }}
            href="/services"
          >
            Treatments
          </Button>
          <Button
            sx={{ color: "#101010", fontFamily: "Oswald" }}
            href="/reviews"
          >
            Reviews
          </Button>
          <Button sx={{ color: "#101010", fontFamily: "Oswald" }} href="Faq">
            Faqs
          </Button>

          <Button
            sx={{ color: "#101010", fontFamily: "Oswald" }}
            href="/contact"
          >
            Contact Us
          </Button>
        </Stack>
      </NoShowSmall>
    </>
  );
}
