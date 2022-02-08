import React, { useState } from "react";
import { useForm } from "../../../hooks/useForm";

import { CreateSongForm } from "./CreateSongForm";
import { DeleteSong } from "./DeleteSong";

const tabActiveStyle = {
  color: "#ececec",
  borderBottomColor: "#f39189",
};

export const ManageSongs = () => {
  const [tab, setTab] = useState(0);
  const { form, handleForm } = useForm({
    songName: "",
    artistName: "",
  });

  return (
    <div className="managesongs">
      <div className="container center">
        <ul className="tab">
          <li
            style={tab === 0 ? tabActiveStyle : null}
            onClick={() => setTab(0)}
          >
            Add Song
          </li>
          <li
            style={tab === 1 ? tabActiveStyle : null}
            onClick={() => setTab(1)}
          >
            Delete Song
          </li>
        </ul>
        <div className="managesongs__forms">
          {tab === 0 ? (
            <CreateSongForm form={form} handleForm={handleForm} />
          ) : (
            <DeleteSong />
          )}
        </div>
      </div>
    </div>
  );
};
