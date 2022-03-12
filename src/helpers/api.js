export const sendEmail = async (form) => {
  try {
    const resp = await fetch("http://localhost:8080/api/auth/resetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const { ok, msg } = await resp.json();
    return { ok, msg };
  } catch (err) {
    return { ok: false, msg: "Something went wrong. Please try again later." };
  }
};

export const getSongs = async (favSongs) => {
  const resp = favSongs.map(async (id) => {
    return await fetch(`http://localhost:8080/api/songs/song/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(localStorage.getItem("token")),
      },
    }).then((res) => res.json());
  });
  const songs = await Promise.all(resp);
  return songs;
};

export const favoriteSongsUpdate = async (uid, newFavSongs) => {
  try {
    const url = "http://localhost:8080/api/songs/favorites/";
    await fetch(url + uid, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(localStorage.getItem("token")),
      },
      body: JSON.stringify(newFavSongs),
    });
  } catch (err) {
    console.error(err);
  }
};
