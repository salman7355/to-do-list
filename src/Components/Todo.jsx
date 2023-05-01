import React, { useState } from "react";
import { BsArchiveFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { IoMdDoneAll } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  Checked,
  DeleteTask,
  StartEditing,
  SubmitEdit,
} from "../Redux/TodoSlice";
import { BiCheck } from "react-icons/bi";
const Todo = ({ id, isEditing }) => {
  const { title } = useSelector((state) => {
    return state.Todo.find((item) => item.id === id);
  });
  const dispatch = useDispatch();
  const [value, setValue] = useState(title);

  const delTask = (id) => {
    dispatch(DeleteTask(id));
  };

  const checkeditem = (id) => {
    dispatch(Checked(id));
  };

  const edit = (id) => {
    dispatch(StartEditing({ id }));
  };
  const handleSubmitEdit = (id, title) => {
    dispatch(SubmitEdit({ id, value: title }));
  };
  return (
    <div className="todo m-3 p-3">
      {!isEditing && <p className="text-start mb-5">{title}</p>}
      {isEditing && (
        <div className="inputbox">
          <input
            type="text"
            value={value}
            className="input"
            onChange={(e) => setValue(e.target.value)}
          />
          <span>{value}</span>
          <i></i>
        </div>
      )}
      <div className="d-flex justify-content-end">
        {!isEditing && (
          <>
            <BiEditAlt onClick={() => edit(id, title)} className="me-3" />
            <IoMdDoneAll onClick={() => checkeditem(id)} className="me-3" />
            <BsArchiveFill onClick={() => delTask(id)} className="me-3" />
          </>
        )}
        {isEditing && (
          <BiCheck
            className=" check"
            size={20}
            onClick={() => handleSubmitEdit(id, value)}
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
