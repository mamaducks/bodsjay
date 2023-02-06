import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function QuestContact() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {/* <CardContent
      // style={{ padding: "0px" }}
      
      > */}
      <Typography
        // color="#fefefe"
        variant="body1"
        gutterBottom
        fontFamily="Oswald"
        style={{ alignItems: "center", flexWrap: "nowrap" }}
      >
        Have Questions? Contact us today. We'd
      </Typography>

      <FavoriteIcon
        // fontSize="1.1rem"
        // color="#a71976"
        style={{
          paddingInline: "8px",
          textAlign: "center",
          display: "flex",
          paddingBottom: 5,
        }}
      />
      <Typography
        // color="#fefefe"
        variant="body1"
        gutterBottom
        fontFamily="Oswald"
        style={{ alignItems: "center", flexWrap: "nowrap" }}
      >
        to hear from you!
      </Typography>

      {/* <Divider /> */}
      {/* </CardContent> */}
    </Box>
  );
}
