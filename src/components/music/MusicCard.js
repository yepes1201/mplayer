import React, { useContext } from "react";

import { AuthContext } from "../../context/auth/AuthContext";
import { favoriteSongsUpdate } from "../../helpers/api";
import { icons } from "../../icons/icons";

export const MusicCard = ({ id, title, artist, img }) => {
  const { user, setUser } = useContext(AuthContext);
  const { favSongs } = user;
  const icon = favSongs.includes(id) ? icons.filledHeart : icons.outlinedHeart;

  const handleFavorites = async () => {
    if (!favSongs.includes(id)) {
      // * If the song is not included in favorites array
      const newFavSongs = [...favSongs, id];
      setUser({
        ...user,
        favSongs: newFavSongs,
      });
      await favoriteSongsUpdate(user.uid, newFavSongs);
    } else {
      // * If the song is included in favorites array
      const newFavSongs = favSongs.filter((sid) => sid !== id);
      setUser({
        ...user,
        favSongs: newFavSongs,
      });
      await favoriteSongsUpdate(user.uid, newFavSongs);
    }
  };

  return (
    <div className="musiccard">
      <div className="musiccard__song">
        <img src={img} alt="song-cover" />
        <div>
          <p>{title}</p>
          <span>{artist}</span>
        </div>
      </div>
      <div onClick={handleFavorites} className="musiccard__favorite">
        {icon}
      </div>
    </div>
  );
};
