import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Active, All, Completed } from "../Redux/TodoSlice";

const FilteredButtons = () => {
  const List = useSelector((state) => state.Todo);

  const [tasks, setTasks] = useState(List);

  const dispatch = useDispatch();
  const handleCompleted = () => {
    dispatch(Completed(tasks));
  };
  const handleActive = () => {
    dispatch(Active(tasks));
  };

  const handleAll = () => {
    dispatch(All(tasks));
  };

  return (
    <div className="mt-3">
      <Button className="ms-3" onClick={handleAll} variant="primary">
        All
      </Button>
      <Button className="ms-3" onClick={handleCompleted} variant="secondary">
        Completed
      </Button>
      <Button className="ms-3" onClick={handleActive} variant="success">
        Active
      </Button>
    </div>
  );
};

export default FilteredButtons;
