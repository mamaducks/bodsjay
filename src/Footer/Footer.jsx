// import "./App.css";
import { Box } from "@mui/system";
import { AppBar, Button, Stack, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import ScheduleIcon from "@mui/icons-material/Schedule";

export function Footer() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ backgroundColor: "#0d0f11", py: 4 }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-evenly"
      >
        <Box>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            justifyContent="center"
          >
            <Typography
              variant="h4"
              paddingTop="8px"
              paddingBottom="1px"
              fontFamily="Ms Madi"
              gutterBottom
            >
              Body
            </Typography>
            <Typography
              variant="body1"
              paddingTop="8px"
              paddingBottom="1px"
              fontFamily="Dosis"
            >
              by Jaya
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignSelf="center"
            gap={3}
            justifyContent="center"
          >
            <a href="https://www.facebook.com/profile.php?id=100089984763471&mibextid=LQQJ4d">
              <FacebookIcon sx={{ color: "#fefefe" }} />
            </a>
            <a
              href="https://www.instagram.com/bodybyjaya/?igshid=YmMyMTA2M2Y%3D"
              className="instagram social"
            >
              <InstagramIcon sx={{ color: "#fefefe" }} />
            </a>
          </Stack>
        </Box>

        <Box alignSelf="center">
          <Stack direction="row" gap={1} sx={{ mt: 2 }}>
            <Box
              sx={{
                paddingInline: "8px",
                display: "flex",
                alignItems: "center",
                fontSize: "1.1em",
                color: "#fefefe",
              }}
            >
              <PhoneAndroidIcon />
            </Box>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
              }}
            >
              1-856-357-5954
            </Typography>
          </Stack>

          <Stack direction="row" sx={{ mt: 2 }} gap={1}>
            <Box
              sx={{
                paddingInline: "8px",
                display: "flex",
                alignItems: "center",
                fontSize: "1.1em",
              }}
            >
              <EmailIcon />
            </Box>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                color: "#fefefe",
              }}
            >
              bodybyjaya@gmail.com
            </Typography>
          </Stack>

          <Stack direction="row" sx={{ mt: 2 }}>
            <Box
              sx={{
                paddingInline: "8px",
                display: "flex",
                alignItems: "center",
                fontSize: "1.1em",
              }}
            >
              <ScheduleIcon />
            </Box>
            <Button
              href="https://bodybyjaya.as.me/schedule.php"
              variant="contained"
              size="small"
              sx={{ backgroundColor: "#101010" }}
            >
              Book an Appointment
            </Button>
          </Stack>
        </Box>
      </Stack>
    </AppBar>
  );
}
