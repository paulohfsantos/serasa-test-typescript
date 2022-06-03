import { ReducerActionType } from '../types/RatingReducers';
import { Rating } from '../interface/rating';

export type RatingType = {
  rating: Rating
};

export const initialState: RatingType = {
  rating: {
    name: '',
    rate: 0,
    comment: ''
  }
}

export const ratingReducer = (state: RatingType, action: ReducerActionType) => {
  switch (action.type) {
    case 'SET_RATING':
      return {
        ...state,
        ...action.payload
      };
    case 'RESET_RATING':
      return {
        ...state,
        rating: {
          name: '',
          rate: 0,
          comment: ''
        }
      };
    default:
      return state;
  }
}
