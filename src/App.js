import shapesBod from "./shapesbod.png";
import circJaya from "./circjaya.png";
import grimgJaya from "./grimgjaya.png";

import "./App.css";
import { Box, Stack } from "@mui/system";
import {
  AppBar,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";

import { LgBar, SmallBar } from "./AppBar";

// const styles = {
//   container: {
//     width: "100vw",
//     height: "auto",
//     display: "flex",
//     alignItems: "center",
//     backgroundImage: `url(${shapesBod})`,
//     backgroundSize: "cover",
//     //   backgroundSize: "100% auto",
//   },
//   box: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     //   width: "300px",
//     //   height: "500px",
//     //   margin: "auto",
//     alignItems: "center",
//     border: "1px solid rgba(0, 0, 0, 0.12)",
//   },
// };

function App() {
  return (
    <>
      <SmallBar />

      <LgBar />

      <Container>
        <Container>
          <div
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${shapesBod})`,

              backgroundPosition: "center",
              width: "100%",
              height: "100vh",
              marginBottom: "10px",
            }}
          >

            {/* <Grid> */}

            <Box
              style={{
                position: "absolute",
                top: "45%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Box sx={{ border: "1px solid rgba(0, 0, 0, 0.12)", p: 10 }}>
                <Typography
                  variant="h1"
                  // fontSize="xx-large"
                  sx={{ fontFamily: "Ms Madi" }}
                  // sx={{ fontWeight: 900 }}
                >
                  Body
                </Typography>

                <Typography
                  variant="h5"
                  fontSize="larger"
                  sx={{ fontFamily: "Dosis" }}
                  // sx={{ fontWeight: 900 }}
                >
                  by Jaya
                </Typography>
                <Box sx={{ backgroundColor: "#ffffff", p: 5 }}>
                  <Typography sx={{ fontFamily: "Dosis" }}>
                    Discover your
                    <Typography variant="h3" sx={{ fontFamily: "Ms Madi" }}>
                      Dream
                    </Typography>{" "}
                    body
                  </Typography>
                </Box>
              </Box>
            </Box>
          </div>
        </Container>

        {/* </Grid> */}

        {/* </Container> */}

        {/* <img
              src={shapesBod}
              alt="logoBack"
              // style={{
               
              //   margin: "auto",
              //   display: "block",
              //   width: "5em",
              //   maxHeight: "8em",
              // }}
            /> */}
        <Container>
          {/* <Stack>
            <Typography
              variant="h4"
              gutterBottom

              sx={{ fontFamily: "Dosis", textAlign: "center" }}
            >
              Body Sculpting
            </Typography>
            <Divider />

            <Box style={{ backgroundColor: "#eaeaea" }}>
              Enjoy full-body confidence with this safe, non-invasive procedure
              that has zero down-time and is completely painless. Eliminate
              stubborn fat pockets Reduce and smooth cellulite Sculpt and
              reshape your body Tighten and tone loose, sagging skin Improve
              skin elasticity and firmness
            </Box>
          </Stack> */}

          <CardContent>
            <Typography
              color="textPrimary"
              variant="h4"
              gutterBottom
              sx={{ fontFamily: "Dosis", textAlign: "center" }}
            >
              Body Sculpting
            </Typography>
            <Divider />
            <Typography variant="h5">
              Enjoy full-body confidence with this safe, non-invasive procedure
              that has zero down-time and is completely painless. Eliminate
              stubborn fat pockets Reduce and smooth cellulite Sculpt and
              reshape your body Tighten and tone loose, sagging skin Improve
              skin elasticity and firmness
            </Typography>
          </CardContent>

          <Stack direction="row" gap={3} alignItems="center">
            <div
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${circJaya})`,

                backgroundPosition: "center",
                width: "100%",
                height: "100vh",
                marginBottom: "10px",
              }}
            ></div>
            {/* <img
              src={circJaya}
              alt="imgA"
             

              style={{
                margin: "auto",
                display: "block",
                width: "320px", 
                height:"340px",
                maxHeight: "8em",
              }}
            /> */}
            Same day results no surgery no pain no downtime Body sculpting is a
            unique, stand alone procedure that targets stubborn, hard to get rid
            of fat pockets without any downtime, pain, or side effects. Discover
            a superior solution to improve the appearance of cellulite, improve
            elasticity and firmness of skin, and help target specific areas.
          </Stack>
        </Container>
        {/* <div style={{
              backgroundSize: "cover",
              backgroundImage: `url(${grimgJaya})`,

              backgroundPosition: "center",
              width: "50%",
              height: "auto",
              marginBottom: "10px",
            }}>


            </div> */}
        <img
          src={grimgJaya}
          alt="imgB"
          style={{
            margin: "auto",
            display: "block",
            width: "25em",
            // maxHeight: "8em",
          }}
        />

        <p>
          <Typography
            variant="h4"
            sx={{ fontFamily: "Dosis", textAlign: "center" }}
          >
            Our Treatments
          </Typography>
          <Divider sx={{ marginBottom: 3 }} />

          {/* <CardContent>
            <Typography
              color="textPrimary"
              // variant="h4"
              gutterBottom
              sx={{ fontFamily: "Podkova", fontWeight: "bold" }}
            >
              Cavitation
            </Typography>
            <Divider />
            <Typography variant="h5">
            Lipo Cavitation is a non-surgical, non-invasive technology that
            utilizes sound waves to break down and eliminate fat cells. This
            procedure is a safer alternative to surgical options, like
            liposuction. The treatment uses ultrasonic radio waves to break
            apart fat cells, which are then absorbed into your body by your
            lymphatic system.
            </Typography>
          </CardContent> */}

          <Stack direction="row">
            <Card sx={{ m: 3, p: 3 }}>
              <Typography
                gutterBottom
                sx={{ fontFamily: "Podkova", fontWeight: "bold" }}
              >
                Cavitation
              </Typography>
              <Typography gutterBottom sx={{ fontFamily: "Arvo" }}>
                Lipo Cavitation is a non-surgical, non-invasive technology that
                utilizes sound waves to break down and eliminate fat cells. This
                procedure is a safer alternative to surgical options, like
                liposuction. The treatment uses ultrasonic radio waves to break
                apart fat cells, which are then absorbed into your body by your
                lymphatic system.
              </Typography>
            </Card>

            <Card sx={{ m: 3, p: 3 }}>
              <Typography sx={{ fontFamily: "Podkova", fontWeight: "bold" }}>
                Laser Lipolysis
              </Typography>
              <Typography gutterBottom sx={{ fontFamily: "Arvo" }}>
                Laser lipolysis is a minimally invasive procedure that uses heat
                from fiber-optic lasers at various wavelengths to melt body fat.
                The added benefit of laser lipolysis is that it spurs the
                production of the protein collagen, making skin more taut.
              </Typography>
            </Card>
          </Stack>

          <Stack direction="row">
            <Card sx={{ m: 3, p: 3, mt: 0 }}>
              <Typography sx={{ fontFamily: "Podkova", fontWeight: "bold" }}>
                Radio-Frequency
              </Typography>
              <Typography gutterBottom sx={{ fontFamily: "Arvo" }}>
                Radio Frequency facial skin tightening is a minimally invasive
                procedure that tightens the skin and improves tone without any
                pain or downtime. Radio Frequency (RF) facial treatments work by
                using heat to trigger collagen and elastin production in the
                skin's deeper levels.
              </Typography>
            </Card>

            <Card sx={{ m: 3, p: 3, mt: 0 }}>
              <Typography sx={{ fontFamily: "Podkova", fontWeight: "bold" }}>
                Wood Therapy
              </Typography>
              <Typography sx={{ fontFamily: "Arvo" }}>
                Wood therapy is a vigorous massage technique that utilizes
                wooden, handheld tools, such as rolling pins and vacuum-suction
                cups. Purportedly, wood therapy is centuries old and originated
                in Asia. Wood therapy increases lymphatic circulation, reducing
                the appearance of wrinkles and cellulite.
              </Typography>
            </Card>
          </Stack>
        </p>

        <Stack>
          <p>
            <Typography gutterBottom variant="h4" sx={{ fontFamily: "Dosis" }}>
              Faq
            </Typography>
            <Typography sx={{ fontFamily: "Podkova", fontWeight: "bold" }}>
              What is the difference between cavitation and radio frequency?
            </Typography>
            <Typography gutterBottom sx={{ fontFamily: "Arvo" }}>
              Ultrasound Cavitation uses scientifically proven non-invasive
              technology to break down unwanted fat whilst radio frequency is a
              non-invasive heat treatment that helps tighten, contour, and
              refine deeper lines of the skin over the face and body.
            </Typography>
            <Typography sx={{ fontFamily: "Podkova", fontWeight: "bold" }}>
              Who is an ideal candidate for body sculpting?
            </Typography>
            <Typography gutterBottom sx={{ fontFamily: "Arvo" }}>
              An ideal candidate is in overall good health, doesn't smoke, and
              is already within 15 lbs. of their goal weight.
            </Typography>
            <Typography sx={{ fontFamily: "Podkova", fontWeight: "bold" }}>
              How many sessions will I need? How long will it take to see
              results?
            </Typography>
            <Typography gutterBottom sx={{ fontFamily: "Arvo" }}>
              Every person is different. Some will require as few as 3 sessions
              and some will need up to 9 and more. Although you may not see an
              immediate difference, results are gradual over the next few weeks
              as your body excretes the broken-down fatty tissues through the
              lymphatic system. Full results take about 3-4 months. This all
              depends on body mass, body circumference, and body size.
            </Typography>
          </p>
        </Stack>

        <Container>
      <CardContent>
        <Stack direction="row" justifyContent="space-evenly">
          <div>
            <div>Hours</div>
            <Stack direction="row" gap={2}>
              <Typography color="textPrimary" gutterBottom>
                Monday:
              </Typography>
              <Typography color="textSecondary">Closed</Typography>
            </Stack>

            <Stack direction="row" gap={2}>
              <Typography color="textPrimary" gutterBottom>
                Tuesday:
              </Typography>
              <Typography color="textSecondary">Closed</Typography>
            </Stack>

            <Stack direction="row" gap={2}>
              <Typography color="textPrimary" gutterBottom>
                Wednesday:
              </Typography>
              <Typography color="textSecondary">3pm - 7pm</Typography>
            </Stack>
            <Stack direction="row" gap={2}>
              <Typography color="textPrimary" gutterBottom>
                Thursday:
              </Typography>
              <Typography color="textSecondary">4pm - 7pm</Typography>
            </Stack>

            <Stack direction="row" gap={2}>
              <Typography color="textPrimary" gutterBottom>
                Friday:
              </Typography>
              <Typography color="textSecondary">9am - 3pm</Typography>
            </Stack>
            <Stack direction="row" gap={2}>
              <Typography color="textPrimary" gutterBottom>
                Saturday:
              </Typography>
              <Typography color="textSecondary">9am - 3pm</Typography>
            </Stack>

            <Stack direction="row" gap={2}>
              <Typography color="textPrimary" gutterBottom>
                Sunday:
              </Typography>
              <Typography color="textSecondary">9am - 3pm</Typography>
            </Stack>
          </div>

          <div>
            <div>Contact</div>

            <Typography color="textPrimary" gutterBottom>
              Personalized body sculpting
            </Typography>
            <Typography color="textSecondary">+856-357-5954</Typography>

            <Typography color="textPrimary" gutterBottom>
              bodybyjaya@gmail.com
            </Typography>

            <Typography color="textSecondary">
              <a href="https://www.facebook.com/Home-Inspections-105580485123207/">
                <FacebookIcon color="black" />
              </a>
              @bodybyjaya
              <a
                href="https://www.instagram.com/buyerbewarehomeinspections"
                className="instagram social"
              >
                <InstagramIcon color="black" />
              </a>
              @bodybyjaya
            </Typography>
          </div>
        </Stack>
        </CardContent>
        </Container>

        {/* <CardContent>
          <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            color="#a51b77"
            fontSize="2rem"
            minHeight="65px"
            justifyContent="space-between"
          >
            icon
            <Typography
              color="textPrimary"
              variant="subtitle1"
              paddingTop="10px"
              paddingBottom="10px"
              gutterBottom
            >
              +856-357-5954 bodybyjaya@gmail.com
            </Typography>
            <a href="https://www.facebook.com/Home-Inspections-105580485123207/">
              <FacebookIcon color="black" />
            </a>
            <a
              href="https://www.instagram.com/buyerbewarehomeinspections"
              className="instagram social"
            >
              <InstagramIcon color="black" />
            </a>
          </Box>
        </CardContent> */}
  <Box alignSelf="center" paddingTop="5px">
        <CardContent style={{ padding: "0px" }}>
          <Typography
            color="textPrimary"
            variant="h5"
            gutterBottom
            style={{ alignItems: "center", flexWrap: "nowrap" }}
          >
            Have any questions? We'd
            <FavoriteIcon
              fontSize="1.1rem"
              // color="#a71976"
              style={{ paddingInline: "8px" }}
            />
            to hear from you!
          </Typography>

          <Divider />
        </CardContent>
      </Box>

        <>
      <AppBar position="sticky" elevation={0}>
        <Box
          display="flex"
          // color="#a71976"
          color="#123754"
          alignItems="center"
          flexWrap="wrap"
          // alignContent="center"
        >
          <Box textAlign="center" flex="auto" paddingTop="10px">
            <Typography
              variant="subtitle1"
              paddingTop="8px"
              paddingBottom="1px"
              gutterBottom
            >
              Body by Jaya
            </Typography>
          </Box>

          <Box
            // margin="5px"
            display="flex"
            flex="auto"
            alignItems="center"
            style={{ justifyContent: "center" }}
          ></Box>

          <div
            style={{
              display: "flex",
              flex: "auto",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <PhoneAndroidIcon />text="1-609-670-0451" 
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                // color: '#c54097',
                color: "#123754",
              }}
            >
              <Box
                sx={{
                  paddingInline: "8px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.1em",
                  // color: '#c54097',
                  color: "#4687b6",
                }}
              >
                <PhoneAndroidIcon />
              </Box>
              number
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                // color: '#c54097',
                color: "#123754",
              }}
            >
              <Box
                sx={{
                  paddingInline: "8px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.1em",
                  // color: '#c54097',
                  color: "#4687b6",
                }}
              >
                <Box
                  sx={{
                    paddingInline: "8px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1.1em",
                    // color: '#c54097',
                    color: "#4687b6",
                  }}
                >
                  <EmailIcon />
                </Box>
              </Box>
              Send us an email
            </Typography>
          </div>
        </Box>
      </AppBar>
    </>

      </Container>
    </>
  );
}

export default App;
