import { Person } from '@mui/icons-material';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import './Notes.css';

export default function Notes() {
  return (
    <div className = 'notes-container'>
        <Card sx={{width: 360, minHeight: 200, mr:1}}>
            <CardContent>
                <Box sx={{display: 'flex', justifyContent: 'space-between', mb:1}}>
                    <Typography variant='subtitle1' sx={{fontSize:12 , color:'black', fontWeight:'bold'}}>
                        Notes
                    </Typography>
                    <Typography variant='subtitle1' sx={{fontSize:12 , color:'blue', fontWeight:'bold'}}>
                        See all
                    </Typography>
                </Box>
                <Box sx={{width: 330, height: 180, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',fontSize: 6, backgroundColor: '#d3d3d3', p: 1, fontWeight:'small'}}>
                    <Box sx={{display: 'flex',flexDirection: 'column',justifyContent: 'center' }}>
                    <Typography variant='subtitle1' sx={{fontSize:12 , fontWeight:'bold'}}>
                        - This patient is lorem ipsum dolor sit amet
                    </Typography>
                    <Typography variant='subtitle1' sx={{fontSize:12 , fontWeight:'bold'}}>
                        - Lorem ipsum dolor sit amet
                    </Typography>
                    <Typography variant='subtitle1' sx={{fontSize:12 , fontWeight:'bold'}}>
                        - has alergic history with Cataflam
                    </Typography>
                    </Box>
                    <span style = {{display: 'flex',flexDirection: 'row-reverse'}}><Button variant="contained" sx = {{ display: 'fixed', bottom:0, justifyContent: 'flex-end'}}>Save Note</Button></span>
                </Box>
                <Typography variant='subtitle1' sx={{fontSize:10 , color:'black',fontWeight:'bold', mt: 2, mb: 0.2}}>
                        Lorem ipsum dolor sit amet
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}> <Person  sx={{mr: 0.2, color: 'blue'}} />
                    <Typography variant='subtitle1' sx={{fontSize:12 , color:'gray'}}>
                        Drg. Mega Nanade
                    </Typography></Box>
                    <Typography variant='subtitle1' sx={{fontSize:12 , color:'gray'}}>
                        20 Nov'19
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    </div>
  )
}
