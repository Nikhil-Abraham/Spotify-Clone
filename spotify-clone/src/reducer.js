export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQC-wUeZvu8qQmogJ-zSbry3Ef9RSPdqLUwgQ0jj8ns3AxIAPjXzvKUw1UDS0lv5nbYAUb4JehvnFSagZQ0ok1xCiAtRGt6nnrWLDhwXOUrH3ARJUCsVL-yvNFS1Q93KYdPy1FGd9M-pQwVFiRjDDHmgucCys-_fuslTKQ_CGzrc_mEf",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
