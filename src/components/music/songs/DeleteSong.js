import React from "react";

import { DeleteMusicCard } from "./DeleteMusicCard";

export const DeleteSong = () => {
  return (
    <div className="deletesong">
      <h2 className="mb-2">Delete Song</h2>
      <div className="deletesong__songs">
        <DeleteMusicCard />
        <DeleteMusicCard />
        <DeleteMusicCard />
        <DeleteMusicCard />
        <DeleteMusicCard />
        <DeleteMusicCard />
      </div>
    </div>
  );
};
