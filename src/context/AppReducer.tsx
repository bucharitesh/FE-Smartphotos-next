const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_VIDEO_PLAYING':
      return {
        ...state,
        videoPlaying: action.payload
      };

    default:
      return state;
  }
};

export default AppReducer;