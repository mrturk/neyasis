export const JSON_PLACE_HOLDER_TODO = "/todos";

export const getApiEndPoint = (apiKey) => {
  return `${process.env.NEXT_PUBLIC_API_URL}${apiKey}`;
};
