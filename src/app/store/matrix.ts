import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { MatrixBrick } from '../types/type'
import { RootState } from './store'

// Define a type for the slice state
interface MatrixState {
  matrix: Array<Array<MatrixBrick>>
}

// Define the initial state using that type
const initialState: MatrixState = {
  matrix: [],
}

export const matrixSlice = createSlice({
  name: 'matrix',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateMatrix: (state, action: PayloadAction<Array<Array<MatrixBrick>>>) => {
      state.matrix  = action.payload
    },
  },
})

export const { updateMatrix } = matrixSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMatrix = (state: RootState) => state.matrixData.matrix

export default matrixSlice.reducer