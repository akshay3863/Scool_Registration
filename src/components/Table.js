import React, { useState, useEffect } from "react";
import Filter from "./filter";
import { useSelector, useDispatch } from "react-redux";
import { updateContact } from "../Redux/Action/TodoAction";
import { deleteStudent } from "../Redux/Action/TodoAction";

function Table() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const StudentsData = useSelector((state) => state.StudentData.StudentsData);
  useEffect(() => {
    setData(StudentsData);
  }, [StudentsData]);
  const onUpdateValueHandler = (e, item) => {
    const NewObject = Object.assign({
      ...item,
      Status: e.target.value,
    });
    dispatch(updateContact(NewObject));
  };

  return (
    <div className="p-3 shadow" style={{ height: "85vh" }}>
      <Filter />
      <div
        style={{
          overflow: "auto",
          height: "75vh",
        }}
      >
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Roll nub</th>
              <th scope="col">FullName</th>
              <th scope="col">Address</th>
              <th scope="col">CollageName</th>
              <th scope="col">Year</th>
              <th scope="col">BranchName</th>
              <th scope="col">Gender</th>
              <th scope="col">DOB</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => {
                return (
                  <tr key={item?.id}>
                    <th>{item?.id}</th>
                    <td>{item?.FullName}</td>
                    <td style={{ width: "200px" }}>{item?.Address}</td>
                    <td>{item?.CollageName}</td>
                    <td>{item?.Year}</td>
                    <td>{item?.BranchName}</td>
                    <td>{item?.Gender}</td>
                    <td>{item?.DOB}</td>
                    <td>
                      <div>
                        <p
                          onClick={() => {
                            dispatch(deleteStudent(item?.id));
                          }}
                          className="Delete"
                        >
                          Delete
                        </p>
                        <p>Edit</p>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
