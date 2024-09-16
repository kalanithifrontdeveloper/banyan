import React from 'react';
import { Box, Grid, Typography, Paper, useMediaQuery, useTheme } from '@mui/material';

import imageThree from '../../assets/img_two.png';

export default function ViewComponent2() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
      <Grid container spacing={2} maxWidth="lg">

        {/* Text Section */}
        <Grid item xs={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              position: 'relative',
              padding: '10px',
              maxWidth: "100%",
              minHeight: "auto",
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
              Web Design
            </Typography>
            <Typography variant="body1" gutterBottom style={{ textAlign: 'justify', padding: "10px" }}>
              The Banyan Infotech is the best web design company in Coimbatore. We offer services like web design, web development, and WordPress development. Our services include:
            </Typography>
          </Box>
        </Grid>

        {/* Services Section */}
        <Grid item xs={12} md={3} lg={4}>
          <Box>
            {['Responsive web Design', 'Static web design', 'WordPress development'].map((service, index) => (
              <Paper
                key={index}
                sx={{
                  backgroundColor: ['#e09b8f', '#ffddad', 'lightgreen', '#8fd3e0'][index],
                  padding: '10px',
                  marginBottom: '10px',
                  height: 'auto',
                  borderTopRightRadius: '20px',
                  borderBottomRightRadius: '20px',
                  textAlign: 'center',
                  width: isSmallScreen ? "100%" : "40%", // Adjust based on screen size
                }}
              >
                <Typography variant="body1">{service}</Typography>
              </Paper>
            ))}
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={3} lg={4}>
          <Box
            component="img"
            sx={{
              height: '40vh',
              maxWidth: '100%',
              objectFit: 'cover',
            }}
            alt="Sample Image"
            src={imageThree}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
