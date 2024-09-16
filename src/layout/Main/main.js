import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Grid, Box, Grid2 } from '@mui/material';
import ViewComponent2 from '../../component/Pages2/PageTwo';
import ViewComponent3 from '../../component/Page3/Page3';
import ViewComponent4 from '../../component/Page4/PageFour';
import ViewComponent5 from '../../component/page5/PageFive';
import Process from '../../component/Process/Process';
import FormDesign from '../../component/formDesign/FormDesign';

function Main() {
  return (
   
<>
<Header />

<ViewComponent2 />

<ViewComponent3 />

<ViewComponent4 />

<ViewComponent5 />

<Process />



<FormDesign />



<Footer />
</>
        
    
     
 
  );
}

export default Main;
