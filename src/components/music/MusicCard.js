import React from "react";
import { useLocation } from "react-router-dom";
import { paths } from "../../helpers/path";
import { icons } from "../../icons/icons";

export const MusicCard = ({ title, artist, img }) => {
  const { pathname } = useLocation();
  const icon =
    paths[pathname] === "Favorites" ? icons.filledHeart : icons.outlinedHeart;

  return (
    <div className="musiccard">
      <div className="musiccard__song">
        <img src={img} alt="song-cover" />
        <div>
          <p>{title}</p>
          <span>{artist}</span>
        </div>
      </div>
      <div className="musiccard__favorite">{icon}</div>
    </div>
  );
};
