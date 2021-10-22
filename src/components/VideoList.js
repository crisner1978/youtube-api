import { Grid } from "@mui/material";
import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video) => <VideoItem  key={video.id.videoId} video={video} onUserSelect={onVideoSelect} />);

  return (
      <Grid container spacing={2} sx={{pr: 3, marginTop: "-15px"}}>
          {listOfVideos}
      </Grid>
  )
};

export default VideoList;
