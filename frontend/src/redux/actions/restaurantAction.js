import api from "../../utils/api";
import {
  getRestaurantsRequest,
  getRestaurantsSuccess,
  getRestaurantsFail,
  createRestaurantRequest,
  createRestaurantSuccess,
  createRestaurantFail,
  deleteRestaurantRequest,
  deleteRestaurantSuccess,
  deleteRestaurantFail,
} from "../slices/restaurantSlice";

// GET ALL RESTAURANTS
export const getRestaurants = (keyword = "") => async (dispatch) => {
  try {
    dispatch(getRestaurantsRequest());
    const { data } = await api.get(`/v1/eats/stores?keyword=${keyword}`);
    console.log("Fetched restaurants:", data);
    dispatch(getRestaurantsSuccess({
      restaurants: data.restaurants,
      count: data.count,
    }));
  } catch (error) {
    console.log("Error fetching restaurants:", error);
    dispatch(getRestaurantsFail(error.response?.data?.message || error.message));
  }
};

// CREATE RESTAURANT
export const createRestaurant = (restaurantData) => async (dispatch) => {
  try {
    dispatch(createRestaurantRequest());
    const { data } = await api.post("/v1/eats/stores", restaurantData);
    dispatch(createRestaurantSuccess(data.data));
  } catch (error) {
    dispatch(createRestaurantFail(error.response?.data?.message || error.message));
  }
};

// DELETE RESTAURANT
export const deleteRestaurant = (id) => async (dispatch) => {
  try {
    dispatch(deleteRestaurantRequest());
    await api.delete(`/v1/eats/stores/${id}`);
    dispatch(deleteRestaurantSuccess(id));
  } catch (error) {
    dispatch(deleteRestaurantFail(error.response?.data?.message || error.message));
  }
};

// ANALYZE REVIEWS (AI)
export const analyzeReviews = (id) => async (dispatch) => {
  try {
    const { data } = await api.put(`/v1/ai/admin/restaurants/${id}/analyze`);
    return { restaurantId: id, aiData: data.aiData };
  } catch (error) {
    console.log("AI analyze error:", error);
  }
};
