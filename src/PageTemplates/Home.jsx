import { Container } from "@mui/system";

import circJaya from "../circjaya.png";
import grimgJaya from "../grimgjaya.png";

// import "./App.css";
import { Box } from "@mui/system";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import { React, useState } from "react";
import a from "../cavJ.png";
import b from "../radJ.png";
import c from "../laseJ.png";
import d from "../woodJ.png";
import { NoShowSmall } from "../MediaBox";

const servicesCard = [
  {
    image: a,
    header: "Cavitation",
    textFront: "Break down and eliminate fat cells",
    textBack:
      "  Lipo Cavitation is a non-surgical, non-invasive technology that utilizes sound waves to break down and eliminate fat cells. This procedure is a safer alternative to surgical options, like liposuction. The treatment uses ultrasonic radio waves to break apart fat cells, which are then absorbed into your body by your lymphatic system. ",
  },
  {
    image: c,
    header: "Laser Lipolysis",
    textFront: "Melt away body fat and make skin more taut",
    textBack:
      "  Laser lipolysis is a minimally invasive procedure that uses heat from fiber-optic lasers at various wavelengths to melt body fat. The added benefit of laser lipolysis is that it spurs the production of the protein collagen, making skin more taut. ",
  },
  {
    image: b,
    header: "Radio-Frequency",
    textFront:
      "Tighten skin and improve skin tone without any pain or downtime",
    textBack:
      " Radio Frequency facial skin tightening is a minimally invasive procedure that tightens the skin and improves tone without any pain or downtime. Radio Frequency (RF) facial treatments work by using heat to trigger collagen and elastin production in the skin's deeper levels. ",
  },
  {
    image: d,
    header: "Wood Therapy",
    textFront: "Reduces the appearance of wrinkles and cellulite",
    textBack:
      "Wood therapy is a vigorous massage technique that utilizes wooden, handheld tools, such as rolling pins and vacuum-suction cups. Purportedly, wood therapy is centuries old and originated in Asia. Wood therapy increases lymphatic circulation, reducing the appearance of wrinkles and cellulite. ",
  },
];

export function HomePage() {
  const [selected, setSelected] = useState();

  return (
    <>
      <Container maxWidth="md">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-around"
          pt={4}
        >
          <NoShowSmall>
            <img
              alt=""
              src={circJaya}
              width="45%"
              height="auto"
              style={{
                alignSelf: "center",
                minWidth: 350,
                paddingBlock: "10px",
                marginInline: 20,
                // alignItems: "center",
              }}
            />
          </NoShowSmall>

          <Box alignSelf="center" sx={{ maxWidth: 350, alignItems: "center" }}>
            <Typography color="textPrimary" variant="h3" fontFamily="Dosis">
              Body Sculpting
            </Typography>
            <Divider />
            <Typography fontFamily="Oswald" sx={{ pt: 1, fontSize: "1.1rem" }}>
              Body sculpting is a unique, stand alone procedure that targets
              stubborn, hard to get rid of fat pockets without any downtime,
              pain, or side effects. Discover a superior solution to improve the
              appearance of cellulite, improve elasticity and firmness of skin,
              and help target specific areas.
            </Typography>

            <ul
              style={{
                // listStyleType: "square",
                fontWeight: 300,
                lineHeight: 1.5,
                fontSize: "1.2rem",
                fontFamily: "Oswald",
                // letterSpacing: 1,
              }}
            >
              <li>Same day results</li>
              <li>no surgery</li>
              <li>no pain</li>
              <li>no downtime </li>
            </ul>

            <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
              <Button
                href="https://bodybyjaya.as.me/schedule.php"
                variant="contained"
                sx={{
                  backgroundColor: "#101010",
                  "&:hover": {
                    backgroundColor: "#a2a2a2",
                  },
                }}
              >
                Schedule Now
              </Button>
            </Box>
          </Box>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-around"
          pt={4}
        >
          <Box
            sx={{ maxWidth: 350, alignItems: "center", alignSelf: "center" }}
          >
            <Typography
              color="textPrimary"
              variant="h3"
              fontFamily="Dosis"
              // fontWeight={300}
              sx={
                {
                  // fontFamily: "Dosis",
                  // textAlign: "center",
                  // fontWeight: 800,
                }
              }
            >
              Transform
            </Typography>
            <Divider />
            <Typography fontFamily="Oswald" sx={{ pt: 1, fontSize: "1.1rem" }}>
              Enjoy full-body confidence with this safe, non-invasive procedure
              that has zero down-time and is completely painless.
            </Typography>

            <ul
              style={{
                // listStyleType: "square",
                fontFamily: "Oswald",
                fontWeight: 300,
                lineHeight: 1.5,
                fontSize: "1.1rem",
              }}
            >
              <li>Eliminate stubborn fat pockets</li>
              <li>Reduce and smooth cellulite</li>
              <li>Sculpt and reshape your body</li>
              <li>Tighten and tone loose, sagging skin</li>
              <li>Improve skin elasticity and firmness</li>
            </ul>

            <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
              <Button
                href="https://bodybyjaya.as.me/schedule.php"
                variant="contained"
                sx={{
                  backgroundColor: "#101010",
                  "&:hover": {
                    backgroundColor: "#a2a2a2",
                  },
                }}
              >
                Schedule Now
              </Button>
            </Box>
          </Box>

          <NoShowSmall>
            <img
              alt=""
              src={grimgJaya}
              width="45%"
              height="auto"
              style={{
                alignSelf: "center",
                minWidth: 350,
                paddingBlock: "10px",
                marginInline: 20,
              }}
            />
          </NoShowSmall>
        </Stack>
      </Container>
      <Container maxWidth="xl">
        <Typography
          color="textPrimary"
          variant="h4"
          // gutterBottom
          sx={{
            // fontFamily:"Oswald",
            fontFamily: "Dosis",
            textAlign: "center",
            fontWeight: 800,
            pt: 4,
          }}
        >
          Our Treatments
        </Typography>
        <Divider />

        <Dialog open={!!selected} onClose={() => setSelected(undefined)}>
          <Box
            justifyContent="space-between"
            padding="25px"
            width="300px"
            letterSpacing={0.3}
          >
            <Box fontFamily="Oswald">{selected?.textBack}</Box>
          </Box>
        </Dialog>

        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          mt={2}
        >
          {servicesCard.map(({ image, header, textBack, textFront }, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} title={textBack}>
              <Card
                onClick={() =>
                  setSelected({ image, header, textBack, textFront })
                }
                style={{
                  margin: "8px",
                  cursor: "pointer",
                  height: 290,
                  width: "100%",
                }}
              >
                {/* <Box justifyContent="center" width="230px" height="180px"> */}
                {/* <CardMedia
                  image={image}

                  sx={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                     backgroundImage: `url(${image})`
                  }}
                  // width="100%"
                  height={150}
                  title={header}
                /> */}
                <img alt="" src={image} width="100%" height="180px" />
                <CardContent
                  sx={{
                    // alignItems: "stretch",
                    // display: "flex",
                    // flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Box textAlign="center" fontFamily="Dosis">
                    {header}
                  </Box>

                  <Box fontFamily="Oswald" textAlign="center">
                    {textFront}
                  </Box>
                </CardContent>

                {/* </Box> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box display="flex" justifyContent="center" sx={{ my: 2 }}>
        <Typography fontFamily="Oswald">
          <Link href="/services" mr={0.5} color="#101010">
            Learn more
          </Link>
          about our treatments
        </Typography>
      </Box>
    </>
  );
}
