import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../context/auth/AuthContext";
import { getAllSongs } from "../../../helpers/api";

import { MusicCard } from "../MusicCard";

export const Home = () => {
  const { user } = useContext(AuthContext);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs(user.uid).then(({ songs }) => setSongs(songs));
  }, [user.uid]);

  return (
    <div className="container center">
      {songs.map((song) => {
        return (
          <MusicCard
            key={song.sid}
            id={song.sid}
            title={song.title}
            artist={song.artist}
            img={song.img}
          />
        );
      })}
    </div>
  );
};
