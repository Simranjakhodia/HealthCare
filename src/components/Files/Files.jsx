import { NoteAdd, DeleteOutlined, DownloadForOfflineOutlined, FeedOutlined } from '@mui/icons-material'
import React from 'react'

import { Card, CardContent, Typography, Box } from '@mui/material';

export default function Files() {
  return (
    <div className = 'notes-container'>
    <Card sx={{width: 360, height: 380, mr:1}}>
        <CardContent>
            <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 1}}>
                <Typography variant='subtitle1' sx={{fontSize:12 , color:'black', fontWeight:'bold'}}>
                    Files/Documents
                </Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', color:'blue'}}>
                <NoteAdd sx={{fontSize:16}}/>
                <Typography variant='subtitle1' sx={{fontSize:10 , color:'blue', fontWeight:'bold'}}>
                    Add Files
                </Typography>
                </Box>
            </Box>
            <Box sx={{width: 330, height: 300, display: 'flex', flexDirection: 'column', fontSize: 6, borderColor: '#d3d3d3', p: 1, fontWeight:'small', mt: 2}}>
                <Card sx={{display: 'flex', flexDirection: 'row',justifyContent:'space-between', alignItems:'center',backgroundColor: 'white', borderRadius: '5px', mb: 2, p:2}}>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', color:'gray'}}>
                        <FeedOutlined sx={{fontSize:16, mr: 1}}/>
                        <Typography variant='subtitle1' sx={{fontSize:11 , color:'gray', fontWeight:'bold'}}>
                            Check Up Result.pdf
                        </Typography>
                    </Box>
                    <Typography variant='subtitle1' sx={{fontSize:9 , color:'gray'}}>
                            123kb
                    </Typography>
                </Card>
                <Card sx={{display: 'flex', flexDirection: 'row',justifyContent:'space-between', alignItems:'center',backgroundColor: 'white', borderRadius: '5px', mb: 2, p:2}}>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', color:'gray'}}>
                        <FeedOutlined sx={{fontSize:16, mr: 1}}/>
                        <Typography variant='subtitle1' sx={{fontSize:11 , color:'gray', fontWeight:'bold'}}>
                            Dental X-Ray Result.pdf
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', color:'gray'}}>
                        <DeleteOutlined sx={{fontSize:16, mr: 0.5}}/>
                        <DownloadForOfflineOutlined sx={{fontSize:16}}/>
                    </Box>
                </Card>
                <Card sx={{display: 'flex', flexDirection: 'row',justifyContent:'space-between', alignItems:'center', backgroundColor: 'white', borderRadius: '5px', mb: 2, p:2}}>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', color:'gray'}}>
                        <FeedOutlined sx={{fontSize:16, mr: 1}}/>
                        <Typography variant='subtitle1' sx={{fontSize:11 , color:'gray', fontWeight:'bold'}}>
                            Medical Prescriptions.pdf
                        </Typography>
                    </Box>
                    <Typography variant='subtitle1' sx={{fontSize:9 , color:'gray'}}>
                            87kb
                    </Typography>
                </Card>
                <Card sx={{display: 'flex', flexDirection: 'row',justifyContent:'space-between', alignItems:'center', backgroundColor: 'white', borderRadius: '5px', mb: 2, p:2}}>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', color:'gray'}}>
                        <FeedOutlined sx={{fontSize:16, mr: 1}}/>
                        <Typography variant='subtitle1' sx={{fontSize:11 , color:'gray', fontWeight:'bold'}}>
                            Dental X-Ray Result.pdf
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', color:'gray'}}>
                        <DeleteOutlined sx={{fontSize:16, mr: 0.5}}/>
                        <DownloadForOfflineOutlined sx={{fontSize:16}}/>
                    </Box>
                </Card>
                <Card sx={{display: 'flex', flexDirection: 'row',justifyContent:'space-between', alignItems:'center',backgroundColor: 'white', borderRadius: '5px', mb: 2, p:2}}>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', color:'gray'}}>
                        <FeedOutlined sx={{fontSize:16, mr: 1}}/>
                        <Typography variant='subtitle1' sx={{fontSize:11 , color:'gray', fontWeight:'bold'}}>
                            Check Up Result.pdf
                        </Typography>
                    </Box>
                    <Typography variant='subtitle1' sx={{fontSize:9 , color:'gray'}}>
                            123kb
                    </Typography>
                </Card>
            </Box>
        </CardContent>
    </Card>
</div>
  )
}

