import React, { useState } from "react";
import { BsArchiveFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { IoMdDoneAll } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Checked, DeleteTask, Edit } from "../Redux/TodoSlice";
import { useRef } from "react";
const Todo = ({ title, id }) => {
  const dispatch = useDispatch();
  const delTask = (id) => {
    dispatch(DeleteTask(id));
  };

  const checkeditem = (id) => {
    dispatch(Checked(id));
  };

  const edit = (id) => {
    dispatch(Edit(id));
  };

  return (
    <div className="todo m-3 p-3">
      <p className="text-start mb-5">{title}</p>
      <div className="d-flex justify-content-end">
        <BiEditAlt onClick={() => edit(id)} className="me-3" />
        <IoMdDoneAll onClick={() => checkeditem(id)} className="me-3" />
        <BsArchiveFill onClick={() => delTask(id)} className="me-3" />
      </div>
    </div>
  );
};

export default Todo;
