import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { addContact } from "../Redux/Action/TodoAction";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
function InputFrom() {
  const StudentsData = useSelector((state) => state.StudentData.StudentsData);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedYear, setSelectedYear] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    setData({
      id: StudentsData.length + 1,
      FullName: "",
      CollageName: "",
      Year: "",
      Address: "",
      BranchName: "",
      Gender: "",
      DOB: null,
    });
    setSelectedDate();
    setSelectedYear();
  }, [StudentsData]);
  const [Data, setData] = useState({
    id: null,
    FullName: "",
    CollageName: "",
    Year: null,
    Address: "",
    BranchName: "",
    Gender: "",
    DOB: null,
  });

  const valueChangeHandler = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const OnValueSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addContact(Data));
  };
  return (
    <div
      className="shadow p-3 rounded"
      style={{ background: "white", height: "85vh", overflow: "auto" }}
    >
      <form
        className="row p-3"
        onSubmit={(e) => OnValueSubmitHandler(e)}
        autoComplete="off"
      >
        <input
          type="text"
          className="form-control mb-md-3 mb-2"
          name="FullName"
          onChange={(e) => {
            valueChangeHandler(e);
          }}
          required
          placeholder="Enter Your FullName"
          value={Data?.FullName}
        />
        <input
          type="text"
          className="form-control mb-md-3 mb-2"
          name="CollageName"
          onChange={(e) => {
            valueChangeHandler(e);
          }}
          required
          placeholder="Enter Your Collage Name"
          value={Data?.CollageName}
        />

        <DatePicker
          placeholderText="Select Year"
          selected={selectedYear}
          onChange={(date) => {
            setSelectedYear(date);
            setData({
              ...Data,
              Year: moment(date).format("MMMM/yyyy"),
            });
          }}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          maxDate={new Date()}
          className="mb-md-3 mb-2"
          id="Date"
        />
        <select
          className="form-select mb-md-3 mb-2"
          required
          name="BranchName"
          onChange={(e) => {
            valueChangeHandler(e);
          }}
          value={Data?.BranchName}
        >
          <option disabled value="" selected>
            Select Branch Here
          </option>
          <option value="Bcom">Bcom</option>
          <option value="Bsc">Bsc</option>
          <option value="Bca">Bca</option>
          <option value="Eng">Eng</option>
        </select>
        <textarea
          type="text"
          name="Address"
          onChange={(e) => {
            valueChangeHandler(e);
          }}
          className="form-control mb-md-3 mb-2"
          id="validationCustom01"
          required
          placeholder="Enter Your Address"
          value={Data?.Address}
        />

        <DatePicker
          placeholderText="Select DOB"
          dateFormat="dd/mM/yyyy"
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
            setData({
              ...Data,
              DOB: moment(date).format("DD/MM/YYYY"),
            });
          }}
          maxDate={new Date()}
          className="mb-md-3 mb-2"
          id="Date"
        />

        <label className="mb-1 p-0">Select Gender :</label>
        <div className="mb-md-3 mb-2  p-0">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="inlineRadio1"
              value="male"
              checked={Data.Gender === "male"}
              onChange={(e) =>
                setData({
                  ...Data,
                  Gender: e.target.value,
                })
              }
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="inlineRadio2"
              value="female"
              checked={Data.Gender === "female"}
              onChange={(e) =>
                setData({
                  ...Data,
                  Gender: e.target.value,
                })
              }
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Female
            </label>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </form>
    </div>
  );
}

export default InputFrom;
