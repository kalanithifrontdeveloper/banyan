import * as React from 'react';
import {
  Typography,
  Link,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export default function Footer() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Small screens (mobile)
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg')); // Large screens

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            backgroundColor: 'lightslategray',
            p: 2, // Adjust padding based on screen size
            textAlign: isSmallScreen ? 'center' : 'left', // Center text on small screens, left-align otherwise
          }}
        >
          {'© '}
          {new Date().getFullYear()}
          <Link
            color="inherit"
            href="#"
            sx={{
              textDecoration: 'none',
              ml: isSmallScreen ? 0 : 1, // Remove left margin for small screens
            }}
          >
            Banyan Infotech. All rights reserved.
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
