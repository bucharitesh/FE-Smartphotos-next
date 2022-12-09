import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  videoPlaying: '',
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function setVideoPlaying(value: string) {
    dispatch({
      type: 'SET_VIDEO_PLAYING',
      payload: value,
    });
  }

  return (
    <GlobalContext.Provider
      value={
        {
          videoPlaying: state.videoPlaying,
          setVideoPlaying,
        } as any
      }
    >
      {children}
    </GlobalContext.Provider>
  );
};
