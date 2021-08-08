import {
  CREATE_STUDENT,
  UPDATE_STUDENT,
  SHORT_STUDENT_BY_DOB,
  FILTER_STUDENT_BY_GENDER,
  DELETE_STUDENT,
} from "./types";

// actions
export const addContact = (StudentData) => ({
  type: CREATE_STUDENT,
  payload: StudentData,
});

// update a StudentData
export const updateContact = (StudentData) => ({
  type: UPDATE_STUDENT,
  payload: StudentData,
});

// filter  a Student by gender
export const filterByGender = (value) => ({
  type: FILTER_STUDENT_BY_GENDER,
  payload: value,
});

// filter  a student by DOB
export const filterByDob = (value) => ({
  type: SHORT_STUDENT_BY_DOB,
  payload: value,
});

// Delete Student
export const deleteStudent = (value) => ({
  type: DELETE_STUDENT,
  payload: value,
});
