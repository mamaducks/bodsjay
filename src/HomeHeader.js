import shapesBod from './shapesbod.png';
import circJaya from './circjaya.png';
import grimgJaya from './grimgjaya.png';

import { Box, Container } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Button, Paper, Typography } from '@mui/material';

const styles = {
    container: {
        width: "100vw",
        height: "auto",
      display: "flex",
      alignItems: "center",
      backgroundImage: `url(${shapesBod})`,
      backgroundSize: "cover",
    //   backgroundSize: "100% auto",
      
    },
    box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    //   width: "300px",
    //   height: "500px",
    //   margin: "auto",
      alignItems: "center",
  border: "1px solid rgba(0, 0, 0, 0.12)",


    }
  };


export function HomeHeader () {
return (
  




<Box style={styles.container}>
    {/* <Grid> */}


<Box style={styles.box}>

<Typography
         variant="h4"
         fontSize="large"
         // sx={{ fontWeight: 900 }}
       >
         Body
       </Typography>

       <Typography
         variant="h4"
         fontSize="large"
         // sx={{ fontWeight: 900 }}
       >
         by Jaya
       </Typography>     

 </Box>


    {/* </Grid> */}

</Box>
 
   
)
}