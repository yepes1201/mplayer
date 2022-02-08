import React from "react";

export const CreateSongForm = ({ form, handleForm }) => {
  return (
    <div className="songform">
      <h2 className="mb-2">Add Song</h2>
      <div className="mb-4">
        <label htmlFor="songName" className="form-label">
          Song Title <span className="required">*</span>
        </label>
        <input
          value={form.songName}
          onChange={handleForm}
          className="form-input"
          id="songName"
          type="text"
          name="songName"
          placeholder="Koiwazurai..."
        />
      </div>
      <div className="mb-4">
        <label htmlFor="artistName" className="form-label">
          Artist Name <span className="required">*</span>
        </label>
        <input
          value={form.artistName}
          onChange={handleForm}
          className="form-input"
          id="artistName"
          type="text"
          name="artistName"
          placeholder="Aimer"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="audioFile" className="form-label">
          Audio File <span className="required">*</span>
        </label>
        <input
          className="form-input input-file"
          id="audioFile"
          type="file"
          name="audioFile"
          accept="audio/*"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="imgFile" className="form-label">
          Image
        </label>
        <input
          className="form-input input-file"
          id="imgFile"
          type="file"
          name="imgFile"
          accept="image/*"
        />
      </div>
      <button className="btn bg-primary mt-4">Add Song</button>
    </div>
  );
};
