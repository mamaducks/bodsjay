import React from "react";
import { AppBarMedia } from "../AppBar/AppBar";
import { Footer } from "../Footer/Footer";
import { Router } from "./Router";

// const useStyles = makeStyles({
//   container: {
//     backgroundColor: "#f3f1f2",
//     overflowX:'hidden'
//   },
//   footer: {
//     backgroundColor: "#e6d1dd",
//   },
// });

export function App() {
  return (
    <>
      <AppBarMedia />

      <div>
        <Router />
      </div>
      <Footer />
    </>
  );
}
