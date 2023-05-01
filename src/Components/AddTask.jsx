import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { AddUser } from "../Redux/TodoSlice";

const AddTask = () => {
  const [newTask, setNewTask] = useState("");

  const dispatch = useDispatch();
  const Add = (val) => {
    dispatch(AddUser(val));
  };

  return (
    <div>
      <h1 className="p-4">TODO</h1>
      <div className="d-flex justify-content-center mb-4">
        <input className="c-checkbox" type="checkbox" id="checkbox" />
        <div className="c-formContainer">
          <form className="c-form" action="">
            <input
              className="c-form__input"
              placeholder="Task"
              type="text"
              onChange={(e) => setNewTask(e.target.value)}
            />
            <label className="c-form__buttonLabel" for="checkbox">
              <button
                className="c-form__button"
                type="button"
                onClick={() => (newTask === "" ? null : Add(newTask))}
              >
                Add
              </button>
            </label>
            <label
              className="c-form__toggle"
              htmlFor="checkbox"
              data-title="Add Task"
            ></label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;

{
  /* <div className="d-flex justify-content-center">
  <label htmlFor="text" className="label">
    Task
  </label>
  <input
    type="text"
    id="text"
    className="input"
    placeholder="Enter your Task"
    onChange={(e) => setNewTask(e.target.value)}
  />
  <Button
    style={{
      fontWeight: "bolder",
      width: 35,
      height: 35,
    }}
    className="rounded-circle ms-3 "
    onClick={() => (newTask === "" ? null : Add(newTask))}
    variant="primary"
  >
    +
  </Button>
</div>; */
}
