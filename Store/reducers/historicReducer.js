const initialState = { historicFilms: [] }

function manageHistoricFilms(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case "TOGGLE_FILMDETAIL":
    const historicFilmIndex = state.historicFilms.findIndex((item) => item.id === action.value.id)
    if(!historicFilmIndex == -1) {
      // the movie is in the historic:
      nextState = {
        ...state,
        historicFilms : state.historicFilms.filter((item,index) => index !== historicFilmIndex)
      }
    } else {
      // the movie is not in the historic:
      nextState = {
        ...state,
        historicFilms : [...state.historicFilms, action.value.id]
      }
      return nextState || state
    }
    default:
      return state
  }
}

export default manageHistoricFilms
