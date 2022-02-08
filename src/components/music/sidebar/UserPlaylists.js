import React from "react";

export const UserPlaylists = () => {
  const playlists = [
    "Kpop",
    "Rock",
    "Pop",
    "Jazz",
    "Funky",
    "Trap",
    "Cristiana",
  ];
  return (
    <div className="userplaylists mt-4">
      {playlists.map((playlist) => {
        return (
          <button key={playlist} className="btn btn-playlist mb-2">
            <i className="fas fa-bars mr-4"></i>
            <p>{playlist}</p>
          </button>
        );
      })}
    </div>
  );
};
