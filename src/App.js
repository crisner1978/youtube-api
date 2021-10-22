import { useState, useEffect } from "react";
import "./App.css";
import Grid from "@mui/material/Grid";
import axios from "./axios";
import { SearchBar, VideoDetail, VideoList } from "./components";
import { Container } from "@mui/material";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {}, []);

  const onFormSubmit = async (searchTerm) => {
    const response = await axios.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: `${process.env.REACT_APP_API_KEY}`,
        q: searchTerm,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <Grid justify="center" container spacing={12}>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={onFormSubmit} />
          </Grid>
          <Grid container sx={{marginTop: "50px", paddingLeft: '50px', paddingRight: '10px'}}>
            <Grid item xs={8}>
              <Container>
                <VideoDetail className="app" video={selectedVideo} />
              </Container>
            </Grid>
            <Grid item xs={4}>
              <VideoList
                videos={videos}
                onVideoSelect={(selected) => setSelectedVideo(selected)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
