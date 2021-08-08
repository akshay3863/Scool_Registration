import React from "react";
import { filterByDob, filterByGender } from "../Redux/Action/TodoAction";
import { useDispatch, useSelector } from "react-redux";
const Filter = () => {
  const dispatch = useDispatch();
  const StudentsData = useSelector((state) => state.StudentData.StudentsData);

  return (
    <div className="d-flex mb-3 align-items-center">
      <div style={{ marginRight: "20px" }}>
        <select
          className="form-select"
          required
          name="todo"
          onChange={(e) => {
            dispatch(filterByGender(e.target.value));
          }}
        >
          <option value="" selected disabled>
            Filter By Gender
          </option>
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div style={{ marginRight: "20px" }}>
        <select
          className="form-select"
          onChange={(e) => {
            dispatch(filterByDob(e.target.value));
          }}
        >
          <option value="" selected disabled>
            Sort By DOB
          </option>
          <option value="">All Data</option>
          <option value="High">Highest</option>
          <option value="Low">Lowest</option>
        </select>
      </div>

      <div>Total {StudentsData.length} Record Founded</div>
    </div>
  );
};

export default Filter;
