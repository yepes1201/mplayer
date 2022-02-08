import React, { useState } from "react";

import { icons } from "../../../icons/icons";

export const FooterPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="footer">
      <div className="footer__progress-bg"></div>
      <div className="footer__progress"></div>
      <div className="footer__song">
        <img
          src="https://m.media-amazon.com/images/I/813J3tfErZL._SS500_.jpg"
          alt="song-cover"
        />
        <div>
          <p>Bloody Valentine</p>
          <span>Machine Gun Kelly</span>
        </div>
      </div>
      <div className="footer__buttons">
        <div>{icons.backward}</div>
        <div onClick={handlePlay}>{isPlaying ? icons.pause : icons.play}</div>
        <div>{icons.forward}</div>
      </div>
      <div onClick={handleFavorites} className="footer__favorite">
        {isFavorite ? icons.filledHeart : icons.outlinedHeart}
      </div>
    </div>
  );
};
