function graficapopularReducer(state, action) {
  switch (action.type) {
    case "ADD_MARKER":
      return {
        ...state,
        markers: [...state.markers, action.payload],
      };
    case "FETCH_MARKERS":
      return {
        ...state,
        markers: action.payload,
      };
    case "ADD_PHOTOGRAPHERS":
      return {
        ...state,
        photographers: [...state.photographers, action.payload],
      };
    case "FETCH_PHOTOGRAPHERS":
      return {
        ...state,
        photographers: action.payload,
      };
    case "FETCH_CITIES":
      return {
        ...state,
        cities: action.payload,
      };
    case "FETCH_URBANARTS":
      return {
        ...state,
        urbanarts: action.payload,
      };
    case "FETCH_URBANARTSCATEGORIES":
      return {
        ...state,
        urbanartscategories: action.payload,
      };
  }
}

export default graficapopularReducer;
