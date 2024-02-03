import axios from "axios";

const TIMEOUT = 5000;
const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
});

export const fetchMealByCategory = async (category) => {
  const response = await axiosInstance.get(`/filter.php?c=${category}`);
  return response.data.meals;
};
