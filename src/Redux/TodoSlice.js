import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "Todo",
  initialState: [
    {
      id: 1,
      title: "task number 1",
      isDone: false,
      isEditing: false,
    },
    {
      id: 2,
      title: "task number 2",
      isDone: true,
      isEditing: false,
    },
    {
      id: 3,
      title: "task number 3",
      isDone: false,
      isEditing: false,
    },
    {
      id: 4,
      title: "task number 4",
      isDone: true,
      isEditing: false,
    },
    {
      id: 5,
      title: "task number 5",
      isDone: false,
      isEditing: false,
    },
    {
      id: 6,
      title: "task number 6",
      isDone: true,
      isEditing: false,
    },
    {
      id: 7,
      title: "task number 7",
      isDone: false,
      isEditing: false,
    },
    {
      id: 8,
      title: "task number 8",
      isDone: false,
      isEditing: false,
    },
  ],

  reducers: {
    AddUser: (state, action) => {
      const data = {
        id: 9,
        title: action.payload,
        isDone: false,
      };
      state.push(data);
    },
    Completed: (state, action) => {
      return state.filter((item) => (item.isDone === true ? item : null));
    },
    Active: (state, action) => {
      return state.filter((item) => (item.isDone === false ? item : null));
    },
    All: (state, action) => {
      return action.payload;
    },
    DeleteTask: (state, action) => {
      const deltask = state.filter((item) => item.id !== action.payload);
      return deltask;
    },
    StartEditing: (state, action) => {
      state.map((todo) => {
        if (todo.id == action.payload.id) {
          todo.isEditing = !todo.isEditing;
        }
      });
    },
    SubmitEdit: (state, action) => {
      console.log(action.payload);
      state.map((todo) => {
        if (todo.id == action.payload.id) {
          todo.isEditing = !todo.isEditing;
          todo.title = action.payload.value;
        }
      });
    },
    SubmitTitle: (state, action) => {
      state.map((todo) => {
        if (todo.id == action.payload) {
          todo.isEditing = !todo.isEditing;
          todo.title = action.payload.value;
        }
      });
    },
    Checked: (state, action) => {
      state.map((todo) => {
        if (todo.id == action.payload) {
          todo.isDone = !todo.isDone;
        }
      });
    },
  },
});

export const {
  AddUser,
  Completed,
  Active,
  All,
  DeleteTask,
  Checked,
  SubmitTitle,
  StartEditing,
  SubmitEdit,
} = TodoSlice.actions;
export default TodoSlice.reducer;
