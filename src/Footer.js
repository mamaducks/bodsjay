import { AppBar, Box, Typography } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
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
  );
};
