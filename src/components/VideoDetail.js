import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system';



const VideoDetail = ({ video }) => {
   if (!video) return <h2 style={{marginInlineStart:'44%', marginTop: "200px"  }}>Searching for a Video...</h2>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;


    return (
        <Grid item md="auto" sx={{height: 600}}>
            <Paper elevation={6} style={{height: "70%"}}>
                <iframe src={videoSrc} frameBorder="0" height="100%" width="100%" title="Video Player" />
            </Paper>
            <Paper elevation={6} style={{padding: "15px", height: "20%", paddingBottom: "75px"}}>
                <Typography variant="h5"><b>{video.snippet.title} - {video.snippet.channelTitle}</b></Typography>
                <Typography sx={{fontSize: 16, paddingTop: "10px", paddingBottom: "10px" }} variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </Grid>
        
    )
}

export default VideoDetail
