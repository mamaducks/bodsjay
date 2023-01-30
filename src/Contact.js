import { Container, Stack } from "@mui/material";
//   import { ContactMap } from "./ContactMap/ContactMap";
//   import { ContactHeader } from "./ContactHeader";
//   import { ContactQuestions } from "./ContactQuestions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const styles = {
  hrInfo: {
    lineHeight: "2",
  },
  hours: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  grid: {
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    fontWeight: "lighter",
    "& div": {
      fontWeight: "bold",
      paddingInline: "10px",
      color: "#494649",
    },
  },
};

export const Contact = () => {
  return (
    <Container>
      {/* <ContactHeader/> */}
      <CardContent>
        <Typography color="textPrimary" variant="h5">
          Contact
        </Typography>
        <Divider />
        <Typography
          variant="subtitle1"
          component="p"
          // style={{ fontWeight: "300", fontSize: "1.1rem" }}
        >
          Hours
        </Typography>
      </CardContent>

      {/* <ContactMap /> */}
      <div>
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

      {/* <ContactQuestions /> */}
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
    </Container>
  );
};
