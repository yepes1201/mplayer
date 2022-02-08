import { useState } from "react";

export const useForm = (initValue) => {
  const [form, setForm] = useState(initValue);

  const handleForm = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const resetForm = () => {
    setForm(initValue);
  };

  return { form, handleForm, resetForm };
};
