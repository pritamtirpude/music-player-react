import React from "react";
import { LibrarySong } from "../components";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  isLibraryOpened,
}) => {
  return (
    <div className={`library ${isLibraryOpened ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            songsArray={songs}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            id={song.id}
            setSongs={setSongs}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
