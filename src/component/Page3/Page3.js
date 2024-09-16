import * as React from 'react';
import { Paper, Grid, Typography, Box } from '@mui/material';
import imageThree from '../../assets/img_three.png';
import gifTwo from '../../assets/giftwo.png';

export default function ViewComponent3() {
  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center",marginLeft:"120px", marginTop:"100px"}}>
    <Grid container spacing={2} >
      {/* Image Section */}
      <Grid item xs={12} md={3} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          component="img"
          sx={{
            height: '40vh',
            maxWidth: '100%',
          }}
          alt="Sample Image"
          src={imageThree}
        />
      </Grid>

      {/* Text Section */}
      <Grid item xs={12} md={3} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            position: 'relative',
            padding: '10px',
            maxWidth:"100%",
            height: 'auto',
            borderRadius: '10px',
            background: `
              conic-gradient(from 90deg at top 4px left 4px, rgba(0,0,0,0) 90deg, red 0) 0 0 / 20px 20px border-box no-repeat,
              conic-gradient(from 0deg at bottom 4px left 4px, rgba(0,0,0,0) 90deg, red 0) 0 100% / 20px 20px border-box no-repeat`,
          }}
        >
          <Typography
            variant="h5"
            color="error"
            sx={{ mb: 3, fontSize: '24px', fontWeight: 'bold', textAlign: 'center', mt: 2 }}
          >
           Web Development
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'justify', padding:"10px" }}>
            The Banyan Infotech is the best web design company in Coimbatore. We offer services like web design, web development, and WordPress development. Our services include:
          </Typography>
        </Box>
      </Grid>

      {/* Services Section */}
      <Grid item xs={12} md={5} lg={3}>
        <Box>
          {['ERP Development', 'CRM Development', 'HRM Development', 'E-Commerce Development'].map((service, index) => (
            <Paper
              key={index}
              sx={{
                backgroundColor: ['#e09b8f', '#ffddad', 'lightgreen', '#8fd3e0'][index],
                padding: '10px',
                marginBottom: '10px',
                textAlign: 'center',
                borderTopRightRadius: '20px',
                borderBottomRightRadius: '20px',
                width: '35%',
              }}
            >
              <Typography variant="body1">{service}</Typography>
            </Paper>
          ))}
        </Box>
      </Grid>

      {/* GIF Section */}
      <Grid item xs={12} md={2} lg={2}>
        <Box
          component="img"
          sx={{
            maxWidth: 100,
            position:"relative",
            top: "130px",
            right: "250px"
          }}
          alt="Gif Image"
          src={gifTwo}
        />
      </Grid>
    </Grid>
    </Box>
  );
}
