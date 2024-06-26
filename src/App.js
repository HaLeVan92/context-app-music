import "./App.css";
import TrackList from "./component/TrackList";
import Controller from "./component/Controller";
import Header from "./component/Header";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <Header />
        <TrackList />
        <Controller />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;