import { Grid, Typography, Box, Paper } from "@mui/material";
import IconsOne from '../../assets/IconsOne.png';
import IconsTwo from '../../assets/IconsTwo.png';
import IconsThree from '../../assets/IconsThree.png';
import gifone from '../../assets/gifone.png';

function Process() {
  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"100px"}}>
      <Grid container spacing={2} maxWidth="lg">

        <Grid item>
              <Box
                component="img"
                sx={{
                  maxWidth: 100,
                  height: 'auto',
                }}
                alt="Sample Image"
                src={gifone}
              />
        </Grid>
      
        <Grid item style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Grid item>
           <Box
                component="img"
                sx={{
                
                  width:"50px",
                  ml: 8
                }}
                alt="Sample Image"
                src={IconsTwo}
              />
          </Grid>
          <Grid item style={{marginLeft:"15px"}}>
            <Typography variant="h6" sx={{ fontSize: 24, fontWeight: 'bold' }}>1500+</Typography>
            <Typography variant="body1">Clients Served</Typography>
          </Grid>   
        </Grid>

-

        <Grid item style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Grid item>
            <Box
                component="img"
                sx={{
                
                  width:"50px",
                  ml: 15
                }}
                alt="Sample Image"
                src={IconsOne}
              />
          </Grid>
          <Grid item style={{marginLeft:"15px"}}>
             <Typography variant="h6" sx={{ fontSize: 24, fontWeight: 'bold' }}>3250+</Typography>
             <Typography variant="body1">Projects</Typography>
          </Grid>
        </Grid> 



        <Grid item style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Grid item>
          <Box
                component="img"
                sx={{
                
                  width:"50px",
                  ml: 15
                  
                }}
                alt="Sample Image"
                src={IconsThree}
              />
          </Grid>
          <Grid item style={{marginLeft:"15px"}}>
          <Typography variant="h6" sx={{ fontSize: 24, fontWeight: 'bold' }}>20+</Typography>
          <Typography variant="body1">Years of Experience</Typography>
          </Grid>
        </Grid>


     </Grid>
</Box>
  );
}

export default Process;