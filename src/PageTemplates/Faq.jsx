import { Container } from "@mui/system";
import { Divider, Stack, Typography } from "@mui/material";
import { QuestContact } from "../QuestContact";

export function FaqPage() {
  return (
    <Container maxWidth="sm">
      <Stack my={4}>
        <p>
          <Typography gutterBottom variant="h4" sx={{ fontFamily: "Dosis", textAlign:"center" }}>
            Faqs
          </Typography>
          <Divider />

          <QuestContact />

          <Typography gutterBottom sx={{ fontFamily: "Podkova", fontWeight: "bold", mt: 2 }}>
            What is the difference between cavitation and radio frequency?
          </Typography>
          <Typography gutterBottom sx={{ fontFamily: "Arvo" }}>
            Ultrasound Cavitation uses scientifically proven non-invasive
            technology to break down unwanted fat whilst radio frequency is a
            non-invasive heat treatment that helps tighten, contour, and refine
            deeper lines of the skin over the face and body.
          </Typography>
          <Typography gutterBottom sx={{ fontFamily: "Podkova", fontWeight: "bold", mt: 2 }}>
            Who is an ideal candidate for body sculpting?
          </Typography>
          <Typography gutterBottom sx={{ fontFamily: "Arvo" }}>
            An ideal candidate is in overall good health, doesn't smoke, and is
            already within 15 lbs. of their goal weight.
          </Typography>
          <Typography gutterBottom sx={{ fontFamily: "Podkova", fontWeight: "bold", mt: 2 }}>
            How many sessions will I need? How long will it take to see results?
          </Typography>
          <Typography gutterBottom sx={{ fontFamily: "Arvo" }}>
            Every person is different. Some will require as few as 3 sessions
            and some will need up to 9 and more. Although you may not see an
            immediate difference, results are gradual over the next few weeks as
            your body excretes the broken-down fatty tissues through the
            lymphatic system. Full results take about 3-4 months. This all
            depends on body mass, body circumference, and body size.
          </Typography>
        </p>
      </Stack>
    </Container>
  );
}
