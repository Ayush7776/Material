import { Button, Grid, Typography, Box } from '@mui/material'
import React from 'react'
import Cake from '../images/thecake.jpg'
function GriedSystem() {
  return (
    <Grid container direction='row' alignItems='center' marginTop='25px'>
      <Grid item xs={12} sm={6} order={{xs:2,sm:1}}>
        <Typography variant="h3">
          Cake Makers
        </Typography>
        <Typography variant='h5'>
        Providing You Happy Moments
        </Typography>
        <Button size='large' variant='contained' sx={{ borderRadius: 5 }}>
          Know More
        </Button>
      </Grid>
      <Grid container item xs={12} sm={6} justifyContent='center' order={{xs:2,sm:1}}>
        <Box component='img' src={Cake} style={{height:'400px',width:'600px'}} />
      </Grid>
    </Grid>
  )
}

export default GriedSystem