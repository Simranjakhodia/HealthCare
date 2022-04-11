import { Card, CardContent, Typography, Box, Divider, Button, Grid, Stack} from  '@mui/material';
import './Appointments.css'
import styled from 'styled-components'
import { EventNote, KeyboardArrowUp } from '@mui/icons-material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Appointments() {
   
    const [items, setItems] = useState({});
    const [state, setState] = useState(false);
    useEffect(() => {
  
      getAppointmentDetails();
      
    }, [])
  
    const  getAppointmentDetails = async () => {
                   await axios.get('https://619f39821ac52a0017ba467e.mockapi.io/appointment_details')
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

  return (
    <>
    {state ?  
    (<Card className='appointment-container'>
        <CardContent>
        <Box sx={{mb: 2, width: 400, height: 40, backgroundColor: '#d3d3d3', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px'}}>
            <Stack direction="row" >
                <Button variant="contained"  className='button'sx={{color:'gray', fontSize:9, backgroundColor:'#d3d3d3', border:'none', boxShadow: '0px 0px 0px 0px'}}>Upcoming Appointments</Button>
                <Button variant="contained"  sx={{color:'gray', fontSize:9, backgroundColor:'#d3d3d3', border:'none', boxShadow: '0px 0px 0px 0px'}}>Past Appointments</Button>
                <Button variant="contained"  sx={{color:'gray', fontSize:8, backgroundColor:'#d3d3d3', border:'none',  boxShadow: '0px 0px 0px 0px'}}>Medical Records</Button>
            </Stack>
        </Box>
        
        <Box className='appointment-timeline' sx={{backgroundColor: '#d3d3d3',borderRadius: '5px'}}>
            <Box sx={{backgroundColor: '#d3d3d3', display: 'flex', justifyContent: 'space-between', alignItems: 'center',textAlign: 'center', borderRadius: '5px'}}>
            <Typography variant='subtitle1' sx={{mt:2, fontSize: 12, fontWeight: 'bold', ml:1}}>
                    Root Canal Treatment
            </Typography>
            <Button variant="contained"  sx={{mt:2, mr:4, p:0,color:'gray', fontSize:9, backgroundColor:'white', border:'none', boxShadow: '0px 0px 0px 0px'}}>
                    <KeyboardArrowUp />
                    <Typography variant='subtitle1' sx={{color:'gray',fontSize: 8, fontWeight: 'bold', mr:1}}>
                        Show Previous Treatments
                    </Typography> 
            </Button>
        </Box>
        <Divider sx={{mt:2}} />
           <Box sx= {{display:'flex', flexDirection: 'row'}}>
                    <Timeline>
                        <TimelineItem>
                            <TimelineSeparator><TimelineConnector /><TimelineDot variant="outlined" color="primary"/>
                             </TimelineSeparator>   
                            <TimelineContent>
                                <Card sx={{width: 500, height: 80, p: 2, display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <Grid container item direction="row" rowSpacing={2}>
                                        <Grid item xs={3}>
                                            <Typography variant='subtitle1' className='detail'sx={{fontSize:14}}>
                                                {items[0]['Upcoming Appointments']['Date']}
                                            </Typography>
                                            <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                                            {items[0]['Upcoming Appointments']['Time']}
                                            </Typography>
                                            <Divider orientation="vertical" flexItem sx={{}} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant='subtitle1'className='detail'sx={{fontSize:14}}>
                                                Treatment
                                            </Typography>
                                            <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                                            {items[0]['Upcoming Appointments']['Treatment']}
                                            </Typography>
                                            <Divider orientation="vertical" flexItem sx={{}} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant='subtitle1' className='detail'sx={{fontSize:14}}>
                                                Dentist
                                            </Typography>
                                            <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                                            {items[0]['Upcoming Appointments']['Dentist']}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography variant='subtitle1' className='detail'sx={{fontSize:14}}>
                                                Nurse
                                            </Typography>
                                            <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                                            {items[0]['Upcoming Appointments']['Nurse']} 
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                        <Box sx={{display:'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center', textAlign: 'center', mt: 2,mr:2, color: 'blue'}}>
                                            <EventNote sx={{ ml: 2, mr:0.2}}/>
                                            <Typography variant='subtitle1' className='text-field'sx={{fontSize:14, color: 'blue'}}>
                                                Note 
                                            </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineSeparator><TimelineConnector /><TimelineDot variant="outlined" color="primary"/>
                             </TimelineSeparator>   
                            <TimelineContent>
                                <Card sx={{width: 500, height: 80, p: 2, display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <Grid container item direction="row" rowSpacing={2}>
                                        <Grid item xs={3}>
                                            <Typography variant='subtitle1' className='detail'sx={{fontSize:14}}>
                                                26 Nov '19'
                                            </Typography>
                                            <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                                                09.00 - 10.00
                                            </Typography>
                                            <Divider orientation="vertical" flexItem sx={{}} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant='subtitle1'className='detail'sx={{fontSize:14}}>
                                                Treatment
                                            </Typography>
                                            <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                                                Open Access
                                            </Typography>
                                            <Divider orientation="vertical" flexItem sx={{}} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant='subtitle1' className='detail'sx={{fontSize:14}}>
                                                Dentist
                                            </Typography>
                                            <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                                                Drg.Adam H.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography variant='subtitle1' className='detail'sx={{fontSize:14}}>
                                                Nurse
                                            </Typography>
                                            <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                                                Jessicamila 
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Box sx={{display:'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center', textAlign: 'center', mt: 2, mr:2, color: 'blue'}}>
                                            <EventNote sx={{ ml: 2, mr:0.2}}/>
                                            <Typography variant='subtitle1' className='text-field'sx={{fontSize:14, color: 'blue'}}>
                                                Note 
                                            </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineSeparator><TimelineConnector /><TimelineDot variant="outlined" color="primary"/>
                             </TimelineSeparator>   
                            <TimelineContent>
                                <Card sx={{width: 500, height: 80, p: 2, display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <Grid container item direction="row" rowSpacing={2}>
                                        <Grid item xs={3}>
                                            <Typography variant='subtitle1' className='detail'sx={{fontSize:14}}>
                                                26 Nov '19'
                                            </Typography>
                                            <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                                                09.00 - 10.00
                                            </Typography>
                                            <Divider orientation="vertical" flexItem sx={{}} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant='subtitle1'className='detail'sx={{fontSize:14}}>
                                                Treatment
                                            </Typography>
                                            <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                                                Open Access
                                            </Typography>
                                            <Divider orientation="vertical" flexItem sx={{}} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant='subtitle1' className='detail'sx={{fontSize:14}}>
                                                Dentist
                                            </Typography>
                                            <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                                                Drg.Adam H.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography variant='subtitle1' className='detail'sx={{fontSize:14}}>
                                                Nurse
                                            </Typography>
                                            <Typography variant='subtitle1' className='text-field'sx={{fontSize:12}}>
                                                Jessicamila 
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                        <Box sx={{display:'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center', textAlign: 'center', mt: 2,mr:2, color: 'blue'}}>
                                            <EventNote sx={{ ml: 2, mr:0.2}}/>
                                            <Typography variant='subtitle1' className='text-field'sx={{fontSize:14, color: 'blue'}}>
                                                Note 
                                            </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </TimelineContent>
                            </TimelineItem>
                </Timeline>
           </Box>
        </Box>
        </CardContent>
    </Card>): null}
    </>
  )
}
