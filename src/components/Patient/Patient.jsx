import { Card, CardContent, Typography, Box, Divider, Button, Grid, Stack} from  '@mui/material';
import { useState, useEffect } from 'react';
import './Patient.css'
import axios from 'axios';

export default function Patient() {
  
  const [items, setItems] = useState({});
  const [state, setState] = useState(false);
  useEffect(() => {

    getPatientDetails();
    
  }, [])

  const  getPatientDetails = async () => {
                 await axios.get('https://619f39821ac52a0017ba467e.mockapi.io/patientDetails')
                             .then(res => {
                                        //const data = JSON.parse(res.data)
                                        setItems(res.data);
                                        setState(true);
                                        console.log(items)
                                })
                             .catch(err => {
                                    console.log(err)
                                })
  }
  console.log(items);
  return (
      <>
    
    <div className = "patient-container">
         
        <Card className = 'patient'>
        {state ?(<CardContent>
            <img src = {require('../../images/d1.jpeg')} className = "image-patient"/>
            <Typography variant='h4' component='h2' sx = {{fontWeight: 'bold', fontSize: 20}}>
             {items[0].name}  
            </Typography>
            <Typography variant='subtitle1' sx = {{color: 'gray', fontSize: 10, ml: 0.5}}>
                diane.cooper@example.com
            </Typography>
            <Box sx = {{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', mt: 1, mb: 1}}>
                <Box sx = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mr: 4}}>
                <Typography variant='h4' component='h2' sx = {{fontWeight: 'bold', fontSize: 15}}>
                {items[0].Past}
                </Typography>
                <Typography variant='subtitle1' sx = {{color: 'gray', fontSize: 8}}>
                    Past
                </Typography>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box sx = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', ml: 2}}>
                <Typography variant='h4' component='h2' sx = {{fontWeight: 'bold', fontSize: 15}}>
                {items[0].Upcoming}
                </Typography>
                <Typography variant='subtitle1' sx = {{color: 'gray', fontSize: 8}}>
                    Upcoming
                </Typography>
                </Box>
            </Box>
                <Button variant="outlined" sx={{fontSize:8,width: 120, height:25, display: 'flex', alignItems: 'center', justifyContent: 'flex-stretch',color: 'gray', borderColor: 'gray', mt:2}}>Send Message</Button>
            </CardContent>) : null}
        </Card>
        <Card className = 'patient- details' sx={{width: 600, ml: 1, mr:1}}>
        {state ?(<Grid container direction="column" spacing={2} paddingTop={2} paddingRight={1} paddingLeft={1} paddingBottom={2}>
                <Grid container item direction="row" rowSpacing={2}>
                    <Grid item xs={4}>
                        <Typography variant='subtitle1' className='detail'sx={{fontSize:14}}>
                            Gender
                        </Typography>
                        <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                        {items[0].Gender}
                        </Typography>
                        <Divider sx={{mt:2, mb:1, mr:2}} />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='subtitle1'className='detail'sx={{fontSize:14}}>
                            Birthday
                        </Typography>
                        <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                        {items[0].Birthday}
                        </Typography>
                        <Divider sx={{mt:2, mb:1, mr:2}} />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='subtitle1' className='detail'sx={{fontSize:14}}>
                            Phone Number
                        </Typography>
                        <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                        (259) 555-0108
                        </Typography>
                        <Divider sx={{mt:2, mb:1, mr:2}} />
                    </Grid>
                </Grid>
                <Grid container item direction="row" rowSpacing={2}>
                    <Grid item xs={4}>
                        <Typography variant='subtitle1'className='detail'sx={{fontSize:14}}>
                            Street Address
                        </Typography>
                        <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                        {items[0].Gender}
                        </Typography>
                        <Divider sx={{mt:2, mb:1, mr:2}} />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='subtitle1' className='detail'sx={{fontSize:14}}>
                            City
                        </Typography>
                        <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                            Cilacap
                        </Typography>
                        <Divider sx={{mt:2, mb:1, mr:2}} />
                    </Grid>
                    <Grid item xs={4} >
                        <Typography variant='subtitle1' className='detail'sx={{fontSize:14}}>
                            Zip Code
                        </Typography>
                        <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                            655849
                        </Typography>
                        <Divider sx={{mt:2, mb:1, mr:2}} />
                    </Grid>
                </Grid>
                <Grid container item direction="row" rowSpacing={2}>
                <Grid item xs={4} >
                        <Typography variant='subtitle1' className='detail'sx={{fontSize:14}}>
                            Member Status
                        </Typography>
                        <Typography variant='subtitle1' className='text-field' sx={{fontSize:12}}>
                            Active Member
                        </Typography>
                        <Divider sx={{mt:2, mb:1, mr:2}} />
                    </Grid>
                    <Grid item xs={4} >
                        <Typography variant='subtitle1' className='detail'sx={{fontSize:14}}>
                            Registered Date
                        </Typography>
                        <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                            Feb 24th, 1997 
                        </Typography>
                        <Divider sx={{mt:2, mb:1, mr:2}} />
                    </Grid>
                </Grid>
            </Grid>) : null}
        </Card> 
    </div>
    </>
  )
}
