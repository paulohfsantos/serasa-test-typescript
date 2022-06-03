import { createContext, useReducer, useContext } from "react";
import { initialState, ratingReducer, RatingType } from "../../reducers/ratingReducer";
import { ReducerActionType } from '../../types/RatingReducers';

type InitialStateType = {
  rating: RatingType
}

type ContextProps = {
  state: InitialStateType
  dispatch: React.Dispatch<ReducerActionType>
}

type RatingProps = {
  children: React.ReactNode
}

const ratingInitialState = {
  rating: initialState
}

export const RatingContext = createContext<ContextProps>({
  state: ratingInitialState,
  dispatch: () => {},
});

// custom hook
export const useRatingContext = () => useContext(RatingContext);

// set provider
const RatingReducer = (state: InitialStateType, action: ReducerActionType) => ({
  rating: ratingReducer(state.rating, action),
});

export const RatingContextProvider: React.FC<RatingProps> = ({ children }) => {
  const [state, dispatch] = useReducer(RatingReducer, ratingInitialState);
  
  return (
    <RatingContext.Provider value={{ state, dispatch }}>
      {children}
    </RatingContext.Provider>
  );
};
