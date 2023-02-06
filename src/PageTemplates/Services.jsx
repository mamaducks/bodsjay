import { Container } from "@mui/system";
import { Box } from "@mui/system";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

import a from "../cavJ.png";
import b from "../radJ.png";
import c from "../laseJ.png";
import d from "../woodJ.png";
import { QuestContact } from "../QuestContact";

// const servicesCard = [
//   {
//     image: a,
//     textFront: "  Cavitation",
//     textBack:
//       "  Lipo Cavitation is a non-surgical, non-invasive technology that utilizes sound waves to break down and eliminate fat cells. This procedure is a safer alternative to surgical options, like liposuction. The treatment uses ultrasonic radio waves to break apart fat cells, which are then absorbed into your body by your lymphatic system. ",
//   },
//   {
//     image: b,
//     textFront: "Laser Lipolysis",
//     textBack:
//       "  Laser lipolysis is a minimally invasive procedure that uses heat from fiber-optic lasers at various wavelengths to melt body fat. The added benefit of laser lipolysis is that it spurs the production of the protein collagen, making skin more taut. ",
//   },
//   {
//     image: c,
//     textFront: "Radio-Frequency",
//     textBack:
//       " Radio Frequency facial skin tightening is a minimally invasive procedure that tightens the skin and improves tone without any pain or downtime. Radio Frequency (RF) facial treatments work by using heat to trigger collagen and elastin production in the skin's deeper levels. ",
//   },
//   {
//     image: d,
//     textFront: "Wood Therapy",
//     textBack:
//       "Wood therapy is a vigorous massage technique that utilizes wooden, handheld tools, such as rolling pins and vacuum-suction cups. Purportedly, wood therapy is centuries old and originated in Asia. Wood therapy increases lymphatic circulation, reducing the appearance of wrinkles and cellulite. ",
//   },
// ];

export function ServicesPage() {
  // const [selected, setSelected] = useState();

  return (
    <Container>
      <div>
        <Typography
          color="textPrimary"
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: "Dosis",
            textAlign: "center",
            fontWeight: 800,
            pt: 4,
          }}
        >
          Our Treatments
        </Typography>
        <Divider />

        <QuestContact />

        <Card sx={{ display: "flex", flexDirection: "column" }}>
          <CardMedia image={a} component="img" sx={{ width: 250 }} />

          <CardContent>
            <Typography
              color="textPrimary"
              // variant="h4"
              gutterBottom
              sx={{ fontFamily: "Podkova", fontWeight: "bold" }}
            >
              Cavitation
            </Typography>
            <Divider />
            <Typography variant="body1" sx={{ maxWidth: 600 }}>
              Lipo Cavitation is a non-surgical, non-invasive technology that
              utilizes sound waves to break down and eliminate fat cells. This
              procedure is a safer alternative to surgical options, like
              liposuction. The treatment uses ultrasonic radio waves to break
              apart fat cells, which are then absorbed into your body by your
              lymphatic system.
            </Typography>
            <div>
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
                  Schedule today
                </Button>
              </Box>
              {/* <InstagramIcon sx={{ color: "#0d0f11" }} /> */}
            </div>
          </CardContent>
        </Card>

        <CardContent>
          {/* <Typography
            variant="h4"
            sx={{ fontFamily: "Dosis", textAlign: "center" }}
          >
            Our Treatments
          </Typography> */}
          {/* <Divider sx={{ marginBottom: 3 }} /> */}

          <CardMedia image={c} component="img" sx={{ width: 250 }} />
          <CardContent>
            <Typography
              color="textPrimary"
              // variant="h4"
              gutterBottom
              sx={{ fontFamily: "Podkova", fontWeight: "bold" }}
            >
              Laser Lipolysis
            </Typography>
            <Divider />
            <Typography variant="body1" sx={{ maxWidth: 600 }}>
              Laser lipolysis is a minimally invasive procedure that uses heat
              from fiber-optic lasers at various wavelengths to melt body fat.
              The added benefit of laser lipolysis is that it spurs the
              production of the protein collagen, making skin more taut. ",
            </Typography>
            <div>
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
                  Schedule today
                </Button>
              </Box>
              {/* <InstagramIcon sx={{ color: "#0d0f11" }} /> */}
            </div>
          </CardContent>

          <CardContent>
            <CardMedia image={b} component="img" sx={{ width: 250 }} />

            <Typography
              color="textPrimary"
              // variant="h4"
              gutterBottom
              sx={{ fontFamily: "Podkova", fontWeight: "bold" }}
            >
              Radio-Frequency
            </Typography>
            <Divider />
            <Typography variant="body1" sx={{ maxWidth: 600 }}>
              " Radio Frequency facial skin tightening is a minimally invasive
              procedure that tightens the skin and improves tone without any
              pain or downtime. Radio Frequency (RF) facial treatments work by
              using heat to trigger collagen and elastin production in the
              skin's deeper levels. ",
            </Typography>
            <div>
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
                  Schedule today
                </Button>
              </Box>
              {/* <InstagramIcon sx={{ color: "#0d0f11" }} /> */}
            </div>
          </CardContent>
          <CardMedia image={d} component="img" sx={{ width: 250 }} />
          <CardContent>
            <Typography
              color="textPrimary"
              // variant="h4"
              gutterBottom
              sx={{ fontFamily: "Podkova", fontWeight: "bold" }}
            >
              Wood Therapy
            </Typography>
            <Divider />
            <Typography variant="body1" sx={{ maxWidth: 600 }}>
              Wood therapy is a vigorous massage technique that utilizes wooden,
              handheld tools, such as rolling pins and vacuum-suction cups.
              Purportedly, wood therapy is centuries old and originated in Asia.
              Wood therapy increases lymphatic circulation, reducing the
              appearance of wrinkles and cellulite.
            </Typography>
          </CardContent>

          {/* <Dialog open={!!selected} onClose={() => setSelected(undefined)}>
            <Box
              justifyContent="space-between"
              padding="25px"
              width="300px"
              letterSpacing={0.3}
            >
              <Box>{selected?.textBack}</Box>
            </Box>
          </Dialog>

          <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {servicesCard.map(({ image, textBack, textFront }, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} title={textBack}>
                <Card
                  onClick={() => setSelected({ image, textBack, textFront })}
                  style={{ margin: "8px", cursor: "pointer" }}
                >
                  <Box justifyContent="center" width="230px" height="180px">
                    <img alt="" src={image} width="50px" height="50px" />

                    <Box>{textFront}</Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid> */}

          <div>
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
                Schedule today
              </Button>
            </Box>
            {/* <InstagramIcon sx={{ color: "#0d0f11" }} /> */}
          </div>
          {/* 
            <Stack direction="row">
              <Card sx={{ m: 3, p: 3 , height:"100%", width:"50rem"}}>
                <Typography
                  gutterBottom
                  sx={{ fontFamily: "Podkova", fontWeight: "bold" }}
                >
                  Cavitation
                </Typography>
                <Typography gutterBottom sx={{ fontFamily: "Arvo" }}>
                  Lipo Cavitation is a non-surgical, non-invasive technology
                  that utilizes sound waves to break down and eliminate fat
                  cells. This procedure is a safer alternative to surgical
                  options, like liposuction. The treatment uses ultrasonic radio
                  waves to break apart fat cells, which are then absorbed into
                  your body by your lymphatic system.
                </Typography>
              </Card>

              <Card sx={{ m: 3, p: 3 , height:"100%", width:"50rem", alignItems:"stretch"}}>
                <Typography sx={{ fontFamily: "Podkova", fontWeight: "bold" }}>
                  Laser Lipolysis
                </Typography>
                <Typography gutterBottom sx={{ fontFamily: "Arvo" }}>
                  Laser lipolysis is a minimally invasive procedure that uses
                  heat from fiber-optic lasers at various wavelengths to melt
                  body fat. The added benefit of laser lipolysis is that it
                  spurs the production of the protein collagen, making skin more
                  taut.
                </Typography>
              </Card>
            </Stack>

            <Stack direction="row">
              <Card sx={{ m: 3, p: 3, mt: 0, width:"230px", height:"180px" }}>
                <Typography sx={{ fontFamily: "Podkova", fontWeight: "bold" }}>
                  Radio-Frequency
                </Typography>
                <Typography gutterBottom sx={{ fontFamily: "Arvo" }}>
                  Radio Frequency facial skin tightening is a minimally invasive
                  procedure that tightens the skin and improves tone without any
                  pain or downtime. Radio Frequency (RF) facial treatments work
                  by using heat to trigger collagen and elastin production in
                  the skin's deeper levels.
                </Typography>
              </Card>

              <Card sx={{ m: 3, p: 3, mt: 0 }}>
                <Typography sx={{ fontFamily: "Podkova", fontWeight: "bold" }}>
                  Wood Therapy
                </Typography>
                <Typography sx={{ fontFamily: "Arvo" }}>
                  Wood therapy is a vigorous massage technique that utilizes
                  wooden, handheld tools, such as rolling pins and
                  vacuum-suction cups. Purportedly, wood therapy is centuries
                  old and originated in Asia. Wood therapy increases lymphatic
                  circulation, reducing the appearance of wrinkles and
                  cellulite.
                </Typography>
              </Card>
            </Stack> */}
        </CardContent>
      </div>
    </Container>
  );
}
