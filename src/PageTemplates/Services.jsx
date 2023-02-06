import { Container } from "@mui/system";
import { Box } from "@mui/system";

import {
  Button,
  CardContent,
  CardMedia,
  Divider,
  Stack,
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

function ServiceLayout({ image, header, content }) {
  return (
    <CardContent>
      <Box display="flex" justifyContent="center">
        <CardMedia image={image} component="img" sx={{ width: 290 }} />
      </Box>
      <CardContent sx={{ marginBottom: 2, mt: 3 }}>
        <Typography
          color="textPrimary"
          variant="h5"
          gutterBottom
          sx={{ fontFamily: "Dosis", fontWeight: "bold" }}
        >
          {header}
        </Typography>
        <Divider />
        <Typography variant="body1" sx={{ maxWidth: 600 }}>
          {content}
        </Typography>
      </CardContent>

      <CardContent>
        <div>
          <Box display="flex" justifyContent="center" sx={{ mt: 2, mb: 3 }}>
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
              Schedule Online
            </Button>
          </Box>
        </div>
      </CardContent>
    </CardContent>
  );
}

export function ServicesPage() {
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
        <br />
        <br />

        <QuestContact />

        <Stack sx={{ mt: 5 }}>
          <CardContent sx={{ maxWidth: 600, alignSelf: "center" }}>
            <ServiceLayout
              image={a}
              header="Cavitation"
              content=" Lipo Cavitation is a non-surgical, non-invasive technology that
                utilizes sound waves to break down and eliminate fat cells. This
                procedure is a safer alternative to surgical options, like
                liposuction. The treatment uses ultrasonic radio waves to break
                apart fat cells, which are then absorbed into your body by your
                lymphatic system."
            />

            <ServiceLayout
              image={c}
              header="Laser Lipolysis"
              content="Laser lipolysis is a minimally invasive procedure that uses heat
              from fiber-optic lasers at various wavelengths to melt body fat.
              The added benefit of laser lipolysis is that it spurs the
              production of the protein collagen, making skin more taut."
            />

            <ServiceLayout
              image={b}
              header="Radio-Frequency"
              content=" Radio Frequency facial skin tightening is a minimally invasive
              procedure that tightens the skin and improves tone without any
              pain or downtime. Radio Frequency (RF) facial treatments work by
              using heat to trigger collagen and elastin production in the
              skin's deeper levels."
            />

            <ServiceLayout
              image={d}
              header="Wood Therapy"
              content=" Wood therapy is a vigorous massage technique that utilizes
              wooden, handheld tools, such as rolling pins and vacuum-suction
              cups. Purportedly, wood therapy is centuries old and originated
              in Asia. Wood therapy increases lymphatic circulation, reducing
              the appearance of wrinkles and cellulite."
            />
          </CardContent>
        </Stack>
      </div>
    </Container>
  );
}
