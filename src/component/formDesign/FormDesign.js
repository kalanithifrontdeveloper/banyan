import React from 'react';
import { Grid, Box, FormGroup, FormLabel, TextField, Button, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import GroupImage from '../../assets/Group.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import Logo from '../../assets/banyan_logo.png';

const YourComponent = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
  };

  return (
    <Grid container>
      <Box
        elevation={0}
        sx={{
          backgroundImage: `url(${GroupImage})`,
          backgroundSize: 'cover',
          maxWidth: "100%",
          padding: isSmallScreen ? '2rem 1rem' : '3rem',
          boxSizing: 'border-box',
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={10} lg={8} sx={{ mt: 10, p: 5 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={isSmallScreen ? 1 : 2}>
                {/* Name and Mobile Number */}
                <Grid item xs={12} md={4} lg={4}>
                  <FormGroup sx={{ mt: 2 }}>
                    <FormLabel sx={{ color: 'white' }}>Name</FormLabel>
                    <TextField
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        sx: { borderBottom: '1px solid white' },
                      }}
                      fullWidth
                    />
                  </FormGroup>
                </Grid>

                <Grid item xs={12} md={4} lg={4}>
                  <FormGroup sx={{ mt: 2 }}>
                    <FormLabel sx={{ color: 'white' }}>Mobile Number</FormLabel>
                    <TextField
                      name="mobile"
                      type="number"
                      value={formData.mobile}
                      onChange={handleChange}
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        sx: { borderBottom: '1px solid white' },
                      }}
                      fullWidth
                    />
                  </FormGroup>
                </Grid>

                <Grid item xs={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: isSmallScreen ? 'center' : 'flex-start', mt: 2 }}>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="error"
                    sx={{
                      backgroundColor: 'white',
                      width: isSmallScreen ? '100%' : '50%',
                      borderRadius: '20px',
                      border: 'none',
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>

              {/* Second Line: Email and Message */}
              <Grid container spacing={isSmallScreen ? 1 : 2}>
                <Grid item xs={12} md={6} lg={6}>
                  <FormGroup sx={{ mt: 2 }}>
                    <FormLabel sx={{ color: 'white' }}>Email</FormLabel>
                    <TextField
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        sx: { borderBottom: '1px solid white' },
                      }}
                      fullWidth
                    />
                  </FormGroup>
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <FormGroup sx={{ mt: 2 }}>
                    <FormLabel sx={{ color: 'white' }}>Message</FormLabel>
                    <TextField
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        sx: { borderBottom: '1px solid white' },
                      }}
                      fullWidth
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>

        {/* Footer Section */}
        <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', mt: 6, padding: 4 }}>
          <Grid item xs={12} md={2} lg={2}>
            <Box component="img" src={Logo} sx={{ maxWidth: '100%' }} />
          </Grid>

          <Grid item xs={12} md={2} lg={2} textAlign="center">
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'darkorange' }}>Phone Number</Typography>
            <Typography variant="body1">92445-83321</Typography>
          </Grid>

          <Grid item xs={12} md={2} lg={2} textAlign="center">
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'darkorange' }}>Email Address</Typography>
            <Typography variant="body1">hr@banyaninfotech.com</Typography>
            <Typography variant="body1">support@banyaninfotech.com</Typography>
          </Grid>

          <Grid item xs={12} md={2} lg={2} textAlign="center">
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'darkorange' }}>Our Location</Typography>
            <Typography variant="body1">
              9/32 Vasantham Nagar, <br />
              Kovaipudur, Coimbatore, <br />
              Tamil Nadu, India-641042
            </Typography>
          </Grid>

          <Grid item xs={12} md={2} lg={2} textAlign="center">
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'darkorange' }}>Follow Us</Typography>
            <Box display="flex" gap={2} justifyContent="center">
              <FacebookOutlinedIcon />
              <InstagramIcon />
              <XIcon />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default YourComponent;
