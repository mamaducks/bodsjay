import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  IconButton,
  Button,
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
              }}
            >
              <ListItem disableGutters>
                <ListItemButton href="/Home">
                  <ListItemText> Home</ListItemText>

                  <ChevronRightIcon />
                </ListItemButton>
              </ListItem>

              <ListItem disableGutters>
                <ListItemButton href="Treatments">
                  <ListItemText> Treatments</ListItemText>

                  <ChevronRightIcon />
                </ListItemButton>
              </ListItem>

              <ListItem disableGutters>
                <ListItemButton href="/Reviews">
                  <ListItemText> Reviews</ListItemText>

                  <ChevronRightIcon />
                </ListItemButton>
              </ListItem>
              <ListItem disableGutters>
                <ListItemButton href="/Faq">
                  <ListItemText> Faq</ListItemText>

                  <ChevronRightIcon />
                </ListItemButton>
              </ListItem>
              <ListItem disableGutters>
                <ListItemButton href="/Contact">
                  <ListItemText> Contact</ListItemText>

                  <ChevronRightIcon />
                </ListItemButton>
              </ListItem>
              <Box style={{ display: "flex", alignSelf: "center" }}>
                <Button>Close</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </>
  );
}
