import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    moviesList: (state, action) => {
      state.movies = action.payload
    },
  },
})
export const { moviesList } = movieSlice.actions
export const selectMovie = (state) => state.movie.movies
export default movieSlice.reducer
