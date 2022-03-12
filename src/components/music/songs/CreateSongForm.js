import React, { useRef, useContext, useState } from "react";
import validator from "validator";
import { AuthContext } from "../../../context/auth/AuthContext";
import { createSong } from "../../../helpers/api";

export const CreateSongForm = ({ form, handleForm }) => {
  const [adding, setAdding] = useState(false);
  const { user } = useContext(AuthContext);
  const formFetch = useRef();
  const audioInput = useRef();
  const imgInput = useRef();

  const isValid = () => {
    if (validator.isEmpty(form.artistName)) {
      return false;
    }
    if (validator.isEmpty(form.songName)) {
      return false;
    }
    if (audioInput.current.files.length === 0) {
      return false;
    }
    return true;
  };

  const handleAddSong = async (e) => {
    e.preventDefault();
    if (isValid()) {
      setAdding(true);
      const data = new FormData();
      data.append("user", user.uid);
      data.append("artist", form.artistName);
      data.append("title", form.songName);
      data.append("src", audioInput.current.files[0]);
      data.append("img", imgInput.current.files[0]);
      const { success } = await createSong(data);
    }
    setAdding(false);
  };

  return (
    <div className="songform">
      <form ref={formFetch}>
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
            placeholder="Koiwazurai"
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
            ref={audioInput}
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
            ref={imgInput}
            className="form-input input-file"
            id="imgFile"
            type="file"
            name="imgFile"
            accept="image/*"
          />
        </div>
        <button
          disabled={adding}
          onClick={handleAddSong}
          className="btn bg-primary mt-4"
        >
          {adding ? "Uploading..." : "Add Song"}
        </button>
      </form>
    </div>
  );
};
