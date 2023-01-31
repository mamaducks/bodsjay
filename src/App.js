import shapesBod from "./shapesbod.png";
import circJaya from "./circjaya.png";
import grimgJaya from "./grimgjaya.png";

import "./App.css";
import { Box } from "@mui/system";
import {
  AppBar,
  Card,
  CardContent,
  Container,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";

import leaf from "./loveLeaf.png";
// import CloseIcon from "@mui/icons-material/Close";
// import SearchIcon from "@mui/icons-material/Search";
import { ShowSmall, NoShowSmall } from "./MediaBox.jsx";
// import { React, useState } from "react";
import { AppBarButton } from "./AppBarButton";

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
                    fontWeight: "bold",
                    fontFamily: "Ms Madi",
                    // fontFamily: " 'Poppins', sans-serif",
                    // color: "#0d0f11",
                  }}
                >
                  Body
                </Typography>

                <Typography sx={{ alignSelf: "center" }}>by Jaya</Typography>
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

      <Container sx={{ marginTop: 20 }}>
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

          {/* <CardContent>
            <Typography
              color="textPrimary"
              variant="h4"
              gutterBottom
              sx={{ fontFamily: "Dosis", textAlign: "center", fontWeight: 800 }}
            >
              Body Sculpting
            </Typography>
            <Divider />
            <Typography variant="body1">
              Enjoy full-body confidence with this safe, non-invasive procedure
              that has zero down-time and is completely painless. Eliminate
              stubborn fat pockets Reduce and smooth cellulite Sculpt and
              reshape your body Tighten and tone loose, sagging skin Improve
              skin elasticity and firmness
            </Typography>
          </CardContent> */}

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
            <CardContent>
              <Typography
                color="textPrimary"
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: "Dosis",
                  textAlign: "center",
                  fontWeight: 800,
                }}
              >
                Body Sculpting
              </Typography>
              <Divider />
              <Typography variant="body1">
                Enjoy full-body confidence with this safe, non-invasive
                procedure that has zero down-time and is completely painless.
                <ul
                  style={{
                    listStyleType: "square",
                    fontWeight: 300,
                    // lineHeight: 2,
                    fontSize: "1.1rem",
                    // letterSpacing: 1,
                  }}
                >
                  <li>Eliminate stubborn fat pockets</li>
                  <li>Reduce and smooth cellulite</li>
                  <li>Sculpt and reshape your body</li>
                  <li>Tighten and tone loose, sagging skin</li>
                  <li>Improve skin elasticity and firmness</li>
                </ul>
              </Typography>

              <Typography>
                Same day results no surgery no pain no downtime Body sculpting
                is a unique, stand alone procedure that targets stubborn, hard
                to get rid of fat pockets without any downtime, pain, or side
                effects. Discover a superior solution to improve the appearance
                of cellulite, improve elasticity and firmness of skin, and help
                target specific areas.
              </Typography>
            </CardContent>
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
            <Divider />
            <Typography
              sx={{ fontFamily: "Podkova", fontWeight: "bold", mt: 2 }}
            >
              What is the difference between cavitation and radio frequency?
            </Typography>
            <Typography gutterBottom sx={{ fontFamily: "Arvo" }}>
              Ultrasound Cavitation uses scientifically proven non-invasive
              technology to break down unwanted fat whilst radio frequency is a
              non-invasive heat treatment that helps tighten, contour, and
              refine deeper lines of the skin over the face and body.
            </Typography>
            <Typography
              sx={{ fontFamily: "Podkova", fontWeight: "bold", mt: 2 }}
            >
              Who is an ideal candidate for body sculpting?
            </Typography>
            <Typography gutterBottom sx={{ fontFamily: "Arvo" }}>
              An ideal candidate is in overall good health, doesn't smoke, and
              is already within 15 lbs. of their goal weight.
            </Typography>
            <Typography
              sx={{ fontFamily: "Podkova", fontWeight: "bold", mt: 2 }}
            >
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
                    // gutterBottom
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

                <Typography
                  color="textPrimary"
                  variant="h6"
                  gutterBottom
                  fontFamily="Dosis"
                >
                  Personalized body sculpting
                </Typography>
              </div>
            </Box>

            <Stack direction="row" justifyContent="space-evenly" mt={2}>
              <div>
                <Typography fontFamily="Dosis" variant="h5">
                  Hours
                </Typography>
                <Stack direction="row" gap={2} sx={{ mt: 2 }}>
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
                <Typography fontFamily="Dosis" variant="h5">
                  Contact
                </Typography>

                <Box alignSelf="center">
                  <Stack direction="row" gap={1} sx={{ mt: 2 }}>
                    {/* <Box
                    sx={{
                      paddingInline: "8px",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "1.1em",
                      // color: '#c54097',
                      color: "#fefefe",
                    }}
                  > */}
                    <PhoneAndroidIcon />
                    {/* </Box> */}
                    <Typography
                      variant="body1"
                      // sx={{
                      //   display: "flex",
                      //   // color: '#c54097',
                      //   // color: "#fefefe",
                      // }}
                    >
                      1-856-357-5954
                    </Typography>
                  </Stack>

                  <Stack direction="row" sx={{ mt: 2 }} gap={1}>
                    {/* <Box
                    sx={{
                      paddingInline: "8px",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "1.1em",
                      // color: '#c54097',
                      // color: "#fefefe",
                    }}
                  > */}
                    <EmailIcon />
                    {/* </Box> */}
                    <Typography
                      variant="body1"
                      // sx={{
                      //   display: "flex",
                      //   // color: '#c54097',
                      //   color: "#fefefe",
                      // }}
                    >
                      bodybyjaya@gmail.com
                    </Typography>
                  </Stack>

                  <Stack direction="row" sx={{ mt: 2 }} gap={1}>
                    {/* <Box
                    sx={{
                      paddingInline: "8px",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "1.1em",
                      // color: '#c54097',
                      // color: "#fefefe",
                    }}
                  > */}

                    <a href="https://www.facebook.com/Home-Inspections-105580485123207/">
                      <FacebookIcon sx={{ color: "#0d0f11" }} />
                    </a>

                    {/* </Box> */}
                    <Typography
                      variant="body1"
                      // sx={{
                      //   display: "flex",
                      //   // color: '#c54097',
                      //   color: "#fefefe",
                      // }}
                    >
                      @bodybyjaya
                    </Typography>
                  </Stack>

                  <Stack direction="row" sx={{ mt: 2 }} gap={1}>
                    <a
                      href="https://www.instagram.com/buyerbewarehomeinspections"
                      className="instagram social"
                    >
                      <InstagramIcon sx={{ color: "#0d0f11" }} />
                    </a>
                    <Typography
                      variant="body1"
                      // sx={{
                      //   display: "flex",
                      //   // color: '#c54097',
                      //   color: "#fefefe",
                      // }}
                    >
                      @bodybyjaya
                    </Typography>
                  </Stack>
                </Box>
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
        {/* <Box alignSelf="center" paddingTop="5px">
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
        </Box> */}

        <>
          <AppBar
            position="sticky"
            elevation={0}
            sx={{ backgroundColor: "#0d0f11", pb: 4 }}
          >
            <Box alignSelf="center" paddingTop="5px">
              <CardContent
              // style={{ padding: "0px" }}
              >
                <Typography
                  color="#fefefe"
                  variant="h6"
                  gutterBottom
                  style={{ alignItems: "center", flexWrap: "nowrap" }}
                >
                  Contact us today to schedule! We'd
                  <FavoriteIcon
                    fontSize="1.1rem"
                    // color="#a71976"
                    style={{ paddingInline: "8px" }}
                  />
                  to hear from you!
                </Typography>

                {/* <Divider /> */}
              </CardContent>
            </Box>
            {/* <Box
              display="flex"
              // color="#a71976"
              color="#fefefe"
              alignItems="center"
              flexWrap="wrap"
              // alignContent="center"
            > */}
            {/* <Box textAlign="center" flex="auto" paddingTop="10px"> */}
            <Stack direction="row" justifyContent="space-evenly">
              <Box>
                <Stack direction="row" alignItems="center" gap={1}>
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
                  <FacebookIcon />
                  <InstagramIcon />
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
                      // color: '#c54097',
                      color: "#fefefe",
                    }}
                  >
                    <PhoneAndroidIcon />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      display: "flex",
                      // color: '#c54097',
                      // color: "#fefefe",
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
                      // color: '#c54097',
                      // color: "#fefefe",
                    }}
                  >
                    <EmailIcon />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      display: "flex",
                      // color: '#c54097',
                      color: "#fefefe",
                    }}
                  >
                    bodybyjaya@gmail.com
                  </Typography>
                </Stack>
              </Box>
            </Stack>

            {/* </Box> */}

            {/* 
              <div
                style={{
                  display: "flex",
                  flex: "auto",
                  flexDirection: "column",
                  // alignItems: "center",
                }}
              > */}

            {/* </div> */}
            {/* </Box> */}
          </AppBar>
        </>
      </Container>
    </>
  );
}

export default App;
