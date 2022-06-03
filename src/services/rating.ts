import axios from "axios";
import { Rating, RatingReturn } from "../interface/rating";

const baseURL = process.env.BASE_URL;

export const RatingService = {
  setRatings: async (rating: Rating): Promise<RatingReturn> => {
    const response = await axios.post(`${baseURL}/responses`, rating);
    return response.data;
  },
  getRatings: async (): Promise<Rating[]> => {
    const response = await axios.get(`${baseURL}/responses`);
    return response.data;
  }
}