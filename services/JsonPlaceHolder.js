import { JSON_PLACE_HOLDER_TODO, getApiEndPoint } from "./const";

export const getJsonPlaceHolderTodos = async (id) => {
  const res = await fetch(`${getApiEndPoint(JSON_PLACE_HOLDER_TODO)}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (res.status === 200) {
    const data = await res.json();
    return data;
  }

  return res.status;
};
