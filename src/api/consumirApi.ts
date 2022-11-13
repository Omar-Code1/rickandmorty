const url = `https://rickandmortyapi.com/api/character`;

export const consumirApi = {
    getAll: async ( page: number, nombre: string) => {
       return fetch(
        url +
          `${
            page && nombre
              ? `/?page=${page}&name=${nombre}`
              : nombre
              ? `/?name=${nombre}`
              : page && `?page=${page}`
          }`
      )
    },
    getById: async (id: string | undefined) =>{
        return fetch(url + `/${id}`)
    }
}