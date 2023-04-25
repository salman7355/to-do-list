import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

export const TodoSlice = createSlice({
  name: "Todo",
  initialState: [
    {
      id: 1,
      title: "task number 1",
      isDone: false,
    },
    {
      id: 2,
      title: "task number 2",
      isDone: true,
    },
    {
      id: 3,
      title: "task number 3",
      isDone: false,
    },
    {
      id: 4,
      title: "task number 4",
      isDone: true,
    },
    {
      id: 5,
      title: "task number 5",
      isDone: false,
    },
    {
      id: 6,
      title: "task number 6",
      isDone: true,
    },
    {
      id: 7,
      title: "task number 7",
      isDone: false,
    },
    {
      id: 8,
      title: "task number 8",
      isDone: false,
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
      const newState = action.payload.filter((item) =>
        item.isDone === true ? item : null
      );
      return newState;
    },
    Active: (state, action) => {
      const newState = action.payload.filter((item) =>
        item.isDone === false ? item : null
      );
      return newState;
    },
    All: (state, action) => {
      return action.payload;
    },
    DeleteTask: (state, action) => {
      const deltask = state.filter((item) => item.id !== action.payload);
      return deltask;
    },
    Edit: (state, action) => {},
    Checked: (state, action) => {
      state.map((todo) => {
        if (todo.id == action.payload) {
          todo.isDone = true;
        }
        return state;
      });
    },
  },
});

export const { AddUser, Completed, Active, All, DeleteTask, Checked, Edit } =
  TodoSlice.actions;
export default TodoSlice.reducer;
