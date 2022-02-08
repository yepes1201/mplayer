import React from "react";
import { useForm } from "../../../hooks/useForm";

import { CreateSongForm } from "./CreateSongForm";
import { DeleteSong } from "./DeleteSong";

export const ManageSongs = () => {
  const { form, handleForm } = useForm({
    songName: "",
    artistName: "",
  });

  return (
    <div className="managesongs">
      <CreateSongForm form={form} handleForm={handleForm} />
      <DeleteSong />
    </div>
  );
};
