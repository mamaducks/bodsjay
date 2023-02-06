// import "./App.css";
import { Box, Container } from "@mui/system";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";

import { ShowSmall, NoShowSmall } from "../MediaBox.jsx";
import { AppBarButton } from "./AppBarButton.jsx";
import logoJaya from "../jayalogo.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

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

            <Stack direction="row" gap={2}>
              <a href="https://www.facebook.com/profile.php?id=100089984763471&mibextid=LQQJ4d">
                <FacebookIcon sx={{ color: "#ffffff", fontSize: "2rem" }} />
              </a>

              <a
                href="https://www.instagram.com/bodybyjaya/?igshid=YmMyMTA2M2Y%3D"
                className="instagram social"
              >
                <InstagramIcon sx={{ color: "#ffffff", fontSize: "2rem" }} />
              </a>
            </Stack>
          </Toolbar>
        </AppBar>
      </NoShowSmall>

      <Container maxWidth="md">
        <img alt="" src={logoJaya} width="100%" height="auto" />
      </Container>
      <NoShowSmall>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          sx={{ bgcolor: "#f4f4f4", fontFamily: "Oswald" }}
        >
          <Button
            size="large"
            sx={{ color: "#101010", fontFamily: "Oswald" }}
            href="/"
          >
            Home
          </Button>
          <Button
            size="large"
            sx={{ color: "#101010", fontFamily: "Oswald" }}
            href="/services"
          >
            Treatments
          </Button>
          <Button
            size="large"
            sx={{ color: "#101010", fontFamily: "Oswald" }}
            href="/reviews"
          >
            Reviews
          </Button>
          <Button
            size="large"
            sx={{ color: "#101010", fontFamily: "Oswald" }}
            href="Faq"
          >
            Faqs
          </Button>

          <Button
            size="large"
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
