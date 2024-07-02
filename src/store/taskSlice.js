import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {

    // add new task to the task list
    addTask: (state, action) => {
      state.push({ text: action.payload, completed: false })
    },

    // delete the task for task list
    deleteTask: (state, action) => {
      return state.filter((task, index) => index !== action.payload)
    },

    // mark completion of tasks
    toggleComplete: (state, action) => {
      state[action.payload].completed = !state[action.payload].completed
    },

    // to edit the existing tasks
    editTask: (state, action) => {
      state[action.payload.index].text = action.payload.text
    }
  }
})

export const { addTask, deleteTask, toggleComplete, editTask } = taskSlice.actions

export default taskSlice.reducer
