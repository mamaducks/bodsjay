import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

// export const StyledAppBarColor = styled(AppBar)({
//     backgroundColor: "#101010",
//     justifyContent: "space-between",
//   });

  export const StyledLogoText = styled(Typography)({
    alignSelf: "flex-end",
    paddingBottom: 1,
    paddingLeft: 3,
    fontWeight: "bold",
    // fontFamily: " 'Poppins', sans-serif",
    color: "#197982",
    // textAlign: "center",
  });

export function ShowSmall({ children }) {
    return (
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        {children}
      </Box>
    );
  }

  export function NoShowSmall({ children }) {
    return (
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
      >
        {children}
      </Box>
    );
  }