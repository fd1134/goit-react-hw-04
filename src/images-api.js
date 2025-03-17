import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      page: page,
      query: query,
    },
    headers: {
      Authorization: `Client-ID GQMeUlNL6EFKro_cv8WW3NkJW9efe1zMiLYW9ingxRk`,
    },
  });
  return response.data.results;
};
