import { Divider, Typography , IconButton, Badge, Card, Fab, Box} from '@mui/material'
import './Topbar.css';
import { PersonOutlineOutlined , Notifications, Search, AddCircleRounded, NavigateNext, NoteAltOutlined, Print, Add }from '@mui/icons-material';
import Patient from '../Patient/Patient';
import Appointments from '../Appointments/Appointments';
import Notes from '../Notes/Notes';
import Files from '../Files/Files';

export default function Topbar() {
       
  return (
    <div className = 'header'>
        <div className = 'topbar'>
            <div className = 'topleft'>
            <PersonOutlineOutlined sx = {{ color: '#0096FF', mr: 1}}/>
            <Typography variant='h4' component='h2' sx = {{fontWeight: 'bold', fontSize: 20}}>
                Diane Cooper
            </Typography>
            </div>
            <div className = 'topright'>
                <div className='searchbar'>
                    <Search className='searchIcon'/>
                    <input placeholder="Search" className="searchInput" />
                </div>
                <Box sx={{ '& > :not(style)': { m: 0.5 } , display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Fab color="primary" size="small">
                        <Add />
                    </Fab>
                    <Fab color="gray"  size="small">
                        <Notifications />
                    </Fab>
                </Box>    
            </div>
        </div>
        <Divider sx = {{mt: 0.1, mb: 0.1}} />
        <div className = 'bread-crumb'>
            <div className = 'left'>
            <Typography variant='h4' sx = {{color: '#0096FF', fontSize: 15}}>Patient List </Typography>
            <NavigateNext  sx = {{color: 'gray', fontSize: 30}}/>
            <Typography variant='h4' sx = {{color: 'gray', fontSize: 15}}>Diane Cooper</Typography>  
            </div>   
            <div className = 'right'>
                <Card sx={{width: 30, height: 30, color: 'gray', backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ml: 0.5, p: 1}}>
                    <Print sx = {{p: 0.2}}/>
                </Card>
                <Card sx={{ height: 30, color: 'gray',backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ml: 0.5, p: 1}}>
                    <NoteAltOutlined/>
                    <Typography variant='subtitle1' sx = {{color: 'gray', fontSize: 10, ml: 0.5}}>Edit Patient</Typography>
                </Card>
            </div>          
        </div>
        <Divider sx = {{mt: 0.1, mb: 0.5}} />
        <div className="content">
            <div className="left-section">
                <div className="left-up">
                    <Patient />
                </div>
                <div className="left-up">
                    <Appointments/>
                </div>
            </div>
            <div className="right-section">
                <div className="right-up">
                    <Notes />
                </div>
                <div className="right-down">
                    <Files />
                </div>
            </div>
        </div>
    </div>
  )
}
