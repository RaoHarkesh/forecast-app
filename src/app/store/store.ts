import { configureStore } from '@reduxjs/toolkit'
import { matrixSlice } from './matrix'
import { gameSlice } from './game'

// Configure the Redux store
export const store = configureStore({
  reducer: {
    matrixData: matrixSlice.reducer, // Add the matrix slice to the store
    gameData: gameSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {matrix: MatrixState}
export type AppDispatch = typeof store.dispatch
