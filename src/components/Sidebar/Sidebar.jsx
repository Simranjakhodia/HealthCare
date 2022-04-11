import { motion } from 'framer-motion';
import './Sidebar.css';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MenuOpen ,InfoOutlined, CalendarMonthOutlined,PersonOutlineOutlined ,CommentOutlined, LocalAtm ,SettingsApplicationsOutlined, Info, KeyboardArrowDownOutlined }from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import {useState, useEffect} from 'react';
import { Divider, Link } from '@mui/material';
import axios from 'axios';

export default function Sidebar({children}) {
 
    

 const [isOpen, setIsOpen] = useState(false);
 const [isBottom, setIsBottom] = useState(false);
 const [selectedIndex, setSelectedIndex] = useState(2);

 const toggle = () => setIsOpen(!isOpen);
 const toggleBottom = () => setIsBottom(!isBottom);
 const handleSelect = (index) => {
     setSelectedIndex(index);
 }
 
 const [items, setItems] = useState({});
  const [state, setState] = useState(false);
  useEffect(() => {

    getDoctorDetails();
    
  }, [])

  const  getDoctorDetails = async () => {
                 await axios.get('https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails')
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
    
    <div className="main-container">
        <motion.div className="sidebar" animate={{ width: isOpen ? "250px" : "60px"}} >
        <div className="sidebar-top">
        <List >
            <ListItemButton className = "top">
               
            {isOpen && <img src = {require('../../images/logo.png')} className = "image"/>}
            {isOpen && <div className='subheader'>
             <Typography variant="h5" component="div" sx={{ fontSize: 25,fontWeight: 'bold', color: 'black' }}>
                        Zendenta
                    </Typography>
                    <Typography variant="subtitle1" component="div" sx={{ fontSize: 9, color: 'gray'}}>
                        Cabut gigi tanpa sakit
                    </Typography>
                </div>}
                <MenuOpen  onClick={toggle} />
            </ListItemButton>
           <ListItemButton className = "tab"
                >
                <ListItemIcon>
                    <InfoOutlined />
                </ListItemIcon>
                {isOpen && <ListItemText primary="Overview" />}
            </ListItemButton>
            <ListItemButton className = "tab"
                selected = {selectedIndex === 1}
                onClick = {(event) => handleSelect(event, 1)}
                >
                <ListItemIcon>
                    <CalendarMonthOutlined />
                </ListItemIcon>
                {isOpen && <ListItemText primary="Calendar" />}
            </ListItemButton>
            <ListItemButton className = "tab"
                sx = {{backgroundColor: '#0096FF', color: "white"}}
                >
                <ListItemIcon>
                    <PersonOutlineOutlined sx = {{ color: "white"}}/>
                </ListItemIcon>
                {isOpen && <ListItemText primary="Patient List" />}
            </ListItemButton>
            <ListItemButton className = "tab"
                selected = {selectedIndex === 3}
                
                onClick = {(event) => handleSelect(event, 3)}
                >
                <ListItemIcon>
                    <CommentOutlined />
                </ListItemIcon>
                {isOpen && <ListItemText primary="Messages" />}
            </ListItemButton>
            <ListItemButton className = "tab"
                selected = {selectedIndex === 4}
                
                onClick = {(event) => handleSelect(event, 4)}
                >
                <ListItemIcon>
                    <LocalAtm />
                </ListItemIcon>
                {isOpen && <ListItemText primary="Payment Information" sx={{fontSize: 10}} />}
            </ListItemButton>
            <ListItemButton className = "tab"
                selected = {selectedIndex === 5}
                
                onClick = {(event) => handleSelect(event, 5)}
                >
                <ListItemIcon>
                    <SettingsApplicationsOutlined />
                </ListItemIcon>
                {isOpen && <ListItemText primary="Settings" />}
            </ListItemButton>
            </List>
            </div>
            <div className="sidebar-bottom">
            <List >
                <ListItemButton display = 'flex' justify-content = 'flex-end'>
                            <ListItemIcon>
                                <Info/>
                            </ListItemIcon>
                            {isOpen && <ListItemText primary="Help" />}
                </ListItemButton>
                <Divider />
                <ListItemButton className = "bottom">
                    <img src = {require('../../images/d1.jpeg')} className = "avatar"/>
                {isOpen && state && <div className='doctor-details'>
                    <Typography variant="body1" component="div" sx={{ fontSize: 15,fontWeight: 'bold', color: 'black', mr: 3 }}>
                                {items[0].name} 
                            </Typography>
                            <Typography variant="subtitle1" component="div" sx={{ fontSize: 9, color: 'gray'}}>
                                {items[0].specification}
                            </Typography>
                           {isBottom && <div><Typography variant="subtitle1" component="div" sx={{ fontSize: 9, color: 'gray'}}>
                                Qualification
                            </Typography>
                            <Typography variant="subtitle1" component="div" sx={{ fontSize: 9, color: 'gray'}}>
                                (233) 6452189
                            </Typography></div>}
                        </div>}
                {isOpen && <KeyboardArrowDownOutlined onClick={toggleBottom}/>}
                </ListItemButton>
            </List>
            </div>
        </motion.div>
    </div>
    </>
  )
}


