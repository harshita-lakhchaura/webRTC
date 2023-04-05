import React from "react";
import { AppBar, Typography } from '@material-ui/core';
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";
import './app.css'

function App() {
  return (
    <div>
      <div className="mt-4 bg-[#AEF5F5] text-center text-[4rem] font-[Jose] w-[30rem] ml-[35%] rounded-lg font-bold">Chat It Up</div>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
