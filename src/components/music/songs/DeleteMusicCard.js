import React from "react";
import { icons } from "../../../icons/icons";

export const DeleteMusicCard = ({
  sid,
  title,
  artist,
  img,
  handleDeleteSong,
}) => {
  return (
    <div className="musiccard hover-primary">
      <div className="musiccard__song">
        <img src={img} alt="song-cover" />
        <div>
          <p>{title}</p>
          <span>{artist}</span>
        </div>
      </div>
      <div
        onClick={() => handleDeleteSong(sid)}
        className="musiccard__favorite"
      >
        {icons.deleteIcon}
      </div>
    </div>
  );
};
