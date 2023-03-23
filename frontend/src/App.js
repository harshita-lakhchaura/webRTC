import React from "react";
import { AppBar, Typography } from '@material-ui/core';
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";
import './app.css'

function App() {
  return (
    <div>
      <div className="heading">Chat It Up</div>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
