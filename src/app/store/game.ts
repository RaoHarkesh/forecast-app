import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

// Define a type for the slice state
interface GameState {
  player1: string;
  player2: string;
  isPlayer1Active: boolean;
  isPlayer2Active: boolean
}

// Define the initial state using that type
const initialState: GameState = {
    player1: "",
    player2: "",
    isPlayer1Active: true,
    isPlayer2Active: false
}

export const gameSlice = createSlice({
  name: 'game',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateGameData: (state, action: PayloadAction<{player1: string; player2: string}>) => {
      state.player1  = action.payload.player1;
      state.player2 = action.payload.player2
    },
    updatePlayingChance: (state) => {
      state.isPlayer1Active = !state.isPlayer1Active;
      state.isPlayer2Active = !state.isPlayer2Active
    }
  },
})

export const { updateGameData, updatePlayingChance } = gameSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMatrix = (state: RootState) => state.matrixData.matrix

export default gameSlice.reducer