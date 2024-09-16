import * as React from 'react';
import { Box, Typography, Button, Grid, useMediaQuery, useTheme } from '@mui/material';
import imageone from '../../assets/img_one.png';
import background from '../../assets/background.png';
import banyanLogo from '../../assets/banyan_logo.png';

function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isVerySmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Grid container>
      {/* Background Section */}
      <Grid item xs={12}>
        <Box
          elevation={0}
          sx={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            position: 'relative',
             minHeight: '50vh',
            width:'75%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Logo and Menu Section */}
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              flexWrap: 'wrap',
            }}
          >
            {/* Logo Section */}
            <Grid item xs={12} md={4} sx={{ display: 'flex', marginBottom: isSmallScreen ? '20px' : '0' }}>
              <Box
                component="img"
                sx={{
                  maxHeight: isSmallScreen ? '8vh' : '10vh',
                  width: '200px',
                }}
                alt="Banyan Logo"
                src={banyanLogo}
              />
            </Grid>

            {/* Menu Section */}
            <Grid item xs={12} md={7}>
              <Box
                component="ul"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  listStyle: 'none',
                  margin: 'auto',
                  flexWrap: 'wrap',
                  color: 'white',
                  fontSize: '14px',
                }}
              >
                <Box component="li" sx={{ margin: isVerySmallScreen ? '10px' : '0' }}>Web Development</Box>
                <Box component="li" sx={{ margin: isVerySmallScreen ? '10px' : '0' }}>Web Design</Box>
                <Box component="li" sx={{ margin: isVerySmallScreen ? '10px' : '0' }}>Mobile Development</Box>
                <Box component="li" sx={{ margin: isVerySmallScreen ? '10px' : '0' }}>Contact Us</Box>
              </Box>
            </Grid>
        </Grid>

         <Grid>
         <Grid item xs={12} md={5} lg={4}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bolder',
                color: 'white',
                fontSize: isSmallScreen ? '24px' : '32px',
                 mt:10,
                padding:"20px"

              }}
            >
              BUILDING THE DIGITAL FUTURE
            </Typography>
            <Typography
              variant="body1"
              sx={{
                
                color: 'white',
                fontSize: isSmallScreen ? '12px' : '16px',
                
              }}
            >
              Our core expertise focuses on web design, web development, mobile applications, and digital marketing, especially where they all converge.
            </Typography>
            <Box>
              <Button
                variant="outlined"
                sx={{
                  marginTop: 6,
                  borderRadius: '20px',
                  padding:"20px",
                  mb: 2,
                  width:"50%",
                  paddingX: 3,
                  paddingY: 1,
                  backgroundColor: 'white',
                  color: 'red',
                  border: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.9)',
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent:'center'  }}>
        <Box
          component="img"
          sx={{
            height: '50vh',
            width:"auto",
            maxWidth: "100%",
            position: 'absolute',
            top: '100px',
            left: "650px",
          }}
          alt="Image Description"
          src={imageone}
        />
      </Grid>
         </Grid>
          
        </Box>
      </Grid>

      {/* Image Section */}
  
    </Grid>
  );
}

export default Header;
