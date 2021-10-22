import { Paper, Grid, Typography } from "@mui/material"

const VideoItem = ({video, onUserSelect}) => {



    return (
        <Grid item onClick={()=> onUserSelect(video)} xs={12}>
            <Paper style={{display: 'flex', alignItems: 'center', cursor: "pointer"}}>
                <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" style={{ marginRight: '10px', width: 200}} />
                <Typography fontSize="small" vairant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem