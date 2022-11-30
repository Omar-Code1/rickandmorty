const url = `https://rickandmortyapi.com/api/character`;

export const consumirApi = {
  getAll: async (page: number, nombre: string) => {
    const response = await fetch(
      url +
        `${
          page && nombre
            ? `/?page=${page}&name=${nombre}`
            : nombre
            ? `/?name=${nombre}`
            : page && `?page=${page}`
        }`,
    );
    const data = await response.json();
    return data;
  },
  getById: async (id: string | undefined) => {
    const response = await fetch(url + `/${id}`);
    const data = await response.json();
    return data;
  },
};
