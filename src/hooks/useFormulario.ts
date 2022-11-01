import { ChangeEvent, useState } from 'react';



interface Parameters {
  nombre: string
}

export const useFormulario = (initialState:Parameters) => {
  const [inputs, setInputs] = useState(initialState);

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;

    setInputs((old) => ({
      ...old,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const reset = () => {
    setInputs(initialState);
  };

  return {inputs, handleChange, reset};
};
