import React from "react";
import { icons } from "../../../icons/icons";

export const DeleteMusicCard = () => {
  return (
    <div className="musiccard hover-primary">
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
      <div className="musiccard__favorite">{icons.deleteIcon}</div>
    </div>
  );
};
