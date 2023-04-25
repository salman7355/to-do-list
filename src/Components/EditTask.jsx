import React, { useState } from "react";
import { BsArchiveFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { IoMdDoneAll } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Checked, DeleteTask, Edit, SubmitTitle } from "../Redux/TodoSlice";
import { useRef } from "react";
const EditTask = ({ title, id }) => {
  const [value, setValue] = useState(title);
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    setValue(value);
    dispatch(SubmitTitle(id, value));
    console.log(value);
  };

  return (
    <div className="todo m-3 p-3">
      <form action="" onSubmit={submit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <div className="d-flex justify-content-end"></div>
    </div>
  );
};

export default EditTask;
