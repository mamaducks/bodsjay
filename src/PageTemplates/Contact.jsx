import { Box, Container } from "@mui/system";
import { Button, Stack, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { QuestContact } from "../QuestContact";

export function ContactPage() {
  return (
    <Container>
      <br/>
      <Box
        alignSelf="center"
        paddingTop="5px"
        display="flex"
        justifyContent="center"
      >
        <div>
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
            >
              Body
            </Typography>
            <Typography
              variant="body1"
              paddingTop="8px"
              paddingBottom="1px"
              fontFamily="Dosis"
              textTransform="uppercase"
            >
              by Jaya
            </Typography>
          </Stack>

          <Typography
            color="textPrimary"
            variant="h6"
            gutterBottom
            fontFamily="Dosis"
          >
            Body Contouring Services
          </Typography>
        </div>
      </Box>
      <QuestContact />

      <Container maxWidth="md">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent="space-evenly"
          mt={3}
          mb={3}
        >
          <div>
            <Typography fontFamily="Dosis" variant="h5">
              Our Hours
            </Typography>
            <Stack direction="row" gap={2} sx={{ mt: 2 }}>
              <Typography color="textPrimary" gutterBottom fontFamily="Oswald" textTransform= 'uppercase'>
                Monday:
              </Typography>
              <Typography color="textSecondary" fontFamily="Oswald">
                Closed
              </Typography>
            </Stack>

            <Stack direction="row" gap={2}>
              <Typography color="textPrimary" gutterBottom fontFamily="Oswald" textTransform= 'uppercase'>
                Tuesday:
              </Typography>
              <Typography color="textSecondary" fontFamily="Oswald">
                Closed
              </Typography>
            </Stack>

            <Stack direction="row" gap={2}>
              <Typography color="textPrimary" gutterBottom fontFamily="Oswald" textTransform= 'uppercase'>
                Wednesday:
              </Typography>
              <Typography  fontFamily="Oswald">
                3pm - 7pm
              </Typography>
            </Stack>
            <Stack direction="row" gap={2}>
              <Typography color="textPrimary" gutterBottom fontFamily="Oswald" textTransform= 'uppercase'>
                Thursday:
              </Typography>
              <Typography  fontFamily="Oswald">
                4pm - 7pm
              </Typography>
            </Stack>

            <Stack direction="row" gap={2}>
              <Typography color="textPrimary" gutterBottom fontFamily="Oswald" textTransform= 'uppercase'>
                Friday:
              </Typography>
              <Typography  fontFamily="Oswald">
                9am - 3pm
              </Typography>
            </Stack>
            <Stack direction="row" gap={2}>
              <Typography color="textPrimary" gutterBottom fontFamily="Oswald" textTransform= 'uppercase'>
                Saturday:
              </Typography>
              <Typography  fontFamily="Oswald">
                9am - 3pm
              </Typography>
            </Stack>

            <Stack direction="row" gap={2}>
              <Typography color="textPrimary" gutterBottom fontFamily="Oswald" textTransform= 'uppercase'>
                Sunday:
              </Typography>
              <Typography  fontFamily="Oswald">
                9am - 3pm
              </Typography>
            </Stack>
          </div>

          <div>
            <Typography fontFamily="Dosis" variant="h5">
              Contact Us
            </Typography>

            <Box alignSelf="center">
              <Stack direction="row" gap={1} sx={{ mt: 2 }}>
                <PhoneAndroidIcon />
                <Typography variant="body1" fontFamily="Oswald">
                  1-856-357-5954
                </Typography>
              </Stack>

              <Stack direction="row" sx={{ mt: 2 }} gap={1}>
                <EmailIcon />
                <Typography variant="body1" fontFamily="Oswald" textTransform= 'uppercase'>
                  bodybyjaya@gmail.com
                </Typography>
              </Stack>

              <Stack direction="row" sx={{ mt: 2 }} gap={1}>
                <a href="https://www.facebook.com/profile.php?id=100089984763471&mibextid=LQQJ4d">
                  <FacebookIcon sx={{ color: "#0d0f11" }} />
                </a>

                <Typography variant="body1" fontFamily="Oswald" textTransform= 'uppercase'>
                  @bodybyjaya
                </Typography>
              </Stack>

              <Stack direction="row" sx={{ mt: 2 }} gap={1}>
                <a
                  href="https://www.instagram.com/bodybyjaya/?igshid=YmMyMTA2M2Y%3D"
                  className="instagram social"
                >
                  <InstagramIcon sx={{ color: "#0d0f11" }} />
                </a>
                <Typography variant="body1" fontFamily="Oswald"  textTransform= 'uppercase'>
                  @bodybyjaya
                </Typography>
              </Stack>

              <Stack direction="row" sx={{ mt: 2 }} gap={1}>
                <LocationOnIcon sx={{ color: "#0d0f11" }} />
                <Typography
                  color="textPrimary"
                  variant="body1"
                  gutterBottom
                  // fontFamily="Dosis"
                  fontFamily="Oswald"
                  textTransform= 'uppercase'
                  // fontWeight="bold"
                >
                  5434 King Avenue Pennsauken NJ 09109
                </Typography>
              </Stack>
            </Box>
          </div>
        </Stack>
      </Container>

      <Box display="flex" justifyContent="center" sx={{ my: 2 }}>
        <Button
          href="https://bodybyjaya.as.me/schedule.php"
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#101010",
            "&:hover": {
              backgroundColor: "#a2a2a2",
            },
          }}
        >
          Schedule Online
        </Button>
      </Box>
      <br/>
    </Container>
  );
}
