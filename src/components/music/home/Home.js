import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../context/auth/AuthContext";

import { MusicCard } from "../MusicCard";

export const Home = () => {
  const { user } = useContext(AuthContext);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/songs/${user.uid}`)
      .then((res) => res.json())
      .then(({ songs }) => {
        setSongs(songs);
      })
      .catch((err) => console.log(err));
  }, [setSongs, user.uid]);

  return (
    <div className="container center">
      {songs.map((song) => {
        return (
          <MusicCard
            key={song.sid}
            title={song.title}
            artist={song.artist}
            img={song.img}
          />
        );
      })}
    </div>
  );
};
