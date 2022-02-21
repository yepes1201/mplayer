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
