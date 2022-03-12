import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth/AuthContext";
import { getSongs } from "../../../helpers/api";
import { MusicCard } from "../MusicCard";

export const Favorites = () => {
  const { user } = useContext(AuthContext);
  const [songs, setSongs] = useState([]);
  const { favSongs } = user;

  useEffect(() => {
    getSongs(favSongs).then((songs) => setSongs(songs));
  }, [favSongs]);

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
