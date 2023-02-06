import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  IconButton,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";

export function AppBarButton() {
  const [goToSection, setGoToSection] = useState(false);

  return (
    <>
      <IconButton onClick={() => setGoToSection(true)}>
        <MenuIcon sx={{ color: "#fefefe" }} />
      </IconButton>

      <Drawer
        anchor="top"
        open={goToSection}
        onClose={() => setGoToSection(false)}
      >
        <Box
          role="presentation"
          // onClick={() => setValue(false)}
        >
          <Grid container direction="row" justifyContent="space-between">
            <Grid
              item
              // xs={6}
              // sm={7}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                fontFamily: "Oswald",
              }}
            >
              <ListItem disableGutters>
                <ListItemButton href="/">
                  <ListItemText
                    primary="Home"
                    primaryTypographyProps={{ fontFamily: "Oswald" }}
                  />

                  <ChevronRightIcon />
                </ListItemButton>
              </ListItem>

              <ListItem disableGutters>
                <ListItemButton href="/services">
                  <ListItemText
                    primary="Treatments"
                    primaryTypographyProps={{ fontFamily: "Oswald" }}
                  />

                  <ChevronRightIcon />
                </ListItemButton>
              </ListItem>

              <ListItem disableGutters>
                <ListItemButton href="/reviews">
                  <ListItemText
                    primaryTypographyProps={{ fontFamily: "Oswald" }}
                    primary="Reviews"
                  />

                  <ChevronRightIcon />
                </ListItemButton>
              </ListItem>
              <ListItem disableGutters>
                <ListItemButton href="/faq">
                  <ListItemText
                    primaryTypographyProps={{ fontFamily: "Oswald" }}
                    primary="Faq"
                  />

                  <ChevronRightIcon />
                </ListItemButton>
              </ListItem>
              <ListItem disableGutters>
                <ListItemButton href="/contact">
                  <ListItemText
                    primaryTypographyProps={{ fontFamily: "Oswald" }}
                    primary="Contact"
                  />

                  <ChevronRightIcon />
                </ListItemButton>
              </ListItem>
              {/* <Box style={{ display: "flex", alignSelf: "center" }}>
          <Button onClick={handleClose}>Close</Button>
              </Box> */}
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </>
  );
}
