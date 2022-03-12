import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../context/auth/AuthContext";
import { getAllSongs } from "../../../helpers/api";

import { DeleteMusicCard } from "./DeleteMusicCard";

export const DeleteSong = () => {
  const { user } = useContext(AuthContext);
  const [songs, setSongs] = useState([]);

  const handleDeleteSong = async (id) => {
    try {
      await fetch("http://localhost:8080/api/songs/" + id, {
        method: "DELETE",
        headers: {
          "x-token": JSON.parse(localStorage.getItem("token")),
        },
      });
      const newSongs = songs.filter((song) => {
        return song.sid !== id;
      });
      setSongs(newSongs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllSongs(user.uid).then(({ songs }) => setSongs(songs));
    return () => {};
  }, [user.uid]);

  return (
    <div className="deletesong">
      <div className="deletesong__songs">
        {songs.map((song) => {
          return (
            <DeleteMusicCard
              key={song.sid}
              handleDeleteSong={handleDeleteSong}
              {...song}
            />
          );
        })}
      </div>
    </div>
  );
};
