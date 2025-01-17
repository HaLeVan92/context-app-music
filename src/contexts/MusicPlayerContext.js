import React, { useState, createContext } from "react";
import Track1 from "../mp3/track_1.mp3";
import Track2 from "../mp3/track_2.mp3";
import Track3 from "../mp3/track_3.mp3";
import Track4 from "../mp3/track_4.mp3";
import Track5 from "../mp3/track_5.mp3";
import Track6 from "../mp3/track_6.mp3";

const MusicPlayerContext = createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Summer Nights",
      file: Track1,
    },
    {
      name: "Summer Vibes",
      file: Track2,
    },
    {
      name: "Summer Vacation",
      file: Track3,
    },
    {
      name: "Summer Trip",
      file: Track4,
    },
    {
      name: "Electro Summer Positive Party",
      file: Track5,
    },
    {
      name: "Showreel",
      file: Track6,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };