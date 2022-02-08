import React from "react";
import { useLocation } from "react-router-dom";
import { paths } from "../../helpers/path";
import { icons } from "../../icons/icons";

export const MusicCard = () => {
  const { pathname } = useLocation();
  const icon =
    paths[pathname] === "Favorites" ? icons.filledHeart : icons.outlinedHeart;

  return (
    <div className="musiccard">
      <div className="musiccard__song">
        <img
          src="https://m.media-amazon.com/images/I/813J3tfErZL._SS500_.jpg"
          alt="song-cover"
        />
        <div>
          <p>Bloody Valentine</p>
          <span>Machine Gun Kelly</span>
        </div>
      </div>
      <div className="musiccard__favorite">{icon}</div>
    </div>
  );
};
